import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import React from "react";

interface DateInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  maxLength: number;
  isError: boolean;
  htmlForValue: string;
  errorMessage: string;
}

const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      children,
      maxLength,
      placeholder,
      htmlForValue,
      isError = false,
      errorMessage,
      ...props
    },
    ref
  ) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      // Truncate the input if it exceeds the maximum length
      if (value.length > maxLength) {
        e.target.value = value.slice(0, maxLength);
      }
    };

    return (
      <FormControl w={"unset"}>
        <FormLabel
          htmlFor={htmlForValue}
          color={!isError ? "var(--primary-light-red)" : "gray.500"}
          letterSpacing={2}
          textTransform={"uppercase"}
          fontSize={[8, 12]}
          fontWeight={700}
          display={"Flex"}
          flexDirection={"column"}
          position={"relative"}
        >
          {children}
          <Input
            w="100%"
            maxW="132px"
            letterSpacing={["0", "0.3rem"]}
            {...props}
            ref={ref}
            size={["sm", "md", "lg"]}
            color={"black"}
            placeholder={placeholder}
            className="purple-caret-color"
            fontWeight={700}
            _hover={{
              borderColor: "purple.400",
            }}
            _focus={{
              borderColor: "purple.400",
            }}
            _focusWithin={{
              borderColor: "purple.400",
              boxShadow: "unset",
            }}
            type="number"
            mt={2}
            rounded={"md"}
            borderColor={!isError ? "var(--primary-light-red)" : "gray.200"}
            p={"1.2rem"}
            onChange={handleInputChange}
          />
          {!isError && (
            <Text
              fontWeight={400}
              color="var(--primary-light-red)"
              fontSize={10}
              letterSpacing={0}
              textTransform={"initial"}
              position={"absolute"}
              bottom={"-24px"}
              left={0}
              h="1rem"
            >
              {errorMessage}
            </Text>
          )}
        </FormLabel>
      </FormControl>
    );
  }
);

export default DateInput;
