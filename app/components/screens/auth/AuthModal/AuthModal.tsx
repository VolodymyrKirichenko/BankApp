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

interface Props {
  isVisible: boolean,
}

export const AuthModal: FC<Props> = (props) => {
  const { isVisible } = props;

  const {
    isNumbers,
    password,
    isUpperLetters,
    isLowerLetters,
    isSpecialChars,
    createNewPassword,
    handleChangeUpperInput,
    handleChangeLowerInput,
    handleChangeNumbersInput,
    handleChangeModalVisible,
    handleChangeSpecialCharsInput,
  } = useGeneratePassword();

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.item}>
          <TextInput
            value={password}
            style={styles.input}
          />
        </View>

        <PasswordSettings
          isCondition={isUpperLetters}
          condition='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
          handleChange={handleChangeUpperInput}
        />

        <PasswordSettings
          isCondition={isLowerLetters}
          condition='abcdefghijklmnopqrstuvwxyz'
          handleChange={handleChangeLowerInput}
        />

        <PasswordSettings
          isCondition={isSpecialChars}
          condition='!@#$%^&*'
          handleChange={handleChangeSpecialCharsInput}
        />

        <PasswordSettings
          isCondition={isNumbers}
          condition='1234567890'
          handleChange={handleChangeNumbersInput}
        />

        <Button
          title='Create new password'
          onPress={createNewPassword}
        />

        <Button
          title='Cancel'
          onPress={handleChangeModalVisible}
        />
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
    paddingHorizontal: 30
  },
  input: {
    fontFamily: 'mt-light',
    borderRadius: 12,
    backgroundColor: '#EDF2EF',
    marginTop: 10,
    padding: 5,
    flex: 1,
  },
})
