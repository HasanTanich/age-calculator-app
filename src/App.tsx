import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import "./App.css";
import AgeCalculator from "./components/AgeCalculator";

function App() {
  return (
    <ChakraProvider>
      <Box
        position={"fixed"}
        inset={0}
        zIndex={10}
        bgColor="var(--neutral-off-white)"
      >
        <Flex
          w="100%"
          align={["flex-start", "center"]}
          justify="center"
          h="100%"
          overflow={"auto"}
          mt={[8, 0]}
        >
          <AgeCalculator />
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
