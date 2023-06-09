import {
  Text,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { FC, useState } from 'react';
import { IContact } from '../../../../../typedefs/typedefs';
import { Avatar } from '../../../../ui/Avatar';
import { useAccounts } from '../../../../../hooks/useAccounts';
import { handleTransfer } from '../../handleTransfer';
import { ModalWindow } from '../../../../ui/ModalWindow';

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
    await handleTransfer(accounts[0], contact.cardNumber, transferAmount);

    setTransferAmount('');
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleTransferPress}>
        <Avatar name={contact.displayName} size={'large'} />

        <Text style={styles.text}>{contact.displayName}</Text>
      </Pressable>

      <ModalWindow
        showModal={showModal}
        setShowModal={setShowModal}
        setTransferAmount={setTransferAmount}
        transferAmount={transferAmount}
        handleTransferConfirm={handleTransferConfirm}
      />
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
  input: {
    width: '80%',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
});
