import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { AgeType } from "../types/AgeType";
import Age from "./Age";
import Form from "./Form";

const AgeCalculator = () => {
  const [age, setAge] = useState<AgeType>();

  return (
    <Box
      bgColor={"white"}
      w={"90%"}
      maxW={500}
      borderRadius={16}
      borderBottomRightRadius={100}
      px={4}
      py={6}
      boxShadow="base"
    >
      <Form onSetAge={setAge} />
      <Age age={age} />
    </Box>
  );
};

export default AgeCalculator;
