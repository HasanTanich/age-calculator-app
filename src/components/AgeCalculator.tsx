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
      maxW={700}
      borderRadius={16}
      borderBottomRightRadius={100}
      p={[4, 10]}
      boxShadow="base"
      zIndex={100}
    >
      <Form onSetAge={setAge} />
      <Age age={age} />
    </Box>
  );
};

export default AgeCalculator;
