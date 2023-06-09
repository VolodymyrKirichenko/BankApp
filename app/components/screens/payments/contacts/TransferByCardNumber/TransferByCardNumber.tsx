import { FC, useState } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { handleTransfer } from '../../../payments/handleTransfer';
import { useAccounts } from '../../../../../hooks/useAccounts';
import { Button } from '../../../../../components/ui/Button';
import { ModalWindow } from '../../../../ui/ModalWindow';

interface Props {
}

export const TransferByCardNumber: FC<Props> = (props) => {
  const {} = props;

  const [transferAmount, setTransferAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [showModal, setShowModal] = useState(false);

  const { accounts } = useAccounts();

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

  const handleTransferConfirm = async () => {
    const cardNumberWithSpaces = addSpacesToCardNumber(cardNumber);
    await handleTransfer(accounts[0], cardNumberWithSpaces, transferAmount);

    setCardNumber('');
    setTransferAmount('');
    setShowModal(false);
  };

  return (
    <>
      <View style={styles.button}>
        <Button
          title='U wanna send some money on card?'
          onPress={() => setShowModal(true)}
        />
      </View>

      <ModalWindow
        showModal={showModal}
        setShowModal={setShowModal}
        setTransferAmount={setTransferAmount}
        transferAmount={transferAmount}
        setCardNumber={setCardNumber}
        cardNumber={cardNumber}
        handleTransferConfirm={handleTransferConfirm}
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
