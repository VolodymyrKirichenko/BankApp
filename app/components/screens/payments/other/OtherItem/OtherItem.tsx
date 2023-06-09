import { FC, useState } from 'react';
import {
  Text,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { IOtherItem } from '../../../../../typedefs/typedefs';
import { Icon } from './Icon';
import { BOX_SHADOW } from '../../../../../utils/styles';
import { handleTransfer } from '../../handleTransfer';
import { useAccounts } from '../../../../../hooks/useAccounts';
import { ModalWindow } from '../../../../ui/ModalWindow';

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
    await handleTransfer(accounts[0], '5111 8234 5714 1749', transferAmount);

    setTransferAmount('');
    setShowModal(false);
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
  input: {
    width: '80%',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
});
