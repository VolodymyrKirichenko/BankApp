import { Text } from 'react-native';
import { FC } from 'react';
import { IAccount } from '../../../../../typedefs/typedefs';

interface Props {
  account: IAccount,
}

export const ImageCard: FC<Props> = (props) => {
  const { account } = props;

  return (
    <Text style={{top: 50}}>ImageCard</Text>
  )
}
