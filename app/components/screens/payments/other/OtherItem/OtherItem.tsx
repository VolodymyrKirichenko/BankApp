import { FC, useState } from 'react';
import {
  Text,
  Pressable,
  StyleSheet,
  Modal,
  View,
  TextInput,
  Button
} from 'react-native';
import { IOtherItem } from '../../../../../typedefs/typedefs';
import { Icon } from './Icon';
import { BOX_SHADOW } from '../../../../../utils/styles';
import { handleTransfer } from '../../handleTransfer';
import { useAccounts } from '../../../../../hooks/useAccounts';

interface Props {
  item: IOtherItem,
}

export const OtherItem: FC<Props> = (props) => {
  const { item } = props;
  const { accounts } = useAccounts();
  const [showModal, setShowModal] = useState(false);
  const [transferAmount, setTransferAmount] = useState('');

  const handleTransferPress = () => {
    setShowModal(true);
  };

  const handleTransferConfirm = async () => {
    setShowModal(false);
    await handleTransfer(accounts[0], '5111 8234 5714 1749', transferAmount);
  };

  return (
    <View>
      <Pressable
        style={[styles.main, BOX_SHADOW]}
        onPress={handleTransferPress}
      >
        <Icon iconName={item.iconName} />

        <Text>{item.title}</Text>
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
  main: {
    margin: 16,
    borderRadius: 10,
    padding: 8,
    width: 96,
    height: 96,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
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
