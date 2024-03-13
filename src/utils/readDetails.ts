import { useWeb3ModalAccount } from "@web3modal/ethers/react";

import mainnetTokenlist from '../tokenlists/mainnet.json'
import polygonTokenlist from '../tokenlists/polygon.json'
import sepoliaTokenlist from '../tokenlists/sepolia.json'

export const tokenList = () => {
    const { chainId, isConnected } = useWeb3ModalAccount();
    let tokenList: TokenDetails[] = [];

    if (!isConnected) {
        console.error('Not connected to wallet')
        return tokenList
    }

    if (chainId === 1) {
        tokenList = mainnetTokenlist;
    } else if (chainId === 137) {
        tokenList = polygonTokenlist;
    } else if (chainId === 11155111) {
        tokenList = sepoliaTokenlist;
    } else {
        console.error('ChainId not supported')
    }

    return tokenList;
}

export const multicallUrl = () => {
    const { chainId } = useWeb3ModalAccount();

    let multicallUrl: string = "";

    if (chainId === 1) {
        multicallUrl = import.meta.env.VITE_eth_rpc_url
    } else if (chainId === 137) {
        multicallUrl = import.meta.env.VITE_polygon_rpc_url
    } else if (chainId === 11155111) {
        multicallUrl = import.meta.env.VITE_sepolia_rpc_url
    } else {
        multicallUrl = import.meta.env.VITE_eth_rpc_url
    }
    return multicallUrl;
}

export const multicallAddress = () => {
    const { chainId } = useWeb3ModalAccount();

    let multicallAddress: string = "";

    if (chainId === 1) {
        multicallAddress = import.meta.env.VITE_mainnet_multicall_address
    } else if (chainId === 137) {
        multicallAddress = import.meta.env.VITE_polygon_multicall_address
    } else if (chainId === 11155111) {
        multicallAddress = import.meta.env.VITE_sepolia_multicall_address
    } else {
        multicallAddress = import.meta.env.VITE_mainnet_multicall_address
    }
    return multicallAddress;
}