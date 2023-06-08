import { TypeCurrency } from '../typedefs/typedefs';

export const convertCurrency = (amount: number, fromCurrency: TypeCurrency, toCurrency: TypeCurrency): number => {
  const exchangeRate = 37;

  if (fromCurrency === 'USD' && toCurrency === 'UAH') {
    return amount * exchangeRate;
  }

  if (fromCurrency === 'UAH' && toCurrency === 'USD') {
    return amount / exchangeRate;
  }

  return amount;
};
