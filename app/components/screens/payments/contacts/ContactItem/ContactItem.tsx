import {
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Modal,
  View,
  Button
} from 'react-native';
import { FC, useState } from 'react';
import { IContact } from '../../../../../typedefs/typedefs';
import { Avatar } from '../../../../ui/Avatar';
import { useAccounts } from '../../../../../hooks/useAccounts';
import { handleTransfer } from '../../handleTransfer';

interface Props {
  contact: IContact,
}

export const ContactItem: FC<Props> = (props) => {
  const { contact } = props;
  const { accounts } = useAccounts();
  const [transferAmount, setTransferAmount] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleTransferPress = () => {
    setShowModal(true);
  };

  const handleTransferConfirm = async () => {
    setShowModal(false);
    await handleTransfer(accounts[0], contact.cardNumber, transferAmount);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleTransferPress}>
        <Avatar name={contact.displayName} size={'large'} />

        <Text style={styles.text}>{contact.displayName}</Text>
      </Pressable>

      <Modal visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          <Text>Enter the transfer amount:</Text>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginRight: 4,
    alignContent: 'center',
  },
  text: {
    marginTop: 4,
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  flexButtons: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'flex-end',
  }
});
