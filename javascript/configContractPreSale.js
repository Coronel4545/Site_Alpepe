const preSaleContractAddress ="0xd4b15639A0489790D9997C77e6d181C68fA2AF5F";

const tokenAddress = "0x223009A2abDBFc2ccebCECdf420820b6ae0692eA";

const DATA_ABI = [
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
             "indexed":false,
             "internalType":"uint256",
             "name":"oldValue",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"newValue",
             "type":"uint256"
          }
       ],
       "name":"MaxBuyUpdated",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"oldValue",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"newValue",
             "type":"uint256"
          }
       ],
       "name":"MinBuyUpdated",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"oldOwner",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"newOwner",
             "type":"address"
          }
       ],
       "name":"OwnerChanged",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":false,
             "internalType":"bool",
             "name":"isPaused",
             "type":"bool"
          }
       ],
       "name":"PreSalePaused",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"oldAddress",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"newAddress",
             "type":"address"
          }
       ],
       "name":"ReceiverAddressChanged",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"token",
             "type":"address"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"price",
             "type":"uint256"
          }
       ],
       "name":"TokenAdded",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"token",
             "type":"address"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"amount",
             "type":"uint256"
          }
       ],
       "name":"TokenDeposited",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"uint256",
             "name":"tokenIndex",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"oldPrice",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"newPrice",
             "type":"uint256"
          }
       ],
       "name":"TokenPriceUpdated",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"token",
             "type":"address"
          }
       ],
       "name":"TokenRemoved",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"buyer",
             "type":"address"
          },
          {
             "indexed":true,
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
             "internalType":"uint256",
             "name":"cost",
             "type":"uint256"
          }
       ],
       "name":"TokensPurchased",
       "type":"event"
    },
    {
       "inputs":[

       ],
       "name":"PRICE_FEED_TIMEOUT",
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
             "name":"_tokenAddress",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"_price",
             "type":"uint256"
          }
       ],
       "name":"addToken",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"_tokenIndex",
             "type":"uint256"
          }
       ],
       "name":"buyTokensInBNBNative",
       "outputs":[

       ],
       "stateMutability":"payable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"_tokenIndex",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"_usdtAmount",
             "type":"uint256"
          }
       ],
       "name":"buyTokensInUSDT",
       "outputs":[

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
       "name":"contributions",
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
             "name":"_tokenAddress",
             "type":"address"
          }
       ],
       "name":"depositTokens",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"getBNBPrice",
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
             "name":"_address",
             "type":"address"
          }
       ],
       "name":"getContributions",
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
             "internalType":"uint256",
             "name":"_index",
             "type":"uint256"
          }
       ],
       "name":"getTokenInfo",
       "outputs":[
          {
             "components":[
                {
                   "internalType":"address",
                   "name":"tokenAddress",
                   "type":"address"
                },
                {
                   "internalType":"uint256",
                   "name":"price",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"totalSold",
                   "type":"uint256"
                },
                {
                   "internalType":"bool",
                   "name":"isActive",
                   "type":"bool"
                }
             ],
             "internalType":"struct preSaleContractAlpepe.TokenInfo",
             "name":"",
             "type":"tuple"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"_tokenIndex",
             "type":"uint256"
          }
       ],
       "name":"getTokenPriceInBNB",
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
             "internalType":"uint256",
             "name":"_tokenIndex",
             "type":"uint256"
          }
       ],
       "name":"getTokenPriceInUSDT",
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
       "name":"getTokensCount",
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
       "name":"getTotalRaised",
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
             "internalType":"uint256",
             "name":"_tokenIndex",
             "type":"uint256"
          }
       ],
       "name":"getTotalSoldInUSD",
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
             "internalType":"uint256",
             "name":"_tokenIndex",
             "type":"uint256"
          }
       ],
       "name":"getTotalTokensAvailable",
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
             "internalType":"uint256",
             "name":"_tokenIndex",
             "type":"uint256"
          }
       ],
       "name":"getTotalTokensSold",
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
       "name":"isPaused",
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
       "name":"maxBuy",
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
       "name":"minBuy",
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
       "name":"receiverAddress",
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
             "name":"_tokenAddress",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"_amount",
             "type":"uint256"
          }
       ],
       "name":"recoverTokens",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"_index",
             "type":"uint256"
          }
       ],
       "name":"removeToken",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"_newMaxBuyValue",
             "type":"uint256"
          }
       ],
       "name":"setMaxBuy",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"_newMinBuyValue",
             "type":"uint256"
          }
       ],
       "name":"setMinBuy",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"_newOwner",
             "type":"address"
          },
          {
             "internalType":"bool",
             "name":"_confirm",
             "type":"bool"
          }
       ],
       "name":"setNewOwner",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"bool",
             "name":"_paused",
             "type":"bool"
          }
       ],
       "name":"setPaused",
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
             "name":"_newAddress",
             "type":"address"
          },
          {
             "internalType":"bool",
             "name":"_confirm",
             "type":"bool"
          }
       ],
       "name":"setReceiverAddress",
       "outputs":[

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
       "name":"tokenExists",
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
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"tokens",
       "outputs":[
          {
             "internalType":"address",
             "name":"tokenAddress",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"price",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"totalSold",
             "type":"uint256"
          },
          {
             "internalType":"bool",
             "name":"isActive",
             "type":"bool"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"totalRaised",
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
             "name":"_newFeed",
             "type":"address"
          },
          {
             "internalType":"bool",
             "name":"_confirm",
             "type":"bool"
          }
       ],
       "name":"updatePriceFeed",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"_tokenIndex",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"_newPrice",
             "type":"uint256"
          },
          {
             "internalType":"bool",
             "name":"_confirm",
             "type":"bool"
          }
       ],
       "name":"updateTokenPrice",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"withdrawBNB",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"_tokenAddress",
             "type":"address"
          }
       ],
       "name":"withdrawTokens",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    }
 ];

// Configuração do Web3
let web3;
let preSaleContract;
let tokenContract;
let userAddress;
let selectedCurrency = 'USDT';

// Adicionar variáveis para armazenar os preços
let alpepePriceUSD = null;
let bnbPriceUSD = null;

// Adicionar constantes para limites e feed de preços
const MIN_BUY_USD = 1;
const MAX_BUY_USD = 1500;
const BNB_PRICE_FEED = "0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE";
const USDT_ADDRESS = "0x55d398326f99059fF775485246999027B3197955";
const USDT_DECIMALS = 18;
const ALPEPE_TOKEN_INDEX = 0;






// ABI do feed de preços da Chainlink
const PRICE_FEED_ABI = [
    {
        "inputs": [],
        "name": "latestRoundData",
        "outputs": [
            { "internalType": "uint80", "name": "roundId", "type": "uint80" },
            { "internalType": "int256", "name": "answer", "type": "int256" },
            { "internalType": "uint256", "name": "startedAt", "type": "uint256" },
            { "internalType": "uint256", "name": "updatedAt", "type": "uint256" },
            { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

// Funções de formatação de números

function formatNumber(value) {
   // Converte para número, substituindo vírgula por ponto se presente
   const num = typeof value === 'string' ? parseFloat(value.replace(',', '.')) : value;

   // Retorna '0.00' se não for um número válido
   if (isNaN(num)) {
       console.warn('formatNumber recebeu valor inválido:', value);
       return '0.00';
   }

   let formatted;
   if (selectedCurrency === 'BNB') {
       // Para BNB, manter precisão para valores pequenos
       if (num === 0) {
           formatted = '0.00'; // Exibir padrão para zero BNB
       } else if (Math.abs(num) < 0.001) {
            const numStr = num.toFixed(18);
            const decimalPart = numStr.split('.')[1];
            let firstNonZero = 0;
            if (decimalPart) {
                 for (let i = 0; i < decimalPart.length; i++) {
                      if (decimalPart[i] !== '0') {
                           firstNonZero = i + 1;
                           break;
                      }
                 }
            }
            const decimalPlaces = Math.max(firstNonZero + 2, 3); // mínimo 3 casas
            formatted = num.toLocaleString('en-US', { minimumFractionDigits: decimalPlaces, maximumFractionDigits: decimalPlaces });
       } else {
           formatted = num.toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 });
       }
   } else { // USDT
       // Sempre 2 casas decimais para USDT
       formatted = num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
   }

   console.log(`formatNumber: Input ${value}, Currency ${selectedCurrency}, Output ${formatted}`);
   return formatted || '0.00';
}

function unformatNumber(formattedNumber) {
   if (!formattedNumber) return '0';
   // Remove vírgulas de milhar e troca ponto por ponto decimal
   return formattedNumber.replace(/,/g, '');
}



// Função para adicionar token à carteira
async function addTokenToWallet() {
    if (typeof window.ethereum === 'undefined') {
        alert('Por favor, instale a MetaMask para usar esta funcionalidade!');
        return;
    }

    try {
        const tokenSymbol = 'ALP';
        const tokenDecimals = 18;
        const tokenImage = 'https://alpepe.fun/icon/ALPEPE.png';

        const wasAdded = await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: tokenAddress,
                    symbol: tokenSymbol,
                    decimals: tokenDecimals,
                    image: tokenImage,
                },
            },
        });

        const messageContainer = document.getElementById('add-token-message');
        if (messageContainer) {
            if (wasAdded) {
                messageContainer.textContent = 'Token adicionado com sucesso!';
                messageContainer.style.color = 'green';
            } else {
                messageContainer.textContent = 'O token não foi adicionado à carteira.';
                messageContainer.style.color = 'orange';
            }

            setTimeout(() => {
                messageContainer.textContent = '';
            }, 5000);
        }
    } catch (error) {
        console.error('Erro ao adicionar token:', error);
        const messageContainer = document.getElementById('add-token-message');
        if (messageContainer) {
            messageContainer.textContent = 'Erro ao adicionar token. Por favor, tente novamente.';
            messageContainer.style.color = 'red';
            setTimeout(() => {
                messageContainer.textContent = '';
            }, 5000);
        }
    }
}

// Função para obter o preço do token ALPEPE
async function getAlpepePrice() {
    if (!preSaleContract) {
        console.warn('Contrato de pré-venda não inicializado.');
        return null;
    }
    try {
        const tokenInfo = await preSaleContract.methods.getTokenInfo(ALPEPE_TOKEN_INDEX).call();
        const price = parseFloat(web3.utils.fromWei(tokenInfo.price, 'ether'));
        console.log(`Preço do ALPEPE obtido do contrato: ${price} USD`);
        return price;
    } catch (error) {
        console.error('Erro ao obter preço do ALPEPE:', error);
        return null;
    }
}

// Função para obter o preço do BNB
async function getBNBPrice() {
    if (!web3) {
        console.warn('Web3 não inicializado.');
        return null;
    }
    try {
        const priceFeed = new web3.eth.Contract(PRICE_FEED_ABI, BNB_PRICE_FEED);
        const data = await priceFeed.methods.latestRoundData().call();
        console.log('getBNBPrice - Chainlink raw data:', data); // Log do objeto de dados completo
        console.log('getBNBPrice - Chainlink data.answer (raw):', data.answer); // Log do valor raw do answer

        // A conversão por 1e8 é comum, vamos mantê-la por enquanto, mas observar o log acima
        const price = parseFloat(data.answer) / 1e8;

        console.log(`Preço do BNB obtido do Chainlink: ${price} USD`); // Log do preço calculado
        return price;
    } catch (error) {
        console.error('Erro ao obter preço do BNB:', error);
        return null;
    }
}

// Função para verificar o saldo
async function checkTokenBalance() {
    if (!web3 || !userAddress) return '0';

    try {
        if (selectedCurrency === 'BNB') {
            const balance = await web3.eth.getBalance(userAddress);
            const balanceInEther = web3.utils.fromWei(balance, 'ether');
            // Corrigido: retornar a string RAW obtida do fromWei
            // A formatação para exibição ocorrerá em formatNumber
            console.log('checkTokenBalance - BNB raw balance:', balanceInEther);
            return balanceInEther; // Retorna a string bruta com ponto decimal
        } else if (selectedCurrency === 'USDT') {
            const erc20Abi = [
                {
                    "constant": true,
                    "inputs": [{"name": "_owner", "type": "address"}],
                    "name": "balanceOf",
                    "outputs": [{"name": "balance", "type": "uint256"}],
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "decimals",
                    "outputs": [{"name": "", "type": "uint8"}],
                    "type": "function"
                }
            ];
            const usdtContract = new web3.eth.Contract(erc20Abi, USDT_ADDRESS);
            const balance = await usdtContract.methods.balanceOf(userAddress).call();
            const usdtDecimals = await usdtContract.methods.decimals().call();
            // Usar web3.utils.fromWei com os decimais corretos para obter a string formatada com ponto decimal
            // A função fromWei é mais robusta para lidar com diferentes decimais de tokens
            const balanceFormatted = web3.utils.fromWei(balance, usdtDecimals === 6 ? 'mwei' : 'ether'); // Usa 'mwei' para 6 decimais (USDT comum) ou 'ether' (18)
             console.log('checkTokenBalance - USDT raw balance (fromWei):', balanceFormatted);
            // Retornar a string bruta formatada com ponto decimal
            return balanceFormatted;
        }
    } catch (error) {
        console.error('Erro ao verificar saldo:', error);
        return '0';
    }
}

// Função para atualizar a interface do usuário
async function updateUI() {
   console.log('updateUI called');
   if (!web3 || !userAddress || !preSaleContract) {
       console.warn('updateUI chamado sem web3, userAddress ou preSaleContract inicializados.');
       return;
   }

   try {
       // Buscar e armazenar o preço atual do ALPEPE em USD
       alpepePriceUSD = await getAlpepePrice();
       if (alpepePriceUSD === null) {
            console.error('Não foi possível obter o preço do ALPEPE. UI de preço não atualizada.');
            // Não retornar, continuar para tentar atualizar o saldo pelo menos
       } else {
            // Atualizar o preço do token ALPEPE exibido na UI APENAS se obtido com sucesso
            const priceElement = document.querySelector('.price');
            if (priceElement) {
                // Usar toFixed(3) para o preço, pois geralmente preços são exibidos com precisão fixa
                priceElement.textContent = `Preço: $${alpepePriceUSD.toFixed(3)}`;
            }
       }


       // Buscar e armazenar o preço atual do BNB em USD (usado para cálculos internos)
       bnbPriceUSD = await getBNBPrice(); // Pode ser null se der erro, isso será tratado nos cálculos

       // Atualizar o saldo do token selecionado
       const balanceElement = document.getElementById('from-balance');
       if (balanceElement) {
           // Obter o texto atual do saldo exibido (pode ter vírgula e ser formatado)
           const oldBalanceText = balanceElement.textContent;
           // Obter o novo saldo RAW (string com ponto decimal) diretamente de checkTokenBalance
           const newBalanceRaw = await checkTokenBalance();
           console.log('updateUI - newBalanceRaw (from checkTokenBalance):', newBalanceRaw); // Log do valor raw

           // Converter o saldo antigo (texto formatado com vírgula) para número para a animação
           // Usar unformatNumber para converter a string exibida (com vírgula) para número (com ponto)
           const oldBalance = parseFloat(unformatNumber(oldBalanceText));
            console.log('updateUI - oldBalance (numeric, from displayed text):', oldBalance);

           // Converter o novo saldo RAW (string com ponto decimal) para número para a animação
           // Usar parseFloat diretamente na string raw que já tem ponto decimal
           const newBalanceFloat = parseFloat(newBalanceRaw);
           console.log('updateUI - newBalanceFloat (numeric, from raw balance):', newBalanceFloat);


           // Formatar o novo saldo RAW para exibição (com vírgula e precisão ajustada para BNB/USDT)
           const displayBalanceText = `${formatNumber(newBalanceRaw)} ${selectedCurrency}`;
           console.log('updateUI - displayBalanceText (formatted for UI):', displayBalanceText);


           // Lógica de animação numérica e de cor
           // Verificar se os valores numéricos são válidos e se houve uma mudança significativa
            // Comparar os valores numéricos com uma pequena tolerância ou as strings raw
            // Comparar as strings formatadas para exibição é uma boa forma de detectar mudanças visuais
           if (!isNaN(oldBalance) && !isNaN(newBalanceFloat) && oldBalanceText !== '' && balanceElement.textContent !== '') {
                // Verifica se o novo texto formatado é diferente do texto atualmente exibido
                if (balanceElement.textContent.trim() !== displayBalanceText.trim()) {
                    console.log('updateUI - Saldo visualmente mudou, animando e atualizando UI.');
                     // Animação numérica
                     // Passa os valores numéricos para a função de animação
                     animateBalanceChange(balanceElement, oldBalance, newBalanceFloat, 100); // 100ms duração

                     // Animação de cor
                    balanceElement.classList.remove('balance-increase', 'balance-decrease');
                    if (newBalanceFloat > oldBalance) {
                        balanceElement.classList.add('balance-increase');
                    } else if (newBalanceFloat < oldBalance) {
                        balanceElement.classList.add('balance-decrease');
                    }

                     // Remover classes de cor após a animação
                     setTimeout(() => {
                         balanceElement.classList.remove('balance-increase', 'balance-decrease');
                     }, 300); // Ajuste o tempo conforme a duração da animação de cor no CSS
                } else {
                     console.log('updateUI - Saldo visualmente o mesmo, atualizando texto para garantir formatação.');
                     // Mesmo que visualmente similar, garante que o texto exibido é a string formatada mais recente
                      balanceElement.textContent = displayBalanceText;
                }

           } else {
                console.log('updateUI - Não é possível animar (primeira carga, NaN, etc.), apenas definindo texto.');
               // Se for a primeira carga, ou valores inválidos, apenas define o texto formatado
               balanceElement.textContent = displayBalanceText;
               balanceElement.classList.remove('balance-increase', 'balance-decrease'); // Garante que classes de animação de cor não fiquem presas
           }


           // Forçar reflow/repaint para garantir que a exibição do saldo seja atualizada
           void balanceElement.offsetWidth;


       } else {
            console.warn('Elemento #from-balance não encontrado.');
       }


       // Recalcular tokens se houver um valor no input
       const fromAmountInput = document.getElementById('from-amount');
       if (fromAmountInput && fromAmountInput.value) {
           // Recalcular usando o valor formatado que está no input
           calculateTokens(unformatNumber(fromAmountInput.value)); // Passa o número desformatado
       } else {
            // Se o input estiver vazio, limpar o campo "Para"
            const toAmountElement = document.getElementById('to-amount');
            if (toAmountElement) {
                 toAmountElement.textContent = '0.00'; // Limpar com vírgula decimal
            }
       }


   } catch (error) {
       console.error('Erro ao atualizar UI:', error);
       // Em caso de erro, tentar resetar o saldo exibido para evitar mostrar valor incorreto
       const balanceElement = document.getElementById('from-balance');
       if (balanceElement) {
            balanceElement.textContent = `Erro ao carregar saldo ${selectedCurrency}`;
            balanceElement.style.color = 'red'; // Opcional: mudar cor para indicar erro
       }
        const priceElement = document.querySelector('.price');
        if (priceElement) {
             priceElement.textContent = 'Preço: Erro';
        }
        const toAmountElement = document.getElementById('to-amount');
        if (toAmountElement) {
             toAmountElement.textContent = '0.00'; // Limpar com vírgula decimal
        }
   }
}

// Nova função para animar a mudança do saldo
function animateBalanceChange(element, startValue, endValue, duration) {
   const startTime = performance.now();
   const difference = endValue - startValue;

   function updateNumber(currentTime) {
       const elapsedTime = currentTime - startTime;
       const progress = Math.min(elapsedTime / duration, 1); // Garante que o progresso não ultrapasse 1

       // Interpola o valor numérico atual
       const currentValue = startValue + (difference * progress);

       // Determina o número de casas decimais para a animação
       // Tenta manter a precisão visual durante a animação, especialmente para BNB pequenos
       let decimalPlaces;
        if (selectedCurrency === 'BNB') {
           // Lógica similar à de formatNumber para determinar casas decimais para animação
            const valueToConsider = endValue === 0 ? startValue : endValue; // Considera o valor final, ou inicial se final for zero
             if (Math.abs(valueToConsider) < 0.001 && valueToConsider !== 0) {
                  const valueStr = valueToConsider.toFixed(18);
                  const decimalPart = valueStr.split('.')[1];
                  let firstNonZero = 0;
                  if (decimalPart) {
                       for (let i = 0; i < decimalPart.length; i++) {
                            if (decimalPart[i] !== '0') {
                                 firstNonZero = i + 1;
                                 break;
                            }
                       }
                  }
                  decimalPlaces = Math.max(firstNonZero + 4, 6); // Usar a mesma lógica de formatNumber
             } else {
                 decimalPlaces = 5; // Padrão para BNB maiores
             }
       } else { // USDT
           decimalPlaces = 2; // Sempre 2 para USDT
       }


       // Formata o número atual para exibição com a vírgula decimal
       // Usar toFixed() para controlar as casas decimais durante a animação
       const formattedCurrentValue = currentValue.toFixed(decimalPlaces).replace('.', ',');

       // Atualiza o texto do elemento, adicionando o símbolo da moeda
       element.textContent = `${formattedCurrentValue} ${selectedCurrency}`;

       // Continua a animação se o tempo ainda não acabou
       if (elapsedTime < duration) {
           requestAnimationFrame(updateNumber);
       } else {
            // Garante que o valor final exibido seja exatamente o valor formatado pelo formatNumber final
            // Isso corrige qualquer pequena imprecisão da animação
            const finalDisplayValue = formatNumber(endValue); // Formata o valor final real
            element.textContent = `${finalDisplayValue} ${selectedCurrency}`;
       }
   }

   // Inicia a animação
   requestAnimationFrame(updateNumber);
}
// Função para calcular a quantidade de tokens ALPEPE a receber
async function calculateTokens(amount) { // Agora recebe diretamente o número
      console.log(`calculateTokens: Calculando tokens para amount: ${amount}, selectedCurrency: ${selectedCurrency}`);
    const toAmountElement = document.getElementById('to-amount');
    if (!toAmountElement || alpepePriceUSD === null) {
         console.warn('calculateTokens: Elemento #to-amount não encontrado ou preço do ALPEPE não disponível.');
        if (toAmountElement) toAmountElement.textContent = '0.00'; // Resetar se o preço não estiver pronto
        return;
    }

    // amount JÁ É UM NÚMERO AQUI
    if (isNaN(amount) || amount <= 0 || alpepePriceUSD <= 0) {
        toAmountElement.textContent = '0.00'; // Resetar se o valor de input for inválido ou preço do token zero
        console.log('calculateTokens: Valor de input inválido ou preço do token zero.');
        return;
    }

    let usdAmount = 0;

    // Calcular o valor em USD com base na moeda selecionada
    if (selectedCurrency === 'USDT') {
        // USDT é 1:1 com USD
        usdAmount = amount;
        console.log(`calculateTokens: Moeda USDT, amount: ${amount}, usdAmount: ${usdAmount}`);
    } else if (selectedCurrency === 'BNB') {
        // Usar o preço atual do BNB em USD obtido anteriormente
        if (bnbPriceUSD === null || bnbPriceUSD <= 0) {
             console.warn('calculateTokens: Preço do BNB não disponível ou zero. Tentando obter novamente...');
             // Tentar obter o preço do BNB novamente se não estiver disponível
             bnbPriceUSD = await getBNBPrice(); // getBNBPrice já loga o que obtém
             if (bnbPriceUSD === null || bnbPriceUSD <= 0) {
                 console.error('calculateTokens: Não foi possível obter um preço válido para o BNB.');
                 toAmountElement.textContent = '0.00'; // Resetar se o preço do BNB não estiver pronto
                 return;
             }
        }
         // --- Debugging log antes da multiplicação ---
         console.log(`calculateTokens: Debug - Antes da multiplicação. amount (tipo ${typeof amount}): ${amount}, bnbPriceUSD (tipo ${typeof bnbPriceUSD}): ${bnbPriceUSD}`);

         // *** A multiplicação agora usa diretamente os números ***
         usdAmount = amount * bnbPriceUSD;
         console.log(`calculateTokens: Moeda BNB, amount: ${amount}, bnbPriceUSD: ${bnbPriceUSD}, usdAmount: ${usdAmount}`);
         // ***************************************************

        // --- Debugging log após a multiplicação ---
        console.log(`calculateTokens: Debug - Após a multiplicação. usdAmount: ${usdAmount}`);

         console.log(`calculateTokens: Moeda BNB, amount: ${amount}, bnbPriceUSD: ${bnbPriceUSD}, usdAmount: ${usdAmount}`);
    } else {
         console.error('calculateTokens: Moeda selecionada desconhecida:', selectedCurrency);
         toAmountElement.textContent = '0.00';
         return;
    }

    console.log(`calculateTokens: Valor de compra em USD calculado: ${usdAmount}`);

    // Validar se o valor em USD está dentro dos limites de compra
    // A validação completa está na função validateBuyAmount, apenas log aqui
     if (usdAmount < MIN_BUY_USD || usdAmount > MAX_BUY_USD) {
         console.warn(`calculateTokens: Valor em USD (${usdAmount}) fora dos limites de compra ($${formatNumber(MIN_BUY_USD)} - $${MAX_BUY_USD}).`);
         // Deixa validateBuyAmount exibir a mensagem para o usuário
     }


    // Calcular a quantidade de tokens ALPEPE a receber
    const tokensToReceive = usdAmount / alpepePriceUSD;
    console.log(`calculateTokens: Tokens a receber: ${tokensToReceive}`);


    // Exibir a quantidade de tokens (formato com vírgula)
    // Use formatNumber que lida com a precisão e a vírgula
    toAmountElement.textContent = formatNumber(tokensToReceive); // Passa o número para formatNumber
}

// Função para validar a quantidade de compra (em USD, após conversão se necessário)
async function validateBuyAmount(amount) { // Agora recebe diretamente o número
    // amount JÁ É UM NÚMERO AQUI
    if (isNaN(amount) || amount <= 0) {
        // Apenas limpa mensagens se o input for vazio ou zero
        const messageContainer = document.getElementById('add-token-message');
        if (messageContainer) messageContainer.textContent = '';
         console.log('validateBuyAmount: Valor de input inválido ou zero.');
        return false;
    }

    if (alpepePriceUSD === null) {
        showMessage('Preço do token ALPEPE não disponível. Tente novamente mais tarde.', 'warning');
         console.warn('validateBuyAmount: Preço do ALPEPE não disponível.');
        return false;
    }

    let usdAmount = 0;
    // Calcular o valor em USD com base na moeda selecionada
   if (selectedCurrency === 'USDT') {
       usdAmount = amount;
        console.log(`validateBuyAmount: Moeda USDT, amount: ${amount}, usdAmount: ${usdAmount}`);
   } else if (selectedCurrency === 'BNB') {
        // Usar o preço atual do BNB em USD obtido anteriormente
        if (bnbPriceUSD === null || bnbPriceUSD <= 0) {
            console.warn('validateBuyAmount: Preço do BNB não disponível ou zero. Tentando obter novamente...');
            // Tentar obter o preço do BNB novamente se não estiver disponível
            bnbPriceUSD = await getBNBPrice(); // getBNBPrice já loga o que obtém
            if (bnbPriceUSD === null || bnbPriceUSD <= 0) {
                console.error('validateBuyAmount: Não foi possível obter um preço válido para o BNB.');
                showMessage('Não foi possível obter o preço do BNB para validar a compra. Tente novamente.', 'warning');
                return false;
            }
        }
         // --- Debugging log antes da multiplicação ---
         console.log(`validateBuyAmount: Debug - Antes da multiplicação. amount (tipo ${typeof amount}): ${amount}, bnbPriceUSD (tipo ${typeof bnbPriceUSD}): ${bnbPriceUSD}`);

         // *** A multiplicação agora usa diretamente os números ***
         usdAmount = amount * bnbPriceUSD;
         // ***************************************************


         // --- Debugging log após a multiplicação ---
        console.log(`validateBuyAmount: Debug - Após a multiplicação. usdAmount: ${usdAmount}`);


        console.log(`validateBuyAmount: Moeda BNB, amount: ${amount}, bnbPriceUSD: ${bnbPriceUSD}, usdAmount: ${usdAmount}`);
   } else {
        showMessage('Moeda selecionada para validação não suportada.', 'error');
         console.error('validateBuyAmount: Moeda selecionada desconhecida:', selectedCurrency);
        return false;
   }

   console.log(`validateBuyAmount: Validando valor de compra em USD: ${usdAmount}`);

   // Verificar limites mínimo e máximo em USD
   if (usdAmount < MIN_BUY_USD) {
       showMessage(`O valor mínimo de compra é $${MIN_BUY_USD.toFixed(2)} USD.`, 'warning'); // Usar formatNumber para formatar o limite
        console.warn(`validateBuyAmount: Valor em USD (${usdAmount}) menor que o mínimo ($${formatNumber(MIN_BUY_USD)}).`);
       return false;
   }
   if (usdAmount > MAX_BUY_USD) {
       showMessage(`O valor máximo de compra é $${formatNumber(MAX_BUY_USD.toFixed(2))} USD.`, 'warning'); // Usar formatNumber para formatar o limite
        console.warn(`validateBuyAmount: Valor em USD (${usdAmount}) maior que o máximo ($${formatNumber(MAX_BUY_USD.toFixed(2))}).`);
       return false;
   }

    // Verificar saldo disponível
    // checkTokenBalance retorna a string raw com ponto, unformatNumber a converte para ponto
    // parseFloat converte para número
    const balanceRaw = await checkTokenBalance(); // String com ponto
    const balance = parseFloat(balanceRaw); // Converter para número para comparação

    console.log(`validateBuyAmount: Verificando saldo. Saldo numérico: ${balance}, Valor da compra (numérico): ${amount}`);

    if (isNaN(balance) || amount > balance) {
        // Usar formatNumber para formatar o saldo exibido na mensagem
        showMessage(`Saldo insuficiente na carteira! Seu saldo atual é ${formatNumber(balance.toString())} ${selectedCurrency}`, 'warning');
        console.warn('validateBuyAmount: Saldo insuficiente.');
        return false;
    }


    // Se passou por todas as verificações
    const messageContainer = document.getElementById('add-token-message');
    if (messageContainer) messageContainer.textContent = ''; // Limpa mensagens de validação se for válido
    console.log('validateBuyAmount: Validação concluída com sucesso.');

   return true;
}

// Função para exibir mensagens estilizadas
function showMessage(message, type = 'info') {
    const messageDiv = document.getElementById('message-connect-disconnect');
    if (!messageDiv) return;

    // Limpar classes anteriores
    messageDiv.className = '';
    
    // Adicionar classes base e tipo
    messageDiv.classList.add('show', type);
    
    // Definir mensagem
    messageDiv.textContent = message;
    
    // Remover mensagem após 5 segundos
    setTimeout(() => {
        messageDiv.classList.remove('show');
    }, 5000);
}

// Função para revogar a conexão da carteira e limpar o estado
async function revokeConnection() {
    try {
        // Tenta revogar as permissões na MetaMask (pode não ser universalmente suportado)
        if (window.ethereum && userAddress) {
            try {
                await window.ethereum.request({
                    method: "wallet_revokePermissions",
                    params: [{
                        eth_accounts: {} // Revoga permissões para contas
                    }]
                });
            } catch (error) {
                console.warn('wallet_revokePermissions falhou ou não é totalmente suportado, limpando estado local.', error);
                // Continuar com a limpeza local mesmo que a revogação de permissão falhe
            }

             // Remove todos os listeners que adicionamos no window.ethereum
             // Isso é crucial para evitar que handlers antigos sejam disparados
            if (window.ethereum.removeAllListeners) {
                 window.ethereum.removeAllListeners('accountsChanged');
                 window.ethereum.removeAllListeners('chainChanged');
                 window.ethereum.removeAllListeners('connect'); // Embora 'connect' seja menos relevante para remover na desconexão
                 window.ethereum.removeAllListeners('disconnect');
            } else if (window.ethereum._events) { // Fallback para algumas versões antigas da MetaMask ou providers
                window.ethereum._events = {}; // Limpa todos os eventos registrados
                console.warn('Usando fallback para remover listeners do window.ethereum.');
            }
        }

        // Limpa as variáveis de estado globais
        userAddress = null;
        web3 = null;
        preSaleContract = null;
        tokenContract = null; // Garante que qualquer contrato de token também seja limpo

        // Reseta o botão de conexão/compra para o estado inicial
        const connectButton = document.querySelector('.btn-swap');
        if (connectButton) {
            connectButton.textContent = 'Conectar Carteira';
            // Remove o listener existente clonando e substituindo o elemento
            const newConnectButton = connectButton.cloneNode(true);
            connectButton.parentNode.replaceChild(newConnectButton, connectButton);
             // Adiciona o listener inicial de volta (chamar initWeb3)
            newConnectButton.onclick = async () => {
                const connected = await initWeb3();
                 // initWeb3 agora lida com a mudança de texto e onclick se conectar
            };
           
        }

        // Limpa os inputs e elementos de exibição de valores e saldos
        const fromAmount = document.getElementById('from-amount');
        const toAmount = document.getElementById('to-amount');
        const balanceElement = document.getElementById('from-balance');
        const priceElement = document.querySelector('.price'); // Elemento que mostra o preço do token

        if (fromAmount) fromAmount.value = ""; // Limpa o input de quantidade
        if (toAmount) toAmount.textContent = "0.00"; // Reseta a quantidade de tokens a receber
        if (balanceElement) balanceElement.textContent = "0.00"; // Reseta o saldo exibido
        if (priceElement) priceElement.textContent = `Preço: $0.014`; // Reseta o preço exibido para um valor padrão, pois o preço do ALPEPE pode não estar disponível

        // Remove event listeners de outros elementos da interface (botões de moeda, porcentagem, input de quantidade)
        // Isso é importante para evitar que handlers antigos interajam com um estado inconsistente
        removeEventListeners();

        // Limpa a mensagem de adicionar token
        const messageContainer = document.getElementById('add-token-message');
        if (messageContainer) messageContainer.textContent = '';

        console.log('Carteira desconectada e estado local limpo.');
        showMessage('Carteira desconectada com sucesso.', 'info');
        window.dispatchEvent(new Event('walletStatusChanged')); // Dispara evento para atualizar o botão de swap
        setupSwapButtonListener();
        return true;
    } catch (error) {
        console.error('Erro ao tentar revogar conexão ou limpar estado:', error);
         // Mesmo que ocorra um erro na revogação/limpeza, tentar resetar a UI como um fallback
         // para deixar a interface no estado inicial
        userAddress = null;
        web3 = null;
        preSaleContract = null;
        tokenContract = null;

        const connectButton = document.querySelector('.btn-swap');
         if (connectButton) {
            connectButton.textContent = 'Conectar Carteira';
            const newConnectButton = connectButton.cloneNode(true);
            connectButton.parentNode.replaceChild(newConnectButton, connectButton);
            newConnectButton.onclick = async () => {
                const connected = await initWeb3();
            };
            // setupSwapButtonListener(); // Reconfigura o listener do botão de swap - será chamado pelo evento
        }
        const fromAmount = document.getElementById('from-amount');
        const toAmount = document.getElementById('to-amount');
        const balanceElement = document.getElementById('from-balance');
         const priceElement = document.querySelector('.price');

        if (fromAmount) fromAmount.value = "";
        if (toAmount) toAmount.textContent = "0.00";
        if (balanceElement) balanceElement.textContent = "0.00";
        if (priceElement) priceElement.textContent = 'Preço: $0.00';

        removeEventListeners(); // Tentar remover listeners novamente
        const messageContainer = document.getElementById('add-token-message');
        if (messageContainer) messageContainer.textContent = '';
        window.dispatchEvent(new Event('walletStatusChanged')); // Dispara evento para atualizar o botão de swap
        setupSwapButtonListener();

        return false; // Indica que a desconexão pode não ter sido completa
    }
}

// Função para remover event listeners dos elementos da interface (usando clonagem)
function removeEventListeners() {
    // Elementos com listeners que precisam ser removidos ao desconectar/re-configurar
    const elementsToRemake = [
        ...document.querySelectorAll('.currency-button'),
        ...document.querySelectorAll('[data-percent]'),
        document.getElementById('from-amount')
    ].filter(Boolean); // Filtrar para remover nulls caso algum elemento não seja encontrado

    elementsToRemake.forEach(element => {
        // Clonar o nó existente
        const newElement = element.cloneNode(true);
        // Substituir o nó antigo pelo novo clone (isso remove todos os listeners anexados)
        if (element.parentNode) { // Verificar se o elemento ainda tem um pai
           element.parentNode.replaceChild(newElement, element);
        }
    });

    // Certifica-se de que o listener do botão de adicionar token também é removido e re-adicionado
    const addTokenContainer = document.querySelector('.add-token-container');
    if (addTokenContainer) {
        const newAddTokenContainer = addTokenContainer.cloneNode(true);
        addTokenContainer.parentNode.replaceChild(newAddTokenContainer, addTokenContainer);
        // O listener será re-adicionado em setupEventListeners se a carteira estiver conectada
    }

    // Remova o listener do ícone de swap/logout
    const logoutIconContainer = document.getElementById('logout-icon-container');
    if (logoutIconContainer) {
        const newLogoutIconContainer = logoutIconContainer.cloneNode(true);
        logoutIconContainer.parentNode.replaceChild(newLogoutIconContainer, logoutIconContainer);
    }


    console.log('Listeners de elementos da UI (exceto adicionar token) removidos.');
}


// Inicialização do Web3 e conexão da carteira
async function initWeb3() {
    // Verificar se MetaMask (ou outro provider web3) está disponível
    if (typeof window.ethereum !== 'undefined') {
        try {
            console.log('MetaMask detectada. Solicitando contas...');
            // Solicitar acesso às contas do usuário
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

            if (accounts.length === 0) {
                // Se o usuário não conectar nenhuma conta
                showMessage('Por favor, conecte sua carteira na MetaMask para continuar.', 'warning');
                await revokeConnection(); // Limpar estado se nenhuma conta for conectada
                return false;
            }

            // Conectado com sucesso
            userAddress = accounts[0];
            web3 = new Web3(window.ethereum);
            console.log(`Carteira conectada: ${userAddress}`);

            // Verificar se está na rede BSC Mainnet (chainId 56)
            const chainId = await web3.eth.getChainId();
            console.log(`Chain ID atual: ${chainId}`);

            if (chainId !== 56) {
                showMessage('Rede incorreta detectada. Tentando mudar para a Binance Smart Chain...', 'warning');
                try {
                    // Tentar mudar para a rede BSC Mainnet
                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: '0x38' }], // 0x38 é o chainId da BSC Mainnet em hexadecimal
                    });
                    console.log('Tentativa de mudança de rede enviada. Aguardando...');

                    // Aguardar um curto período para a rede mudar e o provider se estabilizar
                    await new Promise(resolve => setTimeout(resolve, 1000)); // Esperar 1 segundo
                    // Após a mudança, re-inicializar web3 e obter contas novamente para garantir o estado correto
                    web3 = new Web3(window.ethereum);
                    const updatedAccounts = await web3.eth.getAccounts();
                    if(updatedAccounts.length > 0) {
                        userAddress = updatedAccounts[0];
                        console.log(`Rede mudada para BSC. Carteira conectada: ${userAddress}`);
                        showMessage('Conectado com sucesso à Binance Smart Chain!', 'success');
                    } else {
                        showMessage('Erro ao obter contas após mudar de rede. Por favor, reconecte.', 'error');
                        await revokeConnection();
                        return false;
                    }
                } catch (switchError) {
                    if (switchError.code === 4902) {
                        showMessage('Rede Binance Smart Chain não encontrada na MetaMask. Tentando adicionar...', 'warning');
                        try {
                            await window.ethereum.request({
                                method: 'wallet_addEthereumChain',
                                params: [{
                                    chainId: '0x38',
                                    chainName: 'Binance Smart Chain',
                                    nativeCurrency: {
                                        name: 'BNB',
                                        symbol: 'BNB',
                                        decimals: 18
                                    },
                                    rpcUrls: ['https://bsc-dataseed.binance.org/'],
                                    blockExplorerUrls: ['https://bscscan.com/']
                                }]
                            });
                            console.log('Tentativa de adicionar rede BSC enviada. Aguardando...');
                            await new Promise(resolve => setTimeout(resolve, 1000));
                            web3 = new Web3(window.ethereum);
                            const updatedAccounts = await web3.eth.getAccounts();
                            if(updatedAccounts.length > 0) {
                                userAddress = updatedAccounts[0];
                                console.log(`Rede BSC adicionada e conectada. Carteira: ${userAddress}`);
                                showMessage('Rede BSC adicionada e conectada com sucesso!', 'success');
                            } else {
                                showMessage('Erro ao obter contas após adicionar rede. Por favor, reconecte.', 'error');
                                await revokeConnection();
                                return false;
                            }
                        } catch (addError) {
                            console.error('Erro ao adicionar rede BSC na MetaMask:', addError);
                            showMessage('Não foi possível adicionar a rede Binance Smart Chain automaticamente. Por favor, adicione manualmente.', 'error');
                            await revokeConnection();
                            return false;
                        }
                    } else {
                        console.error('Erro ao mudar para rede BSC:', switchError);
                        showMessage('Erro ao mudar para a rede Binance Smart Chain. Por favor, mude manualmente.', 'error');
                        await revokeConnection();
                        return false;
                    }
                }
            }

            // Se a conexão foi estabelecida e a rede está correta, inicializar o contrato e configurar listeners
            if (web3 && userAddress && (await web3.eth.getChainId()) === 56) {
                console.log('Conexão e rede OK. Inicializando contrato e listeners...');
                preSaleContract = new web3.eth.Contract(DATA_ABI, preSaleContractAddress);

                // Adicionar listeners globais para eventos da carteira APÓS a conexão bem-sucedida
                if (window.ethereum.removeAllListeners) {
                    window.ethereum.removeAllListeners('accountsChanged');
                    window.ethereum.removeAllListeners('chainChanged');
                    window.ethereum.removeAllListeners('disconnect');
                } else if (window.ethereum._events) {
                    window.ethereum._events = {};
                }

                window.ethereum.on('accountsChanged', async (accounts) => {
                    console.log('Evento accountsChanged', accounts);
                    if (accounts.length === 0) {
                        showMessage('Sua carteira foi desconectada.', 'warning');
                        await revokeConnection();
                    } else {
                        userAddress = accounts[0];
                        console.log(`Conta alterada para: ${userAddress}`);
                        await updateUI();
                        // Dispara evento para reavaliar o botão de swap
                        window.dispatchEvent(new Event('walletStatusChanged'));
                        const currentAmount = document.getElementById('from-amount').value;
                        if(currentAmount) calculateTokens(unformatNumber(currentAmount));
                    }
                });

                window.ethereum.on('chainChanged', async (chainIdHex) => {
                    console.log('Evento chainChanged', chainIdHex);
                    const chainId = parseInt(chainIdHex, 16);
                    if (chainId !== 56) {
                        showMessage('Rede alterada para uma rede não suportada. Por favor, mude para a Binance Smart Chain.', 'warning');
                        await revokeConnection();
                    } else {
                        console.log('Rede alterada para Binance Smart Chain.');
                        web3 = new Web3(window.ethereum);
                        preSaleContract = new web3.eth.Contract(DATA_ABI, preSaleContractAddress);
                        const accounts = await web3.eth.getAccounts();
                        if(accounts.length > 0) {
                            userAddress = accounts[0];
                            await updateUI();
                            // Dispara evento para reavaliar o botão de swap
                            window.dispatchEvent(new Event('walletStatusChanged'));
                            const currentAmount = document.getElementById('from-amount').value;
                            if(currentAmount) calculateTokens(unformatNumber(currentAmount));
                        } else {
                            await revokeConnection();
                        }
                    }
                });

                window.ethereum.on('disconnect', async (error) => {
                    console.log('Evento disconnect', error);
                    showMessage('Sua carteira foi desconectada ou houve um erro de conexão.', 'warning');
                    await revokeConnection();
                });

                // Configurar os event listeners para os elementos da interface (botões, input, etc.)
                setupEventListeners();

                // --- CORREÇÃO: Ajusta selectedCurrency conforme o botão selecionado na interface ---
                const selectedBtn = document.querySelector('.currency-button.selected');
                if (selectedBtn && selectedBtn.dataset.currency) {
                    selectedCurrency = selectedBtn.dataset.currency;
                    console.log('selectedCurrency ajustado para:', selectedCurrency);
                }
                // -------------------------------------------------------------------------------

                // Atualizar a interface inicial com o saldo e preço após a conexão
                await updateUI();

                // Disparar evento para que setupSwapButtonListener atualize o texto e a ação do botão
                window.dispatchEvent(new Event('walletStatusChanged'));
                
                showMessage('Carteira conectada com sucesso!', 'success');

                return true;
            } else {
                console.error('Falha crítica na inicialização ou mudança de rede.');
                showMessage('Falha na conexão ou mudança de rede. Por favor, verifique sua MetaMask e tente novamente.', 'error');
                await revokeConnection();
                return false;
            }

        } catch (error) {
            console.error('Erro geral ao inicializar Web3:', error);
            showMessage('Ocorreu um erro ao tentar conectar a carteira. Verifique a MetaMask e a rede e tente novamente. Detalhes no console.', 'error');
            await revokeConnection();
            return false;
        }
    } else {
        showMessage('MetaMask não detectada. Por favor, instale a MetaMask para usar esta funcionalidade.', 'error');
        console.warn('window.ethereum não detectado.');
        return false;
    }
}

// Configura os event listeners para os elementos da UI (botões de moeda, porcentagem, input, adicionar token)
// Esta função é chamada APENAS após a conexão bem-sucedida em initWeb3
function setupEventListeners() {
    console.log('Configurando listeners dos elementos da UI...');
    // Remover quaisquer listeners existentes antes de adicionar, para evitar duplicações se initWeb3 for chamado novamente
    removeEventListeners();

    // Listener para os botões de seleção de moeda (USDT/BNB)
    const currencyButtons = document.querySelectorAll('.currency-button');
    currencyButtons.forEach(button => {
        button.addEventListener('click', async () => {
            selectedCurrency = button.dataset.currency;
            console.log(`Moeda selecionada: ${selectedCurrency}`);

            // Remove a classe 'selected' de todos e adiciona apenas ao botão clicado
            currencyButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');

            // Atualiza a interface com o saldo e preço da nova moeda selecionada
            await updateUI();

            // Limpa os campos de input e output ao mudar a moeda
            const fromAmountInput = document.getElementById('from-amount');
            const toAmountElement = document.getElementById('to-amount');
            const messageContainer = document.getElementById('add-token-message');

            if (fromAmountInput) {
                fromAmountInput.value = '';
                console.log('Input de quantidade limpo ao mudar moeda.');
            }
            if (toAmountElement) {
                toAmountElement.textContent = '0.00';
                console.log('Output de ALPEPE resetado ao mudar moeda.');
            }
            if (messageContainer) {
                messageContainer.textContent = '';
            }

            window.dispatchEvent(new Event('walletStatusChanged'));
        });
    });
    console.log(`Listeners para botões de moeda configurados em ${currencyButtons.length} elementos.`);

    // Define o botão de moeda inicialmente selecionado com base em selectedCurrency
    const initialSelectedButton = document.querySelector(`.currency-button[data-currency="${selectedCurrency}"]`);
    if (initialSelectedButton) {
        currencyButtons.forEach(btn => btn.classList.remove('selected'));
        initialSelectedButton.classList.add('selected');
        console.log(`Botão inicial ativo definido para: ${selectedCurrency}`);
    }

    // Listener para os botões de porcentagem (10%, 25%, etc. e Max)
    const percentageButtons = document.querySelectorAll('[data-percent]');
    percentageButtons.forEach(button => {
        button.addEventListener('click', async () => {
            if (!web3 || !userAddress) {
                showMessage('Por favor, conecte sua carteira primeiro para usar os botões de porcentagem.', 'warning');
                return;
            }

            const percent = parseInt(button.dataset.percent, 10);
            console.log(`Botão de porcentagem clicado: ${percent}%`);

            // Obter saldo atual
            const balanceRaw = await checkTokenBalance();
            let balance = parseFloat(balanceRaw);

            console.log(`Saldo atual (numérico) para cálculo de porcentagem: ${balance}`);

            if (isNaN(balance) || balance <= 0) {
                showMessage('Saldo disponível insuficiente para usar os botões de porcentagem.', 'warning');
                const fromAmountInput = document.getElementById('from-amount');
                if (fromAmountInput) fromAmountInput.value = '';
                const toAmountElement = document.getElementById('to-amount');
                if (toAmountElement) toAmountElement.textContent = '0.00';
                return;
            }

            let amount;
            if (percent === 100 && selectedCurrency === 'BNB') {
    const gasReserve = await getDynamicGasReserve();
    amount = balance - gasReserve;
    if (amount <= 0) {
        showMessage(`Saldo insuficiente para reservar o gás da transação.`, 'warning');
        return;
    }
    showMessage(`Reservado ${formatNumber(gasReserve)} BNB para gás.`, 'info');
} else {
                amount = (balance * percent / 100);
            }

            // Corrige para garantir no mínimo 0
            if (amount < 0) amount = 0;

            // Formata para máximo de 6 casas decimais para BNB, 2 para USDT
            let amountForInput;
            if (selectedCurrency === 'BNB') {
                amountForInput = amount.toFixed(6).replace(',', '.');
            } else {
                amountForInput = amount.toFixed(2).replace(',', '.');
            }

            const fromAmountInput = document.getElementById('from-amount');
            if (fromAmountInput) {
                fromAmountInput.value = amountForInput;
                console.log('Valor percentual atribuído ao input:', fromAmountInput.value);
                // Dispara o evento 'input' manualmente para triggar a validação e o cálculo de tokens
                const event = new Event('input', { bubbles: true });
                fromAmountInput.dispatchEvent(event);
            } else {
                console.warn('Elemento #from-amount não encontrado para atribuir valor percentual.');
            }
        });
    });
    console.log(`Listeners para botões de porcentagem configurados em ${percentageButtons.length} elementos.`);

    // Listener para o input de quantidade (formatação e cálculo em tempo real)
    const fromAmountInput = document.getElementById('from-amount');
    if (fromAmountInput) {
        let debounceTimer;

        fromAmountInput.addEventListener('input', async (e) => {
            clearTimeout(debounceTimer);

            let value = e.target.value;
            console.log(`Input raw value: "${value}" (tipo: ${typeof value})`);

            let valueForCalculation = unformatNumber(value);

            console.log(`Input cleaned for calculation: "${valueForCalculation}" (tipo: ${typeof valueForCalculation})`);

            const numValue = parseFloat(valueForCalculation);
            console.log('Input event - numeric value for calculation:', numValue);

            debounceTimer = setTimeout(async () => {
                if (!isNaN(numValue) && numValue > 0) {
                    const isValid = await validateBuyAmount(numValue);
                    calculateTokens(numValue);
                    if (!isValid) {
                        document.getElementById('to-amount').textContent = '0.00';
                    } else {
                        const messageContainer = document.getElementById('add-token-message');
                        if (messageContainer) messageContainer.textContent = '';
                    }
                } else {
                    document.getElementById('to-amount').textContent = '0.00';
                    const messageContainer = document.getElementById('add-token-message');
                    if (messageContainer) messageContainer.textContent = '';
                }
                window.dispatchEvent(new Event('walletStatusChanged'));
            }, 300);
        });
        console.log('Listener para input de quantidade configurado.');
    } else {
        console.warn('Elemento #from-amount não encontrado.');
    }

    // Listener para o container de adicionar token à carteira
    const addTokenContainer = document.querySelector('.add-token-container');
    if (addTokenContainer) {
        const newAddTokenContainer = addTokenContainer.cloneNode(true);
        addTokenContainer.parentNode.replaceChild(newAddTokenContainer, addTokenContainer);

        newAddTokenContainer.addEventListener('click', addTokenToWallet);

        console.log('Listener para adicionar token configurado em setupEventListeners.');
    }

    // Listener para o ícone de swap/logout
    const logoutIconContainer = document.getElementById('logout-icon-container');
    const swapIcon = document.getElementById('swap-icon');

    if (logoutIconContainer && swapIcon) {
        function updateLogoutIconAndAction() {
         const swapIcon = document.getElementById('swap-icon');
        if (!swapIcon) return;
            if (userAddress) {
                swapIcon.classList.remove('fa-exchange-alt');
                swapIcon.classList.add('fa-sign-out-alt');
                logoutIconContainer.onclick = revokeConnection;
                logoutIconContainer.style.cursor = "url('/cursor/Middle Ages--cursor--SweezyCursors..cur'), pointer";
     ;
                
                
            } else {
               swapIcon.classList.remove('fa-sign-out-alt');
               swapIcon.classList.add('fa-exchange-alt');
               logoutIconContainer.onclick = null;
               logoutIconContainer.style.cursor = "url('/cursor/Middle Ages--cursor--SweezyCursors..cur'), pointer";
                
               
            }
        }
        window.addEventListener('walletStatusChanged', updateLogoutIconAndAction);
        updateLogoutIconAndAction();
        console.log('Listener para ícone de swap/logout configurado.');
    } else {
        console.warn('Elemento #logout-icon-container ou #swap-icon não encontrado.');
    }
}

// Função de compra de tokens
async function buyTokens() {
    // Verificar se Web3, carteira e contrato estão inicializados
    if (!web3 || !userAddress || !preSaleContract) {
        showMessage('Por favor, conecte sua carteira primeiro e verifique se está na rede correta (BSC Mainnet).', 'warning');
        console.warn('buyTokens chamado sem web3, userAddress ou preSaleContract inicializados.');
        return;
    }

    const fromAmountInput = document.getElementById('from-amount');
    const formattedAmount = fromAmountInput ? fromAmountInput.value : '';
    const amount = unformatNumber(formattedAmount); // Desformatar o valor para cálculo e envio

    // Verificar se o valor é válido e maior que zero após desformatar
    if (!amount || parseFloat(amount) <= 0) {
        showMessage('Por favor, insira um valor válido para comprar.', 'warning');
        return;
    }

    try {
        // Validar valor mínimo e máximo NOVAMENTE antes de comprar (segurança extra)
        console.log('Validando valor antes da compra...');
        const isValid = await validateBuyAmount(parseFloat(amount)); // Usar o valor numérico para a validação
        if (!isValid) {
             console.warn('Validação de valor falhou antes de enviar a transação.');
            return; // Se validateBuyAmount mostrar um alerta, apenas parar aqui
        }
        console.log('Validação de valor OK.');

        // Verificar saldo antes da compra NOVAMENTE (segurança extra)
        console.log('Verificando saldo antes da compra...');
        const balance = parseFloat(await checkTokenBalance()); // Obter saldo atualizado como número
        const numericAmount = parseFloat(amount); // Valor da compra como número
         console.log(`Saldo atual: ${balance}, Valor da compra: ${numericAmount}`);

        if (isNaN(balance) || isNaN(numericAmount) || numericAmount > balance) {
            showMessage(`Saldo insuficiente para a compra! Seu saldo atual é ${formatNumber(balance.toString())} ${selectedCurrency}`, 'warning');
             console.warn('Saldo insuficiente.');
            return;
        }
        console.log('Verificação de saldo OK.');


        console.log(`Iniciando compra de ${numericAmount} ${selectedCurrency}...`);
        // Lógica de compra baseada na moeda selecionada
        if (selectedCurrency === 'BNB') {
            // Converter o valor de BNB para Wei (18 decimais)
            const weiAmount = web3.utils.toWei(amount, 'ether');
            console.log(`Comprando com BNB. Valor em Wei: ${weiAmount}`);

            // Chamar a função buyTokensInBNBNative do contrato
            await preSaleContract.methods.buyTokensInBNBNative(0).send({ 
                from: userAddress, // Endereço da carteira do usuário
                value: weiAmount // Enviar BNB nativo como 'value'
            });

        } else if (selectedCurrency === 'USDT') {
            // Para USDT, calculamos o valor em unidades de USDT.
            // A lógica de aprovação é agora tratada pelo setupSwapButtonListener.
            let usdtAmount;
            if (USDT_DECIMALS === 18) {
                usdtAmount = web3.utils.toWei(amount, 'ether'); // Se USDT tiver 18 decimais
            } else if (USDT_DECIMALS === 6) {
                usdtAmount = web3.utils.toWei(amount, 'mwei'); // Se USDT tiver 6 decimais
            } else {
                // Cálculo manual para outros decimais
                usdtAmount = Math.round(numericAmount * (10 ** USDT_DECIMALS)).toString();
                console.warn(`Decimais do USDT (${USDT_DECIMALS}) não são 6 ou 18. Usando cálculo manual.`);
            }

            console.log(`Comprando com USDT. Valor em unidades de USDT: ${usdtAmount}`);

            // Chamar a função buyTokensInUSDT do contrato (assumindo que ela espera o valor em unidades de USDT)
            console.log(`Chamando buyTokensInUSDT para comprar com ${usdtAmount} unidades de USDT...`);
            await preSaleContract.methods.buyTokensInUSDT(0, usdtAmount).send({ //Passamos o índicee 0 + o montante de UST em uint256 para o contrato.
                from: userAddress // Endereço da carteira do usuário
                // Não enviar 'value' para transações com tokens ERC20
            });

        } else {
             // Caso uma moeda inesperada esteja selecionada
            showMessage('Moeda de pagamento não suportada.', 'warning');
            console.error('Moeda de pagamento inesperada:', selectedCurrency);
            return;
        }

        // Se a transação de compra for enviada com sucesso (isso não significa que foi confirmada na blockchain)
        showMessage('Transação de compra enviada com sucesso! Aguarde a confirmação na blockchain.', 'success');
        console.log('Transação de compra enviada.');
        await updateUI(); // Atualizar a UI após enviar a transação

    } catch (error) {
        // Capturar erros que ocorrem durante a interação com a carteira ou contrato (ex: rejeição do usuário, erro de gás)
        console.error('Erro durante a compra de tokens:', error);
        // Mensagens de erro mais amigáveis baseadas no erro (opcional, pode ser complexo)
        let errorMessage = 'Erro ao realizar a compra. Por favor, verifique a MetaMask e tente novamente.';
        if (error.message.includes('User denied transaction signature')) {
            errorMessage = 'Transação rejeitada pelo usuário.';
        } else if (error.message.includes('insufficient funds')) {
             errorMessage = 'Saldo insuficiente na carteira para cobrir a transação (gás ou valor).';
        }
        showMessage(errorMessage, 'error');
    }
}


function setupSwapButtonListener() {
    const swapBtn = document.querySelector('.btn-swap');
    if (!swapBtn) return;

    // Remove listeners antigos
    const newSwapBtn = swapBtn.cloneNode(true);
    swapBtn.parentNode.replaceChild(newSwapBtn, swapBtn);

    // Função para atualizar texto e ação do botão
    async function updateSwapButtonLogic() {
        if (!userAddress || !web3 || !preSaleContract) { // Usar a variável global userAddress
            newSwapBtn.textContent = 'Conectar Carteira';
            newSwapBtn.onclick = async () => {
                const connected = await initWeb3();
                if (connected) {
                    await updateSwapButtonLogic(); // Re-avaliar o estado do botão após a conexão bem-sucedida
                }
            };
        } else {
            const fromAmountInput = document.getElementById('from-amount');
            const amount = fromAmountInput ? unformatNumber(fromAmountInput.value) : '0';
            const numericAmount = parseFloat(amount);

            if (selectedCurrency === 'USDT') {
                if (isNaN(numericAmount) || numericAmount <= 0) {
                     newSwapBtn.textContent = 'Comprar com USDT'; // Estado padrão se o input estiver vazio ou zero
                     newSwapBtn.onclick = async (e) => {
                         e.preventDefault();
                         await buyTokens();
                     };
                     return;
                }

                // Calcular usdtAmount (mesma lógica usada em buyTokens)
                let usdtAmount;
                if (USDT_DECIMALS === 18) {
                    usdtAmount = web3.utils.toWei(amount, 'ether');
                } else if (USDT_DECIMALS === 6) {
                    usdtAmount = web3.utils.toWei(amount, 'mwei');
                } else {
                    usdtAmount = Math.round(numericAmount * (10 ** USDT_DECIMALS)).toString();
                }

                const erc20Abi = [
                    {
                        "constant": false,
                        "inputs": [
                            {"name": "_spender", "type": "address"},
                            {"name": "_value", "type": "uint256"}
                        ],
                        "name": "approve",
                        "outputs": [{"name": "", "type": "bool"}],
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [
                            {"name": "_owner", "type": "address"},
                            {"name": "_spender", "type": "address"}
                        ],
                        "name": "allowance",
                        "outputs": [{"name": "remaining", "type": "uint256"}],
                        "type": "function"
                    }
                ];
                const usdtContract = new web3.eth.Contract(erc20Abi, USDT_ADDRESS);

                try {
                    const allowance = await usdtContract.methods.allowance(userAddress, preSaleContractAddress).call();
                    if (parseFloat(allowance) < parseFloat(usdtAmount)) {
                        newSwapBtn.textContent = 'Aprovar USDT';
                        newSwapBtn.onclick = async (e) => {
                            e.preventDefault();
                            try {
                                showMessage('Aguarde a aprovação na MetaMask...', 'info');
                                await usdtContract.methods.approve(preSaleContractAddress, usdtAmount).send({ from: userAddress });
                                showMessage('Aprovação de USDT realizada com sucesso!', 'success');
                                await updateSwapButtonLogic(); // Re-avaliar o estado do botão após a aprovação
                            } catch (error) {
                                console.error('Erro ao aprovar USDT:', error);
                                showMessage('Erro ao aprovar USDT. Por favor, tente novamente.', 'error');
                            }
                        };
                    } else {
                        newSwapBtn.textContent = 'Comprar com USDT';
                        newSwapBtn.onclick = async (e) => {
                            e.preventDefault();
                            await buyTokens();
                        };
                    }
                } catch (e) {
                    console.error('Erro ao verificar allowance do USDT:', e);
                    newSwapBtn.textContent = 'Comprar com USDT'; // Fallback em caso de erro na verificação
                    newSwapBtn.onclick = async (e) => { e.preventDefault(); buyTokens(); };
                    showMessage('Erro ao verificar aprovação de USDT. Tente novamente.', 'error');
                }

            } else if (selectedCurrency === 'BNB') {
                newSwapBtn.textContent = 'Comprar com BNB';
                newSwapBtn.onclick = async (e) => {
                    e.preventDefault();
                    await buyTokens();
                };
            }
        }
    }

    // Event listeners para atualizar o botão quando a moeda mudar ou o valor do input mudar
    document.querySelectorAll('.currency-button').forEach(btn => {
        btn.addEventListener('click', () => {
            setTimeout(updateSwapButtonLogic, 50); // Pequeno delay para garantir que selectedCurrency foi atualizado
        });
    });
    const fromAmountInput = document.getElementById('from-amount');
    if (fromAmountInput) {
        fromAmountInput.addEventListener('input', () => setTimeout(updateSwapButtonLogic, 50));
    }

    // Event listener para quando o status da carteira mudar (conectado/desconectado, conta/rede)
    window.addEventListener('walletStatusChanged', updateSwapButtonLogic);

    // Chamada inicial para configurar o botão
    updateSwapButtonLogic();
}

// Chame setupSwapButtonListener() após o DOM estar pronto e após conectar carteira
document.addEventListener('DOMContentLoaded', setupSwapButtonListener);

//função para obtenção do gás dinamicamente 

async function getDynamicGasReserve() {
    if (!web3 || !userAddress || !preSaleContract) return 0.0005; // fallback

    try {
        // Estimar o gás para a função de compra em BNB
        const gasLimit = await preSaleContract.methods.buyTokensInBNBNative(0).estimateGas({
            from: userAddress,
            value: web3.utils.toWei('0.001', 'ether') // valor simbólico só para estimar
        });
        const gasPrice = await web3.eth.getGasPrice(); // em Wei

        // Calcular o custo total em Wei
        const gasCostWei = BigInt(gasLimit) * BigInt(gasPrice);

        // Converter para BNB (ether)
        const gasCostBNB = parseFloat(web3.utils.fromWei(gasCostWei.toString(), 'ether'));

        // Adicionar uma margem de segurança (ex: +10%)
        return gasCostBNB * 1.1;
    } catch (e) {
        console.warn('Não foi possível estimar o gás dinamicamente, usando fallback.', e);
        return 0.0005; // fallback
    }
}