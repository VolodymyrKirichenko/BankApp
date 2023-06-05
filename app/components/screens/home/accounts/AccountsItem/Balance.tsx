import { Text, View, StyleSheet } from 'react-native';
import { FC } from 'react';
import { IAccount } from '../../../../../typedefs/typedefs';

interface Props {
  account: IAccount,
}

export const Balance: FC<Props> = (props) => {
  const { account } = props;
  const {
    balance,
    currency,
    name
  } = account;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text2}>
        {Intl.NumberFormat(undefined, {
          currency,
          style: 'currency',
        }).format(balance)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '66%',
  },
  text: {
    fontSize: 15,
  },
  text2: {
    fontSize: 15,
    marginTop: 4,
    fontWeight: 'bold',
  },
})
