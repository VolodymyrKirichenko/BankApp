import { View, Text, Alert } from 'react-native'
import { FC } from 'react'
import { Padding } from '../../../../components/ui/Padding'
import { Button } from '../../../../components/ui/Button'
import { asyncAlert } from './asyncAlert'
import { useAuth } from '../../../../hooks/useAuth'
import { addDoc, serverTimestamp } from 'firebase/firestore'
import { collection } from '@firebase/firestore'
import { db } from '../../../../utils/firebase'
import { getRandomCardNumber } from '../../../../utils/getRandomCardNumber'

export const ApplyNewProduct: FC = () => {
  const { user } = useAuth()

  const registerHandler = async () => {
    try {
      const currency = await asyncAlert({
        title: 'Currency',
        message: 'Select account currency:',
        buttons: {
          text: 'UAH',
          resolveValue: 'UAH',
          textSecond: 'USD',
          resolveValueSecond: 'USD'
        }
      })

      const cardType = await asyncAlert({
        title: 'Card type',
        message: 'Select account currency:',
        buttons: {
          text: 'Black',
          resolveValue: 'Mono Black',
          textSecond: 'White',
          resolveValueSecond: 'Mono White'
        }
      })

      await addDoc(collection(db, 'accounts'), {
        timestamp: serverTimestamp(),
        userId: user?.uid,
        balance: 0,
        cardNumber: getRandomCardNumber(),
        currency,
        name: cardType
      })
    } catch (error: any) {
      Alert.alert('Error apply new product', error.message)
    }
  }

  return (
    <Padding>
      <Button
        onPress={registerHandler}
        title='Apply for a new product'
      />
    </Padding>
  )
}
