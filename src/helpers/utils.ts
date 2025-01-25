import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';

// Extend dayjs with the plugins
dayjs.extend(utc);
dayjs.extend(localizedFormat);

export const dateFormatFromUTC = (dateString: string | Date) => {
  return dayjs.utc(dateString).local().format('D MMM, h.mm A');
};

export const currencyFormat = (
  amount: number,
  options: Intl.NumberFormatOptions = {},
) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'usd',
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
    ...options,
  }).format(amount);
};

export const numberFormat = (
  number: number,
  notation: 'standard' | 'compact' = 'standard',
) =>
  new Intl.NumberFormat('en-US', {
    notation,
  }).format(number);

export const toUpperCase = (value: string | boolean): string => {
  if (typeof value === 'boolean') {
    return value.toString().toUpperCase(); // Convert boolean to string and then to uppercase
  } else {
    return value.toUpperCase(); // Directly apply uppercase for strings
  }
};

export const transformBool = (value: boolean): string => {
  if (typeof value === 'boolean' && value === true) {
    return 'YES';
  } else {
    return 'NO';
  }
};

export const calculatePercentage = (total: number, main: number): number => {
  const percentage = (main / total) * 100;
  return percentage;
};

export const roundUpToTwoDecimalPlaces = (num: number) => {
  return Math.ceil(num * 100) / 100;
};
