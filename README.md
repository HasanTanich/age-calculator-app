# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![design](./src/assets/images/design.png)

### Links

<!-- - Live Site URL: [Add live site URL here](https://your-live-site-url.com) -->

## My process

### Built with

- Vite
- Typescript
- Eslint for linting
- Prettier for formatting
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Chakra UI](https://chakra-ui.com/) - Modular and accessible component library
- [react-countup](https://www.npmjs.com/package/react-countup) - Numbers animation

### What I learned

- The way to deal with dates in js.
- Below is a function that is calculating the age: with **year**, **month** and **day** passed as params.

```ts
import { AgeType } from "../types/AgeType";

export function calculateAge(
  year: number,
  month: number,
  day: number
): AgeType {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  if (days < 0) {
    const prevMonthLastDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days += prevMonthLastDay;
    months--;
  }

  return {
    years,
    months,
    days,
  };
}
```

## Author

- Frontend Mentor - [@HasanTanich](https://www.frontendmentor.io/profile/HasanTanich)
- LinkedIn Profile - [@HasanTanich](https://www.linkedin.com/in/hasantanich)
- Github Profile - [@HasanTanich](https://github.com/HasanTanich)
