/// <reference types="vite/client" />

type TokenDetails = {
    address: string;
    chainId: number;
    logoURI?: string;
    name: string;
    symbol: string;
    decimals: number;
    extenstions?: object;
    balance?: string;
    totalSupply?: string;
}