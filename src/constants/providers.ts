import { ethers } from 'ethers';
import { useWeb3ModalAccount } from '@web3modal/ethers/react';
import { ChainIdToRpcUrl } from './chainIdToRpcUrl';


export const getReadOnlyProvider = () => {
    const { chainId } = useWeb3ModalAccount()

    if (!chainId) {
        return new ethers.JsonRpcProvider(
            import.meta.env.VITE_eth_rpc_url
        );
    }

    const rpcUrl = ChainIdToRpcUrl[chainId];

    if (!rpcUrl) {
        return new ethers.JsonRpcProvider(
            import.meta.env.VITE_eth_rpc_url
        );
    }

    return new ethers.JsonRpcProvider(rpcUrl);
}
