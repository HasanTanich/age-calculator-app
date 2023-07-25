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

export function getDaysInMonth(year: number, month: number): number {
  // Create a new Date object for the next month's first day
  const nextMonth = new Date(year, month, 1);

  // Subtract the current month's last day from the next month's first day
  // to get the number of milliseconds between the two dates
  const diffInMilliseconds =
    nextMonth.getTime() - new Date(year, month - 1, 1).getTime();

  // Convert milliseconds to days (1 day = 24 * 60 * 60 * 1000 milliseconds)
  const daysInMonth = Math.round(diffInMilliseconds / (24 * 60 * 60 * 1000));

  return daysInMonth;
}
