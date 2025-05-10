

const contractAddress = "0x223009A2abDBFc2ccebCECdf420820b6ae0692eA";

const contract_ABI = [
   {
      "inputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"constructor"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"account",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"bool",
            "name":"exempt",
            "type":"bool"
         }
      ],
      "name":"AddressExemptStatusChanged",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"owner",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"spender",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"value",
            "type":"uint256"
         }
      ],
      "name":"Approval",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"newBurnFee",
            "type":"uint256"
         }
      ],
      "name":"BurnFeeUpdated",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"newBuyFee",
            "type":"uint256"
         }
      ],
      "name":"BuyFeeUpdated",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"tokensAmount",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"bnbAmount",
            "type":"uint256"
         }
      ],
      "name":"LiquidityAdded",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"newLiquidityFee",
            "type":"uint256"
         }
      ],
      "name":"LiquidityFeeUpdated",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         }
      ],
      "name":"MarketingFeesCollected",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"newMarketingWallet",
            "type":"address"
         }
      ],
      "name":"MarketingWalletUpdated",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"previousOwner",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"newOwner",
            "type":"address"
         }
      ],
      "name":"OwnershipTransferred",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"newSellFee",
            "type":"uint256"
         }
      ],
      "name":"SellFeeUpdated",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"string",
            "name":"reason",
            "type":"string"
         }
      ],
      "name":"SwapFailed",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"address",
            "name":"token",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"address",
            "name":"marketingWallet",
            "type":"address"
         }
      ],
      "name":"TokenWithdrawn",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         }
      ],
      "name":"TokensBurned",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"tokensSwapped",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"bnbReceived",
            "type":"uint256"
         }
      ],
      "name":"TokensSwappedForBNB",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"bool",
            "name":"enabled",
            "type":"bool"
         }
      ],
      "name":"TradingStatusChanged",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"from",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"to",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"value",
            "type":"uint256"
         }
      ],
      "name":"Transfer",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"string",
            "name":"reason",
            "type":"string"
         }
      ],
      "name":"TransferFailed",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"address",
            "name":"marketingWallet",
            "type":"address"
         }
      ],
      "name":"WBNBWithdrawn",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"bool",
            "name":"transferBurnStatus",
            "type":"bool"
         }
      ],
      "name":"burnTransferStatus",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"bool",
            "name":"enableInternalSwap",
            "type":"bool"
         }
      ],
      "name":"enableInternalSwapUpdate",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"amountSwapTheBalance",
            "type":"uint256"
         }
      ],
      "name":"updateAmountSwap",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"bool",
            "name":"burnInternal",
            "type":"bool"
         }
      ],
      "name":"updateInternalBurn",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"address",
            "name":"newPair",
            "type":"address"
         }
      ],
      "name":"updateNewPair",
      "type":"event"
   },
   {
      "inputs":[
         
      ],
      "name":"Administrator",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"FACEBOOK",
      "outputs":[
         {
            "internalType":"string",
            "name":"",
            "type":"string"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"PANCAKESWAP_ROUTER",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"TELEGRAM",
      "outputs":[
         {
            "internalType":"string",
            "name":"",
            "type":"string"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"WBNB",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"WHATSAPP",
      "outputs":[
         {
            "internalType":"string",
            "name":"",
            "type":"string"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"_decimals",
      "outputs":[
         {
            "internalType":"uint8",
            "name":"",
            "type":"uint8"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"_name",
      "outputs":[
         {
            "internalType":"string",
            "name":"",
            "type":"string"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"_owner",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"_symbol",
      "outputs":[
         {
            "internalType":"string",
            "name":"",
            "type":"string"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"_totalSupply",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"owner",
            "type":"address"
         },
         {
            "internalType":"address",
            "name":"spender",
            "type":"address"
         }
      ],
      "name":"allowance",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"amountSwapTheBalance",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"spender",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         }
      ],
      "name":"approve",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"account",
            "type":"address"
         }
      ],
      "name":"balanceOf",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"burnAddress",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"burnFee",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"burnInternal",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"buyFee",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"decimals",
      "outputs":[
         {
            "internalType":"uint8",
            "name":"",
            "type":"uint8"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"spender",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"subtractedValue",
            "type":"uint256"
         }
      ],
      "name":"decreaseAllowance",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"denominator",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"enableInternalSwap",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"bool",
            "name":"_confirm",
            "type":"bool"
         }
      ],
      "name":"forceSwap",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"getOwner",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"spender",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"addedValue",
            "type":"uint256"
         }
      ],
      "name":"increaseAllowance",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "name":"isExempt",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"liquidityFee",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"marketingWallet",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"name",
      "outputs":[
         {
            "internalType":"string",
            "name":"",
            "type":"string"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "name":"newPair",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"owner",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"pancakePair",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"pancakeRouter",
      "outputs":[
         {
            "internalType":"contract IPancakeRouter",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"percentSwapAmount",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"bool",
            "name":"_confirm",
            "type":"bool"
         }
      ],
      "name":"renounceOwnership",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"restitution",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"sellFee",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"account",
            "type":"address"
         },
         {
            "internalType":"bool",
            "name":"exempt",
            "type":"bool"
         }
      ],
      "name":"setAddressExempt",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"newBurnFee",
            "type":"uint256"
         }
      ],
      "name":"setBurnFee",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"bool",
            "name":"_valueBurn",
            "type":"bool"
         }
      ],
      "name":"setBurnInternalStatus",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"newBuyFee",
            "type":"uint256"
         }
      ],
      "name":"setBuyFee",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"bool",
            "name":"_value",
            "type":"bool"
         }
      ],
      "name":"setEnableInternalSwap",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"newLiquidityFee",
            "type":"uint256"
         }
      ],
      "name":"setLiquidityFee",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"newMarketingWallet",
            "type":"address"
         }
      ],
      "name":"setMarketingWallet",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"_newPair",
            "type":"address"
         }
      ],
      "name":"setNewPair",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"newSellFee",
            "type":"uint256"
         }
      ],
      "name":"setSellFee",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"_newAmountSwap",
            "type":"uint256"
         },
         {
            "internalType":"bool",
            "name":"_confirm",
            "type":"bool"
         }
      ],
      "name":"setSwapAmountNew",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"bool",
            "name":"_enabled",
            "type":"bool"
         }
      ],
      "name":"setTradingStatus",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"bool",
            "name":"_value",
            "type":"bool"
         }
      ],
      "name":"setTranferBurnStatus",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"symbol",
      "outputs":[
         {
            "internalType":"string",
            "name":"",
            "type":"string"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"totalSupply",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"total_Supply",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"tradingEnabled",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"recipient",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         }
      ],
      "name":"transfer",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"transferBurnStatus",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"sender",
            "type":"address"
         },
         {
            "internalType":"address",
            "name":"recipient",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         }
      ],
      "name":"transferFrom",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"newOwner",
            "type":"address"
         }
      ],
      "name":"transferOwnership",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"token",
            "type":"address"
         }
      ],
      "name":"withdrawToken",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"withdrawWBNB",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"withdrwaNativeBNB",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "stateMutability":"payable",
      "type":"receive"
   }
]


