import { asyncAlert } from '../components/screens/home/apply-new-product/asyncAlert';
import { Alert } from 'react-native';
import { useState } from 'react';
import { TypeName } from '../typedefs/typedefs';

export const useSendMoney = () => {
  const [showModal, setShowModal] = useState(false);
  const [cardName, setCardName] = useState<TypeName>({} as TypeName);

  const handleTransferPress = () => {
    setShowModal(true);
  };

  const sendMoney = async () => {
    try {
      const cardType = await asyncAlert({
        title: 'Credit cards',
        message: 'Select card:',
        buttons: {
          text: 'Mono Black',
          resolveValue: 'Mono Black',
          textSecond: 'Mono White',
          resolveValueSecond: 'Mono White'
        },
      })

      setCardName(cardType as any);
      handleTransferPress();
    } catch (error: any) {
      Alert.alert('Error selecting', error.message)
    }
  };

  return {
    showModal,
    setShowModal,
    cardName,
    setCardName,
    sendMoney,
  }
}
