import { useEffect, useState } from "react";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

import { tokenList } from "../utils/readDetails";
import { getERC20Interface, getMulticallContract } from "../constants/contracts";


const useGetTokenDetails = (userAddress: string | undefined) => {
    const [tokenBalances, setTokenBalances] = useState<TokenDetails[] | unknown[]>([]);
    const { chainId } = useWeb3ModalAccount();

    const tokens = tokenList();
    const addresses: string[] = (Array.isArray(tokens)) ? tokens.map((token: TokenDetails) => token.address) : [];
    const multicallContract = getMulticallContract();
    const tokenInterface = getERC20Interface();

    useEffect(() => {

        const fetchTokenBalances = async () => {
            if (addresses.length === 0 || !userAddress || !chainId) {
                setTokenBalances([]);
                return []
            }

            const balanceCalls = addresses.map((address: string) => ({
                target: address,
                callData: tokenInterface.encodeFunctionData('balanceOf', [userAddress]),
            }))

            const supplyCalls = addresses.map((address: string) => ({
                target: address,
                callData: tokenInterface.encodeFunctionData('totalSupply'),
            }))

            const calls = balanceCalls.concat(supplyCalls);

            const multicallResult = (await multicallContract.aggregate.staticCall(calls))[1].toArray();

            const balanceResult = multicallResult.slice(0, multicallResult.length / 2);
            const supplyResult = multicallResult.slice(multicallResult.length / 2, multicallResult.length);

            const result = balanceResult.map((result: string, index: number) => {
                const balance = tokenInterface.decodeFunctionResult("balanceOf", result).toArray()[0].toString();
                const tokenData: TokenDetails | unknown = {
                    ...tokens ? tokens[index] : {},
                    balance,
                    totalSupply: tokenInterface.decodeFunctionResult("totalSupply", supplyResult[index]).toArray()[0].toString()
                }
                return tokenData;
            })

            setTokenBalances(result);
        }

        fetchTokenBalances();
    }, [userAddress, chainId])

    return tokenBalances;
}

export default useGetTokenDetails;