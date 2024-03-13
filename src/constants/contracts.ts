import { ethers } from "ethers";

import { getReadOnlyProvider } from "./providers";

import erc20Abi from './ERC20Abi.json';
import multicallAbi from './MulticallAbi.json';


export const getErc20Contract = (address: string) => {
    const provider = getReadOnlyProvider();
    return new ethers.Contract(address, erc20Abi, provider);
}

export const getERC20Interface = () => {
    return new ethers.Interface(erc20Abi);
}

export const getMulticallInterface = () => {
    return new ethers.Interface(multicallAbi);
}