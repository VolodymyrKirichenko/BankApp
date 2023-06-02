import { Text, View, StyleSheet } from 'react-native';
import { FC } from 'react';
import { TypeCurrency } from '../../../../../typedefs/typedefs';
import { FontAwesome } from '@expo/vector-icons';

interface Props {
  currency: TypeCurrency,
}

export const Currency: FC<Props> = (props) => {
  const { currency } = props;

  return (
    <View style={styles.mainCircle}>
      <View style={styles.secondCircle}>
        <FontAwesome
          color='@488CF9'
          size={13}
          name={currency === 'UAH' ? 'money' : 'usd'}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainCircle: {
    borderRadius: 50,
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
  },
  secondCircle: {
    borderRadius: 50,
    backgroundColor: '#EDF4FE',
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
  },
})
