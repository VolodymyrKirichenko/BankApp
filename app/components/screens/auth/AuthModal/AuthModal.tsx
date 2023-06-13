import { FC } from 'react';
import {
  Modal,
  StyleSheet,
  View,
  TextInput
} from 'react-native';
import { useGeneratePassword } from '../../../../hooks/useGeneratePassword';
import { Button } from '../../../../components/ui/Button';
import { PasswordSettings } from '../../../ui/PasswordSettings';
import { usePassword } from './passwordSettings';

interface Props {
  isVisible: boolean,
}

export const AuthModal: FC<Props> = (props) => {
  const { isVisible } = props;

  const {
    password,
    createNewPassword,
    handleChangeModalVisible,
  } = useGeneratePassword();

  const { passwordSettings } = usePassword();

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.item}>
          <TextInput
            value={password}
            style={styles.input}
          />
        </View>

        {passwordSettings.map(input => {
          const { isCondition, condition, handleChange } = input;

          return (
            <PasswordSettings
              key={condition}
              isCondition={isCondition}
              condition={condition}
              handleChange={handleChange}
            />
          )
        })}

        <View style={styles.createButton}>
          <Button
            title='Create new password'
            onPress={createNewPassword}
          />
        </View>

        <View style={styles.buttonsFlex}>
          <View style={{ flex: 1 }}>
            <Button
              title='Confirm'
              onPress={handleChangeModalVisible}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Button
              title='Cancel'
              onPress={handleChangeModalVisible}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  input: {
    fontFamily: 'mt-light',
    borderRadius: 12,
    backgroundColor: '#EDF2EF',
    marginTop: 10,
    padding: 10,
    flex: 1,
  },
  buttonsFlex: {
    flexDirection: 'row',
    marginHorizontal: 20,
    gap: 10
  },
  createButton: {
    width: '90%',
  }
})
