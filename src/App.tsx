import { Container, Flex } from "@radix-ui/themes"
import TokenList from "./components/TokenList"
import configureWeb3Modal from "./connections/modal"

configureWeb3Modal()

function App() {
  return (
    <main>
      <Container>
        <Flex justify={"between"} className="m-3">
          <h1 className="text-white text-5xl">Tokens</h1>
          <w3m-button />
        </Flex>
        <TokenList />
      </Container>
    </main>
  )
}

export default App
