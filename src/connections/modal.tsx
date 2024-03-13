import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

// 1. Get projectId
const projectId = import.meta.env.VITE_project_id

// 2. Set chains
const mainnet = {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: import.meta.env.VITE_eth_rpc_url
}

const sepolia = {
    chainId: 11155111,
    name: 'Sepolia',
    currency: 'SepoliaETH',
    explorerUrl: 'https://sepolia.etherscan.io',
    rpcUrl: import.meta.env.VITE_sepolia_rpc_url
}

const polygon = {
    chainId: 137,
    name: 'Polygon',
    currency: 'MATIC',
    explorerUrl: 'https://https://polygonscan.com/',
    rpcUrl: import.meta.env.VITE_polygon_rpc_url
}

const mumbai = {
    chainId: 80001,
    name: 'Mumbai',
    currency: 'MATIC',
    explorerUrl: 'https://mumbai.polygonscan.com/',
    rpcUrl: import.meta.env.VITE_polygon_rpc_url
}

// 3. Create a metadata object
const metadata = {
    name: 'Tokens',
    description: 'Show user tokens',
    url: '', // origin must match your domain & subdomain
    icons: ['https://avatars.mywebsite.com/']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
    /*Required*/
    metadata,
    /*Optional*/
    enableEIP6963: true, // true by default
    enableInjected: true, // true by default
    enableCoinbase: false, // true by default
    rpcUrl: '...', // used for the Coinbase SDK
    defaultChainId: 1, // used for the Coinbase SDK
})

// 5. Create a Web3Modal instance
const configureWeb3Modal = () => {
    createWeb3Modal({
        ethersConfig,
        chains: [mainnet, sepolia, polygon, mumbai],
        projectId,
        enableAnalytics: true // Optional - defaults to your Cloud configuration
    })
}

export default configureWeb3Modal