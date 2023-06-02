import { Text } from 'react-native';
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
    <Text style={{top: 50}}>More</Text>
  )
}
