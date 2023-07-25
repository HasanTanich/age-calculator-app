import { Box, Button, HStack, Image } from "@chakra-ui/react";
import { FormEvent, useRef, useState } from "react";
import { IconArrow } from "../assets/images";
import { AgeType } from "../types/AgeType";
import DateInput from "./DateInput";
import { calculateAge, getDaysInMonth } from "./utils";

interface InputType {
  valid: boolean;
  error: string;
}

type FormProps = {
  onSetAge: React.Dispatch<React.SetStateAction<AgeType | undefined>>;
};

const Form = ({ onSetAge }: FormProps) => {
  const today = new Date();
  const ERROR_MESSAGES = {
    required: "This field is required",
    invalidDay: "Must be a valid day",
    invalidMonth: "Must be a valid month",
    inThePast: "Must be in the past",
  };

  const dayRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const [dayInput, setDayInput] = useState<InputType>({
    valid: true,
    error: "",
  });
  const [monthInput, setMonthInput] = useState<InputType>({
    valid: true,
    error: "",
  });
  const [yearInput, setYearInput] = useState<InputType>({
    valid: true,
    error: "",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const dayInputValue = validateInput(
      dayRef.current?.value,
      "day",
      setDayInput
    );
    const monthInputValue = validateInput(
      monthRef.current?.value,
      "month",
      setMonthInput
    );
    const yearInputValue = validateInput(
      yearRef.current?.value,
      "year",
      setYearInput
    );

    if (yearInputValue && dayInputValue && monthInputValue) {
      const birthDate = new Date(
        yearInputValue,
        monthInputValue - 1,
        dayInputValue
      );

      const years = today.getFullYear() - birthDate.getFullYear();
      const months = today.getMonth() - birthDate.getMonth();
      const days = today.getDate() - birthDate.getDate();

      const monthLength = getDaysInMonth(yearInputValue, monthInputValue);

      if (dayInputValue > monthLength) {
        setDayInput({
          valid: false,
          error: ERROR_MESSAGES.invalidDay,
        });
        setYearInput({
          valid: false,
          error: "",
        });
        setMonthInput({
          valid: false,
          error: "",
        });
        return;
      }
      if (years === 0) {
        if (months < 0 || (months === 0 && days < 0)) {
          setYearInput({
            valid: false,
            error: ERROR_MESSAGES.inThePast,
          });
          setMonthInput({
            valid: false,
            error: ERROR_MESSAGES.inThePast,
          });
          setDayInput({
            valid: false,
            error: ERROR_MESSAGES.inThePast,
          });
          return;
        }
      }

      setYearInput({
        valid: true,
        error: "",
      });
      setMonthInput({
        valid: true,
        error: "",
      });
      setDayInput({
        valid: true,
        error: "",
      });

      const calculatedAge = calculateAge(
        yearInputValue,
        monthInputValue,
        dayInputValue
      );
      onSetAge(calculatedAge);
    }
  };

  const validateInput = (
    inputValue: string | undefined,
    type: string,
    setInputState: React.Dispatch<
      React.SetStateAction<{ valid: boolean; error: string }>
    >
  ) => {
    if (!inputValue) {
      setInputState({ valid: false, error: ERROR_MESSAGES.required });
      return null;
    }
    const numericValue = Number(inputValue);

    switch (type) {
      case "day":
        if (numericValue < 1 || numericValue > 31) {
          setInputState({ valid: false, error: ERROR_MESSAGES.invalidDay });
          return null;
        }
        break;
      case "month":
        if (numericValue < 1 || numericValue > 12) {
          setInputState({ valid: false, error: ERROR_MESSAGES.invalidMonth });
          return null;
        }
        break;
      case "year":
        if (numericValue > today.getFullYear()) {
          setInputState({ valid: false, error: ERROR_MESSAGES.inThePast });
          return null;
        }
        break;

      default:
        break;
    }

    return numericValue;
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <HStack spacing={["0", 2]}>
        <DateInput
          htmlForValue="day"
          placeholder="DD"
          name="day"
          id="day"
          maxLength={2}
          ref={dayRef}
          isError={dayInput.valid}
          errorMessage={dayInput.error}
          onFocus={() => setDayInput({ valid: true, error: "" })}
        >
          Day
        </DateInput>
        <DateInput
          htmlForValue="month"
          placeholder="MM"
          name="month"
          id="month"
          maxLength={2}
          ref={monthRef}
          onFocus={() => setMonthInput({ valid: true, error: "" })}
          isError={monthInput.valid}
          errorMessage={monthInput.error}
        >
          Month
        </DateInput>
        <DateInput
          htmlForValue="year"
          placeholder="YYYY"
          name="year"
          id="year"
          maxLength={4}
          ref={yearRef}
          isError={yearInput.valid}
          errorMessage={yearInput.error}
          onFocus={() => setYearInput({ valid: true, error: "" })}
        >
          Year
        </DateInput>
      </HStack>

      <Box
        h="1px"
        border={"1px solid var(--neutral-off-white)"}
        position="relative"
        mt={["4rem", "3rem"]}
        flexGrow={1}
      >
        <Button
          borderRadius={"50%"}
          position={"absolute"}
          bottom={["-28px", "-32px"]}
          right={["40%", "-1"]}
          bgColor="var(--primary-purple)"
          type="submit"
          _hover={{
            bgColor: "var(--neutral-off-black)",
            transform: "scale(1.2)",
          }}
          px={["1rem", "1.2rem"]}
          py={["1.7rem", "2rem"]}
        >
          <Image
            src={IconArrow}
            alt="icon arrow"
            w={["24px", "100%"]}
            h={["24px", "34px"]}
          />
        </Button>
      </Box>
    </form>
  );
};

export default Form;
