import {
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import { FC } from 'react';
import { IButton } from '../../typedefs/typedefs';

export const Button: FC<IButton> = (props) => {
  const {
    title,
    onPress,
    colors = ['yellow', '#FBBF24'],
  } = props;

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors[1]}
      style={styles.button}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    fontFamily: 'mt-bold',
    backgroundColor: '#FFF07C',
    borderRadius: 12,
    marginTop: 15,
    padding: 15
  },
  text: {
    textAlign: 'center'
  }
})