document.addEventListener('DOMContentLoaded', async () => {
    const web3 = new Web3("https://bsc-dataseed.binance.org/");
    const contractInteract = new web3.eth.Contract(contract_ABI, contractAddress);
    let previousBurnedTokens = 0;

    // Atualiza o status de queima
    async function getCurrentBurnStatus() {
        try {
            const status = await contractInteract.methods.burnInternal().call();
            const statusElement = document.getElementById('STATUS');
            statusElement.innerText = status ? "HABILITADA" : "DESABILITADA";
            statusElement.classList.toggle('enabled', status); // Adiciona ou remove a classe 'enabled'
        } catch (error) {
            console.error('Erro ao buscar status atual:', error);
        }
    }

    // Atualiza os tokens queimados
    async function updateBurnedTokens() {
        try {
            const totalSupply = await contractInteract.methods.totalSupply().call();
            const initialSupply = 150000000n; // Supply inicial correto (150 milhões)
            const circulatingSupply = BigInt(totalSupply) / 10n ** 18n; // Converte totalSupply para BigInt e ajusta para 18 casas decimais
            const burnedTokens = initialSupply - circulatingSupply; // Calcula os tokens queimados

            if (burnedTokens !== previousBurnedTokens) {
                animateValue(Number(previousBurnedTokens), Number(burnedTokens), 1000); // Converte para Number para animação
                previousBurnedTokens = burnedTokens;
            }
        } catch (error) {
            console.error("Erro ao buscar totalSupply:", error);
        }
    }

    // Atualiza o fornecimento circulante
    async function updateCirculatingSupply() {
        try {
            const totalSupply = await contractInteract.methods.totalSupply().call();
            const circulatingSupply = BigInt(totalSupply) / 10n ** 18n; // Converte totalSupply para BigInt e ajusta para 18 casas decimais
            const circulatingElement = document.getElementById('Circulant');
            const currentDisplayedValue = parseFloat(circulatingElement.innerText.replace(/,/g, '')); // Remove vírgulas e converte para número

            if (circulatingSupply < currentDisplayedValue) {
                // Apenas anima se o novo valor for menor
                animateCirculatingSupply(currentDisplayedValue, Number(circulatingSupply), 1000);
            } else {
                // Atualiza diretamente se o valor for maior (não deve ocorrer, mas é uma segurança)
                circulatingElement.innerText = `${formatNumber(circulatingSupply)} tokens $ALP`;
            }
        } catch (error) {
            console.error("Erro ao buscar o fornecimento circulante:", error);
        }
    }

    // Verifica o status de renúncia
    async function checkRenunciationStatus() {
        try {
            const ownerAddress = await contractInteract.methods.getOwner().call(); // Consulta o proprietário
            const renunciationElement = document.getElementById('Status_renuncia');

            if (ownerAddress === "0x0000000000000000000000000000000000000000") {
                // Proprietário renunciado
                renunciationElement.innerText = "RENUNCIADO";
                renunciationElement.classList.add('renounced'); // Adiciona a classe para estilo verde
                renunciationElement.classList.remove('not-renounced'); // Remove a classe vermelha
            } else {
                // Proprietário não renunciado
                renunciationElement.innerText = "NÃO RENUNCIADO";
                renunciationElement.classList.add('not-renounced'); // Adiciona a classe para estilo vermelho
                renunciationElement.classList.remove('renounced'); // Remove a classe verde
            }
        } catch (error) {
            console.error("Erro ao verificar o status de renúncia:", error);
        }
    }

    // Função para animar os valores
    function animateValue(start, end, duration) {
        let startTimestamp = null;
        const deployStatus = document.getElementById('BURNAMOUNT');

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = (progress * (end - start) + start).toFixed(4);
            deployStatus.innerText = `${formatNumber(currentValue)}  $ALP`;

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Função para animar o fornecimento circulante
    function animateCirculatingSupply(start, end, duration) {
        let startTimestamp = null;
        const circulatingElement = document.getElementById('Circulant');

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = (start - progress * (start - end)).toFixed(4); // Sempre diminui
            circulatingElement.innerText = `${formatNumber(currentValue)}  $ALP`;

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Função para formatar números
    function formatNumber(num) {
        const parts = num.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }

    // Chamadas iniciais e intervalos
    await getCurrentBurnStatus();
    setInterval(getCurrentBurnStatus, 15000); // Atualiza o status de queima a cada 15 segundos

    await updateBurnedTokens();
    setInterval(updateBurnedTokens, 15000); // Atualiza os tokens queimados a cada 15 segundos

    await updateCirculatingSupply();
    setInterval(updateCirculatingSupply, 15000); // Atualiza o fornecimento circulante a cada 15 segundos

    await checkRenunciationStatus();
    setInterval(checkRenunciationStatus, 15000); // Atualiza o status de renúncia a cada 15 segundos
});