import { TextInput, StyleSheet } from 'react-native';
import { FC } from 'react';
import { IField } from '../../typedefs/typedefs';

export const Field: FC<IField> = (props) => {
  const {
    onChange,
    placeholder,
    val,
    isSecure,
  } = props;

  return (
    <TextInput
      style={styles.input}
      showSoftInputOnFocus={true}
      placeholder={placeholder}
      onChangeText={onChange}
      value={val}
      secureTextEntry={isSecure}
      autoCapitalize='none'
    />
  )
}

const styles = StyleSheet.create({
  input: {
    fontFamily: 'mt-light',
    borderRadius: 12,
    backgroundColor: '#EDF2EF',
    marginTop: 15,
    padding: 15,
    width: '100%'
  }
})
