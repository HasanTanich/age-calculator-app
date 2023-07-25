import "./App.css";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import AgeCalculator from "./components/AgeCalculator";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Flex w="100vw" align="center" justify="center" h="100vh">
          <AgeCalculator />
        </Flex>
      </div>
    </ChakraProvider>
  );
}

export default App;
