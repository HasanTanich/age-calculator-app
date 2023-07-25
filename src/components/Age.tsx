import { Box, Text } from "@chakra-ui/react";
import { AgeType } from "../types/AgeType";
import CountUp from "react-countup";
type AgeProps = {
  age?: AgeType;
};

const Age = ({ age }: AgeProps) => {
  return (
    <Box>
      <AgeLine title="years" value={age?.years} />
      <AgeLine title="months" value={age?.months} />
      <AgeLine title="days" value={age?.days} />
    </Box>
  );
};

export default Age;

type AgeLineProps = {
  title: string;
  value?: number;
};

function AgeLine({ title, value }: AgeLineProps) {
  return (
    <Text
      fontSize={["5xl", "6xl", "7xl"]}
      fontWeight={800}
      letterSpacing={["0rem", "0.4rem", "0.6rem"]}
    >
      {value === undefined && (
        <Text as={"span"} color="var(--primary-purple)">
          --
        </Text>
      )}
      {value != null && (
        <Text as={"span"} color="var(--primary-purple)">
          <CountUp end={value} duration={3} />
        </Text>
      )}
      {title}
    </Text>
  );
}
