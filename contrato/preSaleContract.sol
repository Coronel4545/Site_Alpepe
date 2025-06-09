/**
 *Submitted for verification at BscScan.com on 2025-06-02
*/

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.30;

/**
 * @title IBEP20
 * @dev Interface for BEP20 tokens
 */
interface IBEP20 {
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address _owner, address spender) external view returns (uint256);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

/**
 * @title AggregatorV3Interface
 * @dev Interface for Chainlink price oracle
 */
interface AggregatorV3Interface {
    function decimals() external view returns (uint8);
    function description() external view returns (string memory);
    function version() external view returns (uint256);
    function getRoundData(uint80 _roundId) external view returns (
        uint80 roundId,
        int256 answer,
        uint256 startedAt,
        uint256 updatedAt,
        uint80 answeredInRound
    );
    function latestRoundData() external view returns (
        uint80 roundId,
        int256 answer,
        uint256 startedAt,
        uint256 updatedAt,
        uint80 answeredInRound
    );
}

/**
 * @title preSaleContract
 * @dev Token pre-sale contract with BNB and USDT support
 */
contract preSaleContractAlpepe {
    AggregatorV3Interface internal priceFeed;
    
    // Token addresses
    address constant BNB_USD_FEED = 0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE;
    address constant USDT = 0x55d398326f99059fF775485246999027B3197955; // USDT on BSC
    address public receiverAddress = 0xcEB1FAba18C57CcD191bf461F586f9270a52122C; // Wallet for receiving funds
    
    // Reentrancy protection variables
    bool private locked;
    
    // Pre-sale variables
    address public owner;
    uint256 public minBuy = 20 * 1e18; // 20 USD
    uint256 public maxBuy = 1500 * 1e18; // 1500 USD
    uint256 public totalRaised;
    bool public isPaused;
    
    // Constants for validation
    uint256 public constant PRICE_FEED_TIMEOUT = 1 hours; // Maximum time for price feed to be considered valid
    
    struct TokenInfo {
        address tokenAddress;
        uint256 price; // Price in USD
        uint256 totalSold;
        bool isActive;
    }
    
    TokenInfo[] public tokens;
    mapping(address => uint256) public contributions;
    mapping(address => bool) public tokenExists; // Track existing tokens
    
    event TokensPurchased(address indexed buyer, address indexed token, uint256 amount, uint256 cost);
    event TokenAdded(address indexed token, uint256 price);
    event TokenRemoved(address indexed token);
    event ReceiverAddressChanged(address indexed oldAddress, address indexed newAddress);
    event OwnerChanged(address indexed oldOwner, address indexed newOwner);
    event PreSalePaused(bool isPaused);
    event TokenPriceUpdated(uint256 indexed tokenIndex, uint256 oldPrice, uint256 newPrice);
    event MinBuyUpdated(uint256 oldValue, uint256 newValue);
    event MaxBuyUpdated(uint256 oldValue, uint256 newValue);
    event TokenDeposited(address indexed token, uint256 amount);
    
    modifier nonReentrantGuard() {
        require(!locked, "Reentrant call");
        locked = true;
        _;
        locked = false;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    modifier whenNotPaused() {
        require(!isPaused, "Pre-sale is paused");
        _;
    }
    
    constructor() {
        owner = msg.sender;
        priceFeed = AggregatorV3Interface(BNB_USD_FEED);
    }
    
    /**
     * @dev Returns current BNB price in USD
     */
    function getBNBPrice() public view returns (uint256) {
        (, int price,, uint timeStamp,) = priceFeed.latestRoundData();
        
        require(price > 0, "Invalid BNB price");
        require(timeStamp > 0, "Round not complete");
        require(block.timestamp - timeStamp <= PRICE_FEED_TIMEOUT, "Price feed too old");
        require(uint256(price) >= 1e8, "BNB price too low"); // Minimum $1
        
        return uint256(price);
    }
    
    /**
     * @dev Adds a new token for sale
     * @param _tokenAddress Token address
     * @param _price Token price in USD
     */
    function addToken(address _tokenAddress, uint256 _price) external onlyOwner {
        require(_tokenAddress != address(0), "Invalid token address");
        require(!tokenExists[_tokenAddress], "Token already exists");
        require(_price > 0, "Invalid token price");
        
        // Check if address is a contract
        uint256 size;
        assembly {
            size := extcodesize(_tokenAddress)
        }
        require(size > 0, "Address is not a contract");
        
        // Check if token is transferable
        try IBEP20(_tokenAddress).transfer(address(this), 0) returns (bool success) {
            require(success, "Token is not transferable");
        } catch {
            revert("Token is not transferable");
        }
        
        tokens.push(TokenInfo({
            tokenAddress: _tokenAddress,
            price: _price,
            totalSold: 0,
            isActive: true
        }));
        
        tokenExists[_tokenAddress] = true;
        emit TokenAdded(_tokenAddress, _price);
    }
    
    /**
     * @dev Removes a token from sale
     * @param _index Token index in array
     */
    function removeToken(uint256 _index) external onlyOwner {
        require(_index < tokens.length, "Invalid token index");
        address tokenAddress = tokens[_index].tokenAddress;
        tokens[_index].isActive = false;
        tokenExists[tokenAddress] = false;
        emit TokenRemoved(tokenAddress);
    }
    
    /**
     * @dev Buy tokens using BNB
     * @param _tokenIndex Token index in array
     */
    function buyTokensInBNBNative(uint256 _tokenIndex) external payable nonReentrantGuard whenNotPaused {
        require(_tokenIndex < tokens.length, "Invalid token index");
        require(msg.value > 0, "Send BNB to buy tokens");
        require(tokens[_tokenIndex].isActive, "Token not active");
        
        uint256 bnbPrice = getBNBPrice();
        uint256 usdAmount = (msg.value * bnbPrice) / 1e8;
        require(usdAmount > 0, "Invalid USD amount");
        
        require(usdAmount >= minBuy, "Amount below minimum");
        require(usdAmount + contributions[msg.sender] <= maxBuy, "Amount above maximum");
        
        uint256 tokenAmount = (usdAmount * 1e18) / tokens[_tokenIndex].price;
        require(tokenAmount > 0, "Invalid token amount");
        
        // Check contract token balance
        require(
            IBEP20(tokens[_tokenIndex].tokenAddress).balanceOf(address(this)) >= tokenAmount,
            "Insufficient token balance in contract"
        );
        
        // Check contract BNB balance
        require(address(this).balance >= msg.value, "Insufficient BNB balance");
        
        contributions[msg.sender] += usdAmount;
        totalRaised += usdAmount;
        tokens[_tokenIndex].totalSold += tokenAmount;
        
        // Transfer BNB to receiverAddress
        payable(receiverAddress).transfer(msg.value);
        
        IBEP20(tokens[_tokenIndex].tokenAddress).transfer(msg.sender, tokenAmount);
        
        emit TokensPurchased(msg.sender, tokens[_tokenIndex].tokenAddress, tokenAmount, usdAmount);
    }
    
    /**
     * @dev Buy tokens using USDT
     * @param _tokenIndex Token index in array
     * @param _usdtAmount Amount of USDT
     */
    function buyTokensInUSDT(uint256 _tokenIndex, uint256 _usdtAmount) external nonReentrantGuard whenNotPaused {
        require(_tokenIndex < tokens.length, "Invalid token index");
        require(_usdtAmount > 0, "Amount must be greater than 0");
        require(tokens[_tokenIndex].isActive, "Token not active");
        
        require(_usdtAmount >= minBuy, "Amount below minimum");
        require(_usdtAmount + contributions[msg.sender] <= maxBuy, "Amount above maximum");
        
        uint256 tokenAmount = (_usdtAmount * 1e18) / tokens[_tokenIndex].price;
        
        // Check user's USDT balance
        require(
            IBEP20(USDT).balanceOf(msg.sender) >= _usdtAmount,
            "Insufficient USDT balance"
        );
        
        // Check user's USDT allowance
        require(
            IBEP20(USDT).allowance(msg.sender, address(this)) >= _usdtAmount,
            "Insufficient USDT allowance"
        );
        
        // Check contract token balance
        require(
            IBEP20(tokens[_tokenIndex].tokenAddress).balanceOf(address(this)) >= tokenAmount,
            "Insufficient token balance in contract"
        );
        
        // Transfer USDT directly from buyer to receiverAddress
        IBEP20(USDT).transferFrom(msg.sender, receiverAddress, _usdtAmount);
        
        contributions[msg.sender] += _usdtAmount;
        totalRaised += _usdtAmount;
        tokens[_tokenIndex].totalSold += tokenAmount;
        
        IBEP20(tokens[_tokenIndex].tokenAddress).transfer(msg.sender, tokenAmount);
        
        emit TokensPurchased(msg.sender, tokens[_tokenIndex].tokenAddress, tokenAmount, _usdtAmount);
    }
    
    /**
     * @dev Returns token information
     * @param _index Token index in array
     */
    function getTokenInfo(uint256 _index) external view returns (TokenInfo memory) {
        require(_index < tokens.length, "Invalid token index");
        return tokens[_index];
    }
    
    /**
     * @dev Returns total number of tokens
     */
    function getTokensCount() external view returns (uint256) {
        return tokens.length;
    }

    /**
     * @dev Returns total raised in USD
     */
    function getTotalRaised() external view returns (uint256) {
        return totalRaised;
    }

    /**
     * @dev Returns total contributions of an address in USD
     * @param _address Contributor address
     */
    function getContributions(address _address) external view returns (uint256) {
        return contributions[_address];
    }

    /**
     * @dev Returns token price in USDT
     * @param _tokenIndex Token index in array
     */
    function getTokenPriceInUSDT(uint256 _tokenIndex) external view returns (uint256) {
        require(_tokenIndex < tokens.length, "Invalid token index");
        return tokens[_tokenIndex].price;
    }

    /**
     * @dev Returns total tokens sold in USD
     * @param _tokenIndex Token index in array
     */
    function getTotalSoldInUSD(uint256 _tokenIndex) external view returns (uint256) {
        require(_tokenIndex < tokens.length, "Invalid token index");
        return (tokens[_tokenIndex].totalSold * tokens[_tokenIndex].price) / 1e18;
    }
    
    /**
     * @dev Withdraws BNB from contract
     */
    function withdrawBNB() external onlyOwner {
        payable(receiverAddress).transfer(address(this).balance);
    }
    
    /**
     * @dev Withdraws tokens from contract
     * @param _tokenAddress Token address
     */
    function withdrawTokens(address _tokenAddress) external onlyOwner {
        uint256 balance = IBEP20(_tokenAddress).balanceOf(address(this));
        IBEP20(_tokenAddress).transfer(receiverAddress, balance);
    }

    /**
     * @dev Sets new receiver address
     * @param _newAddress New address
     * @param _confirm Change confirmation
     */
    function setReceiverAddress(address _newAddress, bool _confirm) external onlyOwner {
        require(_newAddress != address(0), "Address cannot be null address");
        require(_confirm, "Without a positive response, the function will not be executed successfully.");
        address oldAddress = receiverAddress;
        receiverAddress = _newAddress;
        emit ReceiverAddressChanged(oldAddress, _newAddress);
    }

    /**
     * @dev Sets new minimum buy amount
     * @param _newMinBuyValue New minimum value
     */
    function setMinBuy(uint256 _newMinBuyValue) external onlyOwner {
        require(_newMinBuyValue > 0, "Minimum value must be greater than 0");
        uint256 oldValue = minBuy;
        minBuy = _newMinBuyValue;
        emit MinBuyUpdated(oldValue, _newMinBuyValue);
    }

    /**
     * @dev Sets new maximum buy amount
     * @param _newMaxBuyValue New maximum value
     */
    function setMaxBuy(uint256 _newMaxBuyValue) external onlyOwner {
        require(_newMaxBuyValue <= 4200 * 1e18, "The maximum amount cannot exceed $4,200 USD");
        uint256 oldValue = maxBuy;
        maxBuy = _newMaxBuyValue;
        emit MaxBuyUpdated(oldValue, _newMaxBuyValue);
    }

    /**
     * @dev Sets new owner
     * @param _newOwner New owner
     * @param _confirm Change confirmation
     */
    function setNewOwner(address _newOwner, bool _confirm) external onlyOwner {
        require(_newOwner != address(0), "New owner cannot be null address");
        require(_confirm, "It is necessary to confirm the change of owner address.");
        address oldOwner = owner;
        owner = _newOwner;
        emit OwnerChanged(oldOwner, _newOwner);
    }

    /**
     * @dev Pauses or unpauses the pre-sale
     * @param _paused New pause state
     */
    function setPaused(bool _paused) external onlyOwner {
        isPaused = _paused;
        emit PreSalePaused(_paused);
    }

    /**
     * @dev Updates Chainlink price feed address
     * @param _newFeed New price feed address
     * @param _confirm Change confirmation
     */
    function updatePriceFeed(address _newFeed, bool _confirm) external onlyOwner {
        require(_newFeed != address(0), "Invalid price feed address");
        require(_confirm, "Change not confirmed");
        priceFeed = AggregatorV3Interface(_newFeed);
    }

    /**
     * @dev Returns token price in BNB
     * @param _tokenIndex Token index in array
     */
    function getTokenPriceInBNB(uint256 _tokenIndex) external view returns (uint256) {
        require(_tokenIndex < tokens.length, "Invalid token index");
        uint256 bnbPrice = getBNBPrice();
        return (tokens[_tokenIndex].price * 1e8) / bnbPrice; // Adjust for Chainlink decimals
    }

    /**
     * @dev Returns total tokens available for sale
     * @param _tokenIndex Token index in array
     */
    function getTotalTokensAvailable(uint256 _tokenIndex) external view returns (uint256) {
        require(_tokenIndex < tokens.length, "Invalid token index");
        return IBEP20(tokens[_tokenIndex].tokenAddress).balanceOf(address(this));
    }

    /**
     * @dev Returns total tokens sold
     * @param _tokenIndex Token index in array
     */
    function getTotalTokensSold(uint256 _tokenIndex) external view returns (uint256) {
        require(_tokenIndex < tokens.length, "Invalid token index");
        return tokens[_tokenIndex].totalSold;
    }

    /**
     * @dev Updates token price
     * @param _tokenIndex Token index in array
     * @param _newPrice New price in USD
     * @param _confirm Change confirmation
     */
    function updateTokenPrice(uint256 _tokenIndex, uint256 _newPrice, bool _confirm) external onlyOwner {
        require(_tokenIndex < tokens.length, "Invalid token index");
        require(_newPrice > 0, "Invalid price");
        require(_confirm, "Change not confirmed");
        uint256 oldPrice = tokens[_tokenIndex].price;
        tokens[_tokenIndex].price = _newPrice;
        emit TokenPriceUpdated(_tokenIndex, oldPrice, _newPrice);
    }

    /**
     * @dev Recovers tokens sent by mistake
     * @param _tokenAddress Token address to recover
     * @param _amount Amount to recover
     */
    function recoverTokens(address _tokenAddress, uint256 _amount) external onlyOwner {
        require(_tokenAddress != address(0), "Invalid token address");
        require(_amount > 0, "Amount must be greater than 0");
        require(IBEP20(_tokenAddress).balanceOf(address(this)) >= _amount, "Insufficient balance");
        IBEP20(_tokenAddress).transfer(receiverAddress, _amount);
    }

    /**
     * @dev Deposits tokens into the contract
     * @param _tokenAddress Token address to deposit
     */

    function depositTokens(address _tokenAddress)external onlyOwner{
        require(_tokenAddress != address(0), "Invalid token address");
        require((IBEP20(_tokenAddress).allowance(msg.sender, address(this)) > 0), "Insufficient allowance");
        address contractAddress = address(this);
        uint256 balance = IBEP20(_tokenAddress).balanceOf(msg.sender);
        require(balance > 0, "No tokens to deposit");
        IBEP20(_tokenAddress).transferFrom(msg.sender, contractAddress, balance);
        emit TokenDeposited(_tokenAddress, balance);
    }
}