type ChainIdToRpcUrlType = {
    [chainId: number]: string
}

export const ChainIdToRpcUrl: ChainIdToRpcUrlType = {
    1: import.meta.env.VITE_eth_rpc_url,
    11155111: import.meta.env.VITE_sepolia_rpc_url,
    137: import.meta.env.VITE_polygon_rpc_url,
    80001: import.meta.env.VITE_mumbai_rpc_url,
}
