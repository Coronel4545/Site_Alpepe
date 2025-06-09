// Configuração da Web3
let web3;
const BSC_CHAIN_ID = '0x38'; // ID da BSC Mainnet
const BSC_RPC_URL = 'https://bsc-dataseed.binance.org/';

async function initWeb3() {
    if (typeof window.ethereum !== 'undefined') {
        web3 = new Web3(window.ethereum);
        try {
            // Solicita acesso à carteira
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            // Verifica se está na rede BSC
            const chainId = await window.ethereum.request({ method: 'eth_chainId' });
            if (chainId !== BSC_CHAIN_ID) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: BSC_CHAIN_ID }],
                    });
                } catch (switchError) {
                    // Se a rede não estiver adicionada, tenta adicionar
                    if (switchError.code === 4902) {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [{
                                chainId: BSC_CHAIN_ID,
                                chainName: 'Binance Smart Chain',
                                nativeCurrency: {
                                    name: 'BNB',
                                    symbol: 'BNB',
                                    decimals: 18
                                },
                                rpcUrls: [BSC_RPC_URL],
                                blockExplorerUrls: ['https://bscscan.com/']
                            }]
                        });
                    }
                }
            }
        } catch (error) {
            console.error('Erro ao inicializar Web3:', error);
        }
    }
}

async function addTokenToMetaMask() {
    // Dados do token ALPEPE na BSC
    const tokenAddress = '0x223009A2abDBFc2ccebCECdf420820b6ae0692eA';
    const tokenSymbol = 'ALP';
    const tokenDecimals = 18;
    const tokenImage = 'https://alpepe.fun/icon/ALPEPE.png';

    const messageContainer = document.getElementById('add-token-message');
    messageContainer.textContent = ''; // Limpa a mensagem anterior
    messageContainer.className = 'message-container'; // Reseta classes de estilo

    try {
        // Inicializa Web3
        await initWeb3();

        // Verifica se o MetaMask está instalado
        if (typeof window.ethereum === 'undefined') {
            displayMessage('Por favor, instale a MetaMask para adicionar o token!', 'error');
            return;
        }

        // Adiciona o token
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

        if (wasAdded) {
            displayMessage('Token ALPEPE adicionado com sucesso!', 'success');
        } else {
            displayMessage('Token não foi adicionado. Por favor, tente novamente.', 'error');
        }
    } catch (error) {
        console.error('Erro ao adicionar token:', error);
        // Verifica se é o erro de símbolo incompatível e exibe uma mensagem mais amigável
        if (error.code === -32602 && error.message.includes('symbol in the request') && error.message.includes('does not match the symbol in the contract')) {
             displayMessage('Erro: O símbolo do token no contrato é diferente. Verifique o símbolo correto.', 'error');
        } else {
             displayMessage('Ocorreu um erro ao adicionar o token. Por favor, tente novamente.', 'error');
        }
    }
}

function displayMessage(message, type) {
    const messageContainer = document.getElementById('add-token-message');
    if (messageContainer) {
        messageContainer.textContent = message;
        messageContainer.className = 'message-container'; // Remove classes anteriores
        if (type) {
            messageContainer.classList.add(type);
        }

        // Faz a mensagem desaparecer após 5 segundos
        setTimeout(() => {
            messageContainer.textContent = '';
            messageContainer.className = 'message-container'; // Remove classes de tipo
        }, 5000); // 5000 milissegundos = 5 segundos
    }
}

// Adiciona o evento de clique ao container
document.addEventListener('DOMContentLoaded', () => {
    const addTokenContainer = document.querySelector('.add-token-container');
    if (addTokenContainer) {
        addTokenContainer.addEventListener('click', addTokenToMetaMask);
    }
}); 