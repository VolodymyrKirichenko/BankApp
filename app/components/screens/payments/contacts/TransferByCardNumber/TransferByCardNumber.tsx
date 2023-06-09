import { FC, useState } from 'react';
import { TextInput, StyleSheet, View, Modal, Text, Button } from 'react-native';
import { handleTransfer } from '../../../payments/handleTransfer';
import { useAccounts } from '../../../../../hooks/useAccounts';

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
    setShowModal(false);
    setTransferAmount('');
  };

  return (
    <>
      <View style={styles.button}>
        <Button
          title={'U wanna send some money?'}
          onPress={() => setShowModal(true)}
        />
      </View>

      <Modal visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          <Text>Enter the recipient's card number:</Text>

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={setCardNumber}
          />

          <Text>Amount</Text>

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={transferAmount}
            onChangeText={setTransferAmount}
          />

          <View style={styles.flexButtons}>
            <Button title="Confirm" onPress={handleTransferConfirm} />
            <Button title="Cancel" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexButtons: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'flex-end',
  },
  button: {
    width: '100%',
    alignItems: 'center'
  }
})
