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

  const addSpacesToCardNumber = (cardNumber: string) => {
    const cardNumberArray = Array.from(cardNumber);

    return cardNumberArray.map((el, index) => {
      if ((index + 1) % 4 === 0 && index !== cardNumberArray.length - 1) {
        return el + ' ';
      } else {
        return el;
      }
    }).join('');
  };

  const handleTransferConfirm = useCallback(async (cardNumber: string, transferAmount: string) => {
    const cardNumberWithSpaces = addSpacesToCardNumber(cardNumber);
    const cardN = accounts.find(el => el.name === cardName);

    if (cardN) {
      await handleTransfer(cardN, cardNumberWithSpaces, transferAmount);
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
      />
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  button: {
    width: '100%',
    alignItems: 'center'
  }
})
