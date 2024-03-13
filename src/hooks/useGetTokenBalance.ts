import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { getReadOnlyProvider } from "../constants/providers";

import mainnetTokenlist from '../tokenlists/mainnet.json'
import polygonTokenlist from '../tokenlists/polygon.json'


const useGetTokenBalance = () => {
    const { chainId } = useWeb3ModalAccount();
    const provider = getReadOnlyProvider();
    let tokenlist: object[] = [];

    if (chainId === 1) {
        tokenlist = mainnetTokenlist;
    } else if (chainId === 137) {
        tokenlist = polygonTokenlist;
    } else {
        console.error('ChainId not supported')
    }

    for (const token of tokenlist) {
        console.log(token)
    }
}

export default useGetTokenBalance;