import { Table, Avatar } from '@radix-ui/themes'
import useGetTokenBalance from '../hooks/useGetTokenBalance';

const TokenList = () => {
    useGetTokenBalance()
    return (
        <Table.Root variant="surface">
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Image</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Token name</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Token symbol</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Total supply</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>User Balance</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.RowHeaderCell>
                        <Avatar size="3"
                            radius='full'
                            src="https://assets.coingecko.com/coins/images/604/thumb/time-32x32.png?1627130666"
                            fallback='U' />
                    </Table.RowHeaderCell>
                    <Table.Cell>Uniswap</Table.Cell>
                    <Table.Cell>UNI</Table.Cell>
                    <Table.Cell>122,500,000</Table.Cell>
                    <Table.Cell>10</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.RowHeaderCell>
                        <Avatar
                            size="3"
                            radius='full'
                            src="https://assets.coingecko.com/coins/images/604/thumb/time-32x32.png?1627130666"
                            fallback='U' />
                    </Table.RowHeaderCell>
                    <Table.Cell>Uniswap</Table.Cell>
                    <Table.Cell>UNI</Table.Cell>
                    <Table.Cell>122,500,000</Table.Cell>
                    <Table.Cell>10</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.RowHeaderCell>
                        <Avatar size="3"
                            radius='full'
                            src="https://assets.coingecko.com/coins/images/604/thumb/time-32x32.png?1627130666"
                            fallback='U' />
                    </Table.RowHeaderCell>
                    <Table.Cell>Uniswap</Table.Cell>
                    <Table.Cell>UNI</Table.Cell>
                    <Table.Cell>122,500,000</Table.Cell>
                    <Table.Cell>10</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table.Root>
    )
}

export default TokenList