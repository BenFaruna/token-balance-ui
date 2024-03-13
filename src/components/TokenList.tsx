import { formatUnits } from 'ethers';
import { Table, Avatar } from '@radix-ui/themes';
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import useGetTokenDetails from '../hooks/useGetTokenDetails';

const TokenList = () => {
    const { address } = useWeb3ModalAccount();
    const balances = useGetTokenDetails(address)

    return (
        <Table.Root variant="surface" >
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Image</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Token name</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Token symbol</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Total Supply</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>User Balance</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {balances.length !== 0 ?
                    balances.map((token: TokenDetails | unknown, index: number) => {
                        if (!token) return null;
                        return (
                            <Table.Row key={index}>
                                <Table.RowHeaderCell>
                                    <Avatar
                                        size="3"
                                        radius='full'
                                        src={token.logoURI}
                                        fallback={token.symbol[0]} />
                                </Table.RowHeaderCell>
                                <Table.Cell>{token.name}</Table.Cell>
                                <Table.Cell>{token.symbol}</Table.Cell>
                                <Table.Cell>{parseFloat(formatUnits(token.totalSupply, token.decimals)).toLocaleString()}</Table.Cell>
                                <Table.Cell>{token.balance}</Table.Cell>
                            </Table.Row>
                        )
                    }) :
                    <Table.Row>
                        <Table.Cell>Wallet not connected</Table.Cell></Table.Row>
                }
            </Table.Body>
        </Table.Root >
    )
}

export default TokenList