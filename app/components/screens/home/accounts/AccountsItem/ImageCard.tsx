import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text
} from 'react-native';
import { FC } from 'react';
import { IAccount } from '../../../../../typedefs/typedefs';

interface Props {
  account: IAccount,
}

export const ImageCard: FC<Props> = (props) => {
  const { account } = props;
  const { name, cardNumber } = account;

  const imageBlack: ImageSourcePropType = require('../../../../../../assets/monobank_mc-word.png');
  const imageWhite: ImageSourcePropType = require('../../../../../../assets/bila-n.jpg');

  return (
    <>
      <ImageBackground
        source={name === 'Mono Black' ? imageBlack : imageWhite}
        resizeMode='contain'
        style={styles.icon}
      >
        <Text style={styles.text}>{cardNumber.slice(-4)}</Text>
      </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'flex-end',
    width: 56,
    height: 40,
    padding: 18,
    position: 'relative'
  },
  text: {
    fontSize: 8,
    color: 'red',
    position: 'absolute',
    bottom: 5,
    left: 5,
    fontWeight: '600'
  },
})
