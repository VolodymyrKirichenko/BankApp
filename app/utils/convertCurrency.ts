import { TypeCurrency } from '../typedefs/typedefs';

const getCurrencyCode = (currency: TypeCurrency): number => {
  switch (currency) {
    case 'USD':
      return 840;
    case 'UAH':
      return 980;
    default:
      throw new Error('Невідома валюта');
  }
};

const findExchangeRate = (data: any, fromCurrency: TypeCurrency, toCurrency: TypeCurrency) => {
  const currencyCodeA = getCurrencyCode(fromCurrency);
  const currencyCodeB = getCurrencyCode(toCurrency);

  for(const item of data) {
    if ((item.currencyCodeA === currencyCodeA || item.currencyCodeA === currencyCodeB)
      && (item.currencyCodeB === currencyCodeA || item.currencyCodeB === currencyCodeB)) {

      return item.rateSell;
    }
  }

  return null;
}

export const convertCurrency = async (amount: number, fromCurrency: TypeCurrency, toCurrency: TypeCurrency) => {
  const response = await fetch('https://api.monobank.ua/bank/currency');

  const data = await response.json();
  const exchangeRate = findExchangeRate(data, fromCurrency, toCurrency);

  if (fromCurrency === 'USD' && toCurrency === 'UAH') {

    return amount * exchangeRate;
  }

  if (fromCurrency === 'UAH' && toCurrency === 'USD') {

    return amount / exchangeRate;
  }

  return amount;
};
