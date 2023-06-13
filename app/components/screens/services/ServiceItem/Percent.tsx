import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { FC } from 'react';

interface Props {
  percent: number,
}

export const Percent: FC<Props> = (props) => {
  const { percent } = props;

  return (
    <View style={styles.triangle}>
      <Text style={styles.text}>{percent + '%'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderRightWidth: 27,
    borderTopWidth: 27,
    borderRightColor: 'transparent',
    borderTopColor: '#AAEF00',
    transform: [{ rotate: '90deg' }],
  },
  text: {
    width: 40,
    height: 40,
    position: 'absolute',
    fontSize: 10,
    transform: [{ rotate: '-40deg' }],
    top: -34,
    left: 7,
  },
})
