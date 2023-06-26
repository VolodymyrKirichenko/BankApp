import { FC, useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { handleTransfer } from '../../../payments/handleTransfer';
import { useAccounts } from '../../../../../hooks/useAccounts';
import { Button } from '../../../../../components/ui/Button';
import { ModalWindow } from '../../../../ui/ModalWindow';
import { useSendMoney } from '../../../../../hooks/useSendMoney';

export const TransferByCardNumber: FC = () => {
  const [transferAmount, setTransferAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const { accounts } = useAccounts();
  const {
    setCardName,
    cardName,
    setShowModal,
    showModal,
    sendMoney
  } = useSendMoney();

  const handleCardNumberChange = (text: string) => {
    const inputText = text.replace(/\D/g, '').substring(0, 16);
    const splitText = inputText.match(/.{1,4}/g);
    const formattedText = splitText ? splitText.join(' ') : '';
    setCardNumber(formattedText);
  };

  const handleTransferConfirm = useCallback(async (cardNumber: string, transferAmount: string) => {
    const cardN = accounts.find(el => el.name === cardName);

    if (cardN) {
      await handleTransfer(cardN, cardNumber, transferAmount);
    }

    setCardNumber('');
    setTransferAmount('');
    setShowModal(false);
  }, [cardName, setCardName]);

  return (
    <>
      <View style={styles.button}>
        <Button
          title='U wanna send some money on card?'
          onPress={sendMoney}
        />
      </View>

      <ModalWindow
        showModal={showModal}
        setShowModal={setShowModal}
        setTransferAmount={setTransferAmount}
        transferAmount={transferAmount}
        setCardNumber={setCardNumber}
        cardNumber={cardNumber}
        handleTransferConfirm={() => handleTransferConfirm(cardNumber, transferAmount)}
        needTwo={true}
        handleCardNumberChange={handleCardNumberChange}
      />
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center'
  }
})
