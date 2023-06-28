import { IAsyncAlert } from '../../../../typedefs/typedefs'
import { Alert } from 'react-native'

export const asyncAlert = async ({ title, message, buttons }: IAsyncAlert) =>
  await new Promise(resolve => {
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
      }
    ], { cancelable: false })
  })
