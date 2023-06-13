import { PasswordsType } from '../typedefs/typedefs';
import { useGeneratePassword } from '../hooks/useGeneratePassword';

export const usePassword = () => {
  const {
    isNumbers,
    isUpperLetters,
    isLowerLetters,
    isSpecialChars,
    handleChangeUpperInput,
    handleChangeLowerInput,
    handleChangeNumbersInput,
    handleChangeSpecialCharsInput,
  } = useGeneratePassword();

  const passwordSettings: PasswordsType[] = [
    {
      isCondition: isUpperLetters,
      condition: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      handleChange: handleChangeUpperInput
    },
    {
      isCondition: isLowerLetters,
      condition: 'abcdefghijklmnopqrstuvwxyz',
      handleChange: handleChangeLowerInput
    },
    {
      isCondition: isSpecialChars,
      condition: '!@#$%^&*',
      handleChange: handleChangeSpecialCharsInput
    },
    {
      isCondition: isNumbers,
      condition: '1234567890',
      handleChange: handleChangeNumbersInput
    }
  ];

  return {
    passwordSettings,
  };
}
