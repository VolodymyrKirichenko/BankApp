import { FC, useCallback, useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { Base, Rates, TypeCurrency } from '../../../../typedefs/typedefs';
import { getCurrencyCode } from '../../../../utils/convertCurrency';
import { BOX_SHADOW } from '../../../../utils/styles';

export const ExchangeRate: FC = () => {
  const [base, setBase] = useState<Base[]>([]);
  const [realRates, setRealRates] = useState({} as Omit<Rates, 'UAH'>);

  const fetchExchangeRate = useCallback(async () => {
    try {
      const response = await fetch('https://api.monobank.ua/bank/currency');
      const data = await response.json();

      setBase(data);
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
    }
  }, []);

  const findExchangeRate = useCallback(() => {
    const rates = {} as Rates;

    values.forEach((el) => {
      const ISO = getCurrencyCode(el);

      const rate = base.find((el) => el.currencyCodeA === ISO && el.currencyCodeB === 980);

      rates[el] = rate?.rateSell || 0;
    });

    setRealRates(rates);
  }, [base]);


  useEffect(() => {
    fetchExchangeRate();
  }, []);

  const values: TypeCurrency[] = ['USD' , 'EUR' , 'PLN']

  useEffect(() => {
    findExchangeRate();
  }, [base])

  return (
    <View style={[styles.container, BOX_SHADOW]}>
      {Object.entries(realRates).map(([key, value]) => {
        return (
          <View style={styles.item} key={key}>
            <Text style={styles.currencyText}>{String(key)}</Text>
            <Text>{String(value)}</Text>
          </View>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'space-between',
    borderRadius: 20,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: 20
  },
  currencyText: {
    fontFamily: 'mt-bold'
  },
  amountText: {
    fontFamily: 'mt-light'
  }
})
