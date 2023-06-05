import { IAsyncAlert } from '../../../../typedefs/typedefs';
import { Alert } from 'react-native';

export const asyncAlert = ({ title, message, buttons }: IAsyncAlert) =>
  new Promise(resolve => {
    Alert.alert(title, message, [
      {
        text: buttons.text,
        onPress: () => {
          resolve(buttons.resolveValue)
        }
      },
      {
        text: buttons.textSecond,
        onPress: () => {
          resolve(buttons.resolveValueSecond)
        }
      },
    ], { cancelable: false })
  })
