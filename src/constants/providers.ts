import { ethers } from 'ethers';
import { useWeb3ModalAccount } from '@web3modal/ethers/react';
import { ChainIdToRpcUrl } from './chainIdToRpcUrl';


export const getReadOnlyProvider = () => {
    const { chainId } = useWeb3ModalAccount()

    if (!chainId) {
        console.error('ChainId not found')
        return
    }

    const rpcUrl = ChainIdToRpcUrl[chainId];

    if (!rpcUrl) {
        console.error('RPC URL not found')
    }

    return new ethers.JsonRpcProvider(rpcUrl);
}
