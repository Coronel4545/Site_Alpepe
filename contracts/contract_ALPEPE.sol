

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IPancakeFactory {
    function createPair(address tokenA, address tokenB) external returns (address pair);
    function getPair(address tokenA, address tokenB) external view returns (address pair);
}

interface IPancakeRouter {
    function factory() external pure returns (address);
    function WETH() external pure returns (address);
    function swapExactTokensForETHSupportingFeeOnTransferTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external;
    function addLiquidityETH(
        address token,
        uint amountTokenDesired,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    ) external payable returns (uint amountToken, uint amountETH, uint liquidity);
}

interface IBEP20 {
    function totalSupply() external view returns (uint256);
    function decimals() external view returns (uint8);
    function symbol() external view returns (string memory);
    function name() external view returns (string memory);
    function getOwner() external view returns (address);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address _owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract Context {
    constructor () { }

    function _msgSender() internal view returns (address) {
        return msg.sender;
    }

    function _msgData() internal view returns (bytes memory) {
        this;
        return msg.data;
    }
}

contract Ownable is Context {
    address public _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    constructor () {
        address msgSender = _msgSender();
        _owner = msgSender;
        emit OwnershipTransferred(address(0), msgSender);
    }

    function owner() public view returns (address) {
        return _owner;
    }

    modifier onlyOwner() {
        require(_owner == _msgSender(), "Ownable: caller is not the owner");
        _;
    }

    function renounceOwnership() public virtual onlyOwner {
        emit OwnershipTransferred(_owner, address(0));
        _owner = address(0);
    }

    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        emit OwnershipTransferred(_owner, newOwner);
        _owner = newOwner;
    }
}

abstract contract nonReentrantGuard {
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;

    uint256 private _status;

    constructor () {
        _status = _NOT_ENTERED;
    }

    modifier nonReentrant() {
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");

        _status = _ENTERED;

        _;

        _status = _NOT_ENTERED;
    }
}


contract ALPEPE_TOKEN is Context, IBEP20, Ownable, nonReentrantGuard{
    mapping (address => uint256) private _balances;
    mapping (address => mapping (address => uint256)) private _allowances;
    mapping (address => bool) public isExempt; // Mapping for exempt addresses
   
    uint256 public _totalSupply;
    uint8 public _decimals;
    string public _symbol;
    string public _name;

    // PancakeSwap V2  Addresses
    address public constant PANCAKESWAP_ROUTER = 0x10ED43C718714eb63d5aA57B78B54704E256024E; 
    IPancakeRouter public immutable pancakeRouter;
    address public pancakePair;

//Address

    address public marketingWallet = 0x1C8781a4197956B0da231cc20f1b8F2e537167a7;
    address public WBNB = 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c;
    address public burnAddress = 0x000000000000000000000000000000000000dEaD;
    address public constant restitution =0xfE2432F39feCCa1D4D1654cBa94d26CfAc4097F0; 
    address public constant Administrator= 0x7Bb2Dbb529771184207405c102E829d5d86c9457; //!Important

    /**
    
    The variable defined as a constant called "Administrator" is used to execute external functions even after the termination of the contract. However, the functions it can execute are by no means considered dangerous for token holders. These are functions that require constant control to ensure the proper functioning of the contract!

Here are the functions:

setEnableInternalSwap(): This function allows us to enable or disable the internal swap of the contract. This prevents the contract from exchanging $ALP tokens for WBNB at inopportune times for the project.

setAddressExempt(): This allows us to exempt or remove exemptions from wallets, which allows us to better control who will be exempt and released. A useful function for times when the token is used on third-party platforms.

setSwapAmountNew(): This allows us to control the trigger amount of tokens to activate the execution of the internal swap function. This allows us to always regulate the contract for smoother sales, consequently, less aggressive to the chart.

setBurnInternalStatus(): An additional burn function that will be enabled at opportune times to accelerate the token burning process. Reducing the circulating supply and increasing the likelihood of appreciation.

setNewPair(): This function allows us to add a new pair to the array, which ensures that we can charge fees on listings on other decentralized exchanges. Ensuring that there will be no problems with unfair arbitrage by traders.

setMarketingWallet(): This function ensures that we can always define a new address to receive the project's marketing fees. This ensures that we will not have future problems with loss or theft of the marketing wallet. Just call the function and assign a new address to it.

setTranferBurnStatus(): This function was created to enable or disable the automatic burning of tokens during transfers. Its main purpose is to allow the burn mechanism to be turned off once the token supply becomes sufficiently scarce, helping to preserve liquidity and maintain ecosystem balance.


Again, these functions do not represent a risk to investors, they only ensure that the contract can be managed in a healthy way. All other external functions can only be called by the contract's _owner, who will resign a few hours after the start of trading.
    
     */


    // Trading status
    bool public tradingEnabled;

//tax values

   uint256 public buyFee = 5;
   uint256 public sellFee = 5;
   uint256 public burnFee = 1;
   uint256 public liquidityFee = 1;
   uint256 public denominator = 100;



//ADD NEW PAIR 

address[] public newPair;


    uint256 public percentSwapAmount = 2;//2%
    uint256 public total_Supply= 100000000 *10 **18;
    uint256 public amountSwapTheBalance= (total_Supply * percentSwapAmount) / denominator; //2% of total supply
    
    //Enable/disable verification
    bool public enableInternalSwap;

    //Internal burn

    bool public burnInternal;

    //transfer fee burn
    bool public transferBurnStatus = true; // Initially enabled
    
    // Events
    event TradingStatusChanged(bool enabled);
    event AddressExemptStatusChanged(address indexed account, bool exempt);
    event BuyFeeUpdated(uint256 newBuyFee);
    event SellFeeUpdated(uint256 newSellFee);
    event MarketingWalletUpdated(address indexed newMarketingWallet);
    event LiquidityFeeUpdated(uint256 newLiquidityFee);
    event BurnFeeUpdated(uint256 newBurnFee);
    event TokensSwappedForBNB(uint256 tokensSwapped, uint256 bnbReceived);
    event TokensBurned(uint256 amount);
    event LiquidityAdded(uint256 tokensAmount, uint256 bnbAmount);
    event MarketingFeesCollected(uint256 amount);
    event SwapFailed(string reason);
    event TransferFailed(string reason);
    event WBNBWithdrawn(uint256 amount, address marketingWallet);
    event TokenWithdrawn(address token, uint256 amount, address marketingWallet);
    event enableInternalSwapUpdate(bool enableInternalSwap);
    event updateAmountSwap(uint256 amountSwapTheBalance);
    event updateInternalBurn(bool burnInternal);
    event updateNewPair(address newPair);
    event burnTransferStatus(bool transferBurnStatus);
    constructor() {
        _name = "ALPEPE";
        _symbol = "ALP";
        _decimals = 18;
        _totalSupply = 100000000 * 10**18; // 100M of tokens
        _balances[msg.sender] = _totalSupply;
        tradingEnabled = false; // Trading initially disabled
        enableInternalSwap = true; // The internal token swap for BNB is initially enabled.
        transferBurnStatus = true; // Initially enabled
        // Initialize PancakeSwap router

        burnInternal =false; //Initially false
        pancakeRouter = IPancakeRouter(PANCAKESWAP_ROUTER);
        
        // Create pair on PancakeSwap
        pancakePair = IPancakeFactory(pancakeRouter.factory())
            .createPair(address(this), pancakeRouter.WETH());

        // Defined exempt addresses
        isExempt[msg.sender] = true; // Owner is exempt
        isExempt[address(this)] = true; // Contract is exempt
        isExempt[marketingWallet] = true; // Marketing wallet is exempt
        isExempt[Administrator] = true; // Administrator is exempt
        emit Transfer(address(0), msg.sender, _totalSupply);
    }

   
   

    
    

    function getOwner() external view override returns (address) {
        return owner();
    }

    function decimals() external view override returns (uint8) {
        return _decimals;
    }

    function symbol() external view override returns (string memory) {
        return _symbol;
    }

    function name() external view override returns (string memory) {
        return _name;
    }

    function totalSupply() external view override returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) external view override returns (uint256) {
        return _balances[account];
    }

    function transfer(address recipient, uint256 amount) external override returns (bool) {
        _transfer(_msgSender(), recipient, amount);
        return true;
    }

    function allowance(address owner, address spender) external view override returns (uint256) {
        return _allowances[owner][spender];
    }

    function approve(address spender, uint256 amount) external override  nonReentrant returns (bool) {
        _approve(_msgSender(), spender, amount);
        return true;
    }

    function transferFrom(address sender, address recipient, uint256 amount) external nonReentrant override  returns (bool) {
        _transfer(sender, recipient, amount);
        _approve(sender, _msgSender(), _allowances[sender][_msgSender()] - amount);
        return true;
    }

    function increaseAllowance(address spender, uint256 addedValue) external  nonReentrant returns  (bool) {
        _approve(_msgSender(), spender, _allowances[_msgSender()][spender] + addedValue);
        return true;
    }

    function decreaseAllowance(address spender, uint256 subtractedValue) external nonReentrant returns (bool) {
        uint256 currentAllowance = _allowances[_msgSender()][spender];
        require(currentAllowance >= subtractedValue, "BEP20: decreased allowance below zero");
        _approve(_msgSender(), spender, currentAllowance - subtractedValue);
        return true;
    }

    function _transfer(address sender, address recipient, uint256 amount) internal   virtual nonReentrant {
        require(sender != address(0), "BEP20: transfer from the zero address");
        require(recipient != address(0), "BEP20: transfer to the zero address");
        require(_balances[sender] >= amount, "BEP20: transfer amount exceeds balance");
        require(tradingEnabled || isExempt[sender] || isExempt[recipient], "Trading is not enabled");
        require(_balances[sender] > 0, "Insufficient balance");

        uint256 transferAmount = amount;

        // Check if it's a buy or sell transaction and apply corresponding fees
        if (!isExempt[sender] && !isExempt[recipient]) {
            uint256 totalFee;
            uint256 burnAmount;
            uint256 liquidityAmount;
            uint256 marketingAmount;
            
            // Buy (transfer from pool to user)
            if (sender == pancakePair || _isNewPair(sender)) {
                totalFee = (amount * buyFee) / denominator;
                burnAmount = (amount * burnFee) / denominator;
                liquidityAmount = (amount * liquidityFee) / denominator;
                marketingAmount = totalFee - burnAmount - liquidityAmount;
            }
            // Sell (transfer from user to pool)
            else if (recipient == pancakePair || _isNewPair(recipient)) {
                totalFee = (amount * sellFee) / denominator;
                burnAmount = (amount * burnFee) / denominator;
                liquidityAmount = (amount * liquidityFee) / denominator;
                marketingAmount = totalFee - burnAmount - liquidityAmount;
            }

            if (totalFee > 0) {
                // Burn tokens
                if (burnAmount > 0 && transferBurnStatus == true) {
                    _totalSupply -= burnAmount;
                    emit TokensBurned(burnAmount);
                    emit Transfer(sender, address(0), burnAmount);
                }

                // Collect tokens for liquidity
                if (liquidityAmount > 0) {
                    _balances[address(this)] += liquidityAmount;
                    emit Transfer(sender, address(this), liquidityAmount);
                }

                // Collect tokens for marketing
                if (marketingAmount > 0) {
                    _balances[address(this)] += marketingAmount;
                    emit MarketingFeesCollected(marketingAmount);
                    emit Transfer(sender, address(this), marketingAmount);
                }

                transferAmount = amount - totalFee;
            }
        }

        _balances[sender] = _balances[sender] - amount;
        _balances[recipient] = _balances[recipient] + transferAmount;
        
        // Check if contract balance reached swap limit
        if (_balances[address(this)] >= amountSwapTheBalance && enableInternalSwap == true) {
            _swapTokensForBNB();
        }
        
        emit Transfer(sender, recipient, transferAmount);
    }

    function _approve(address owner, address spender, uint256 amount) internal virtual  {
        require(owner != address(0), "BEP20: approve from the zero address");
        require(spender != address(0), "BEP20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    function _swapTokensForBNB() internal {
        uint256 tokenBalance = _balances[address(this)];
        if (tokenBalance == 0) return;

        // Calculate tokens for liquidity (1% of amountSwapTheBalance = 2,000,000 tokens)
        uint256 liquidityTokens = (amountSwapTheBalance * liquidityFee) / denominator; // = 20,000 tokens
        // Half goes to pair (10,000 tokens)
        uint256 tokensForPair = liquidityTokens / 2; 
        // Remaining tokens will be swapped for BNB
        uint256 tokensToSwap = tokenBalance - tokensForPair; // tokensToSwap = 1,990,000 tokens $ALP

        // Calculate burn amount
        uint256 burnAmount = (tokensToSwap * burnFee) / denominator; // 1% for balance  (19,900 tokens $ALP)
        if (burnAmount > 0 && burnInternal == true) { //Burns during internal swap only if both conditions are true
            _totalSupply -= burnAmount; 
            emit TokensBurned(burnAmount);
            emit Transfer(address(this), burnAddress, burnAmount); 
        }

        // Approve router
        _approve(address(this), address(PANCAKESWAP_ROUTER), tokenBalance);

        // Setup swap path
        address[] memory path = new address[](2);
        path[0] = address(this);
        path[1] = WBNB;

        try IPancakeRouter(PANCAKESWAP_ROUTER).swapExactTokensForETHSupportingFeeOnTransferTokens(
            tokensToSwap - burnAmount, 
            0,
            path,
            address(this),
            block.timestamp
        ) {
            uint256 bnbBalance = address(this).balance;
            // Calculate proportional BNB for liquidity 
            uint256 bnbForLiquidity = (bnbBalance * tokensForPair) / (tokensToSwap - burnAmount);

            // 0.5% WBNB/0.5% ALP of the total liquidityFee for liquidity(1%)
            if (tokensForPair > 0 && bnbForLiquidity > 0) {
                IPancakeRouter(PANCAKESWAP_ROUTER).addLiquidityETH{value: bnbForLiquidity}(
                    address(this),
                    tokensForPair,
                    0,
                    0,
                    address(this),
                    block.timestamp
                );
                emit LiquidityAdded(tokensForPair, bnbForLiquidity);
            }

            // Send remaining BNB to marketing wallet
            (bool success,) = marketingWallet.call{value: address(this).balance}("");
            if (!success) {
                emit TransferFailed("BNB transfer to marketing wallet failed");
            }

            emit TokensSwappedForBNB(tokensToSwap, bnbBalance);
        } catch {
            emit SwapFailed("Swap tokens for BNB failed");
            return;
        }
    }
    

    //owner functions

    function setTradingStatus(bool _enabled) external onlyOwner {
        tradingEnabled = _enabled;
        emit TradingStatusChanged(_enabled);
    }

    function setBuyFee(uint256 newBuyFee) external onlyOwner {
        require(newBuyFee <= 20, "Purchase rate higher than allowed!");
        buyFee = newBuyFee;
        emit BuyFeeUpdated(newBuyFee);
    }   

    function setSellFee(uint256 newSellFee) external onlyOwner {
        require(newSellFee <= 20, "Sales rate higher than allowed!");
        sellFee = newSellFee;
        emit SellFeeUpdated(newSellFee);
    }   

    

    function setLiquidityFee(uint256 newLiquidityFee) external onlyOwner {
        require(newLiquidityFee <= 2,"Liquidity rate above permitted!");
        liquidityFee = newLiquidityFee;
        emit LiquidityFeeUpdated(newLiquidityFee);
    }   

    function setBurnFee(uint256 newBurnFee) external onlyOwner {
        require(newBurnFee <= 2, "Burning rate above permitted!");
        burnFee = newBurnFee;
        emit BurnFeeUpdated(newBurnFee);
    }   

    
    //public functions
    function withdrawWBNB() external  nonReentrant{
        uint256 wbnbBalance = IBEP20(WBNB).balanceOf(address(this));
        require(wbnbBalance > 0, "No WBNB to withdraw");
        
        bool success = IBEP20(WBNB).transfer(restitution, wbnbBalance);
        require(success, "WBNB transfer failed");
        
        emit WBNBWithdrawn(wbnbBalance, restitution);
    }

    function withdrwaNativeBNB() external nonReentrant{
        uint256 bnbBalance = address(this).balance;
        require(bnbBalance > 0, "No BNB to withdraw");
        
        (bool success,) = restitution.call{value: bnbBalance}("");
        require(success, "BNB transfer failed");
        
        emit WBNBWithdrawn(bnbBalance, restitution);
    }
    
    function withdrawToken(address token) external  nonReentrant{
        require(token != address(0), "Invalid token address");
        uint256 tokenBalance = IBEP20(token).balanceOf(address(this));
        require(tokenBalance > 0, "No tokens to withdraw");
        
        bool success = IBEP20(token).transfer(restitution, tokenBalance);
        require(success, "Token transfer failed");
        
        emit TokenWithdrawn(token, tokenBalance, restitution);
    }
//administrator functions
    function setEnableInternalSwap(bool _value) external {
     require(msg.sender == Administrator, "You are not an authorized administrator!");
     enableInternalSwap= _value; 

     emit enableInternalSwapUpdate(_value);  
    }

   function setTranferBurnStatus(bool _value) external {
        require(msg.sender == Administrator, "You are not an authorized administrator!");
        transferBurnStatus = _value;
        emit burnTransferStatus(_value);
    } 

 function setAddressExempt(address account, bool exempt) external  {
        require(msg.sender == Administrator,"You are not an authorized administrator!");
        require(account != address(0), "Invalid address");
        require(account != PANCAKESWAP_ROUTER && account != pancakePair, "Address cannot be changed");
        isExempt[account] = exempt;
        emit AddressExemptStatusChanged(account, exempt);
    }

    function setSwapAmountNew(uint256 _newAmountSwap, bool _confirm)external {
       require(msg.sender == Administrator, "You are not an authorized administrator!");
       require(_newAmountSwap > 0, "The amount cannot be zero!");
       require(_confirm, "You must confirm the change!");
       amountSwapTheBalance = _newAmountSwap;

       emit updateAmountSwap(_newAmountSwap);

}
function setBurnInternalStatus(bool _valueBurn)external {
    require(msg.sender == Administrator, "You are not an authorized administrator!");
    burnInternal = _valueBurn;

    emit updateInternalBurn(_valueBurn);
}
    
function setNewPair (address _newPair) external {
    require(msg.sender == Administrator, "You are not an authorized administrator!");
    require(_newPair != address(0), "Addresses cannot be the zero address!");
    require(newPair.length < 20, "The list has already reached its maximum value!");
    newPair.push(_newPair);
    
    emit updateNewPair(newPair[newPair.length - 1]);
}    

function setMarketingWallet(address newMarketingWallet) external  {
        require(msg.sender == Administrator, "You are not an authorized administrator!");
        require(newMarketingWallet != address(0), "Invalid Address!");
        marketingWallet = newMarketingWallet;
        emit MarketingWalletUpdated(newMarketingWallet);
    }    

 

    // Helper function to check if the address is a new pair.
    function _isNewPair(address account) internal  view returns  (bool) {
        for (uint256 i = 0; i < newPair.length; i++) {
            if (newPair[i] == account) {
                return true;
            }
        }
        return false;
    }

    // Add function to receive BNB
    receive() external payable {}
}