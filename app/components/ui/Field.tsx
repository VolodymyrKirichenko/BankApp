import { TextInput, StyleSheet, View } from 'react-native';
import { FC } from 'react';
import { IField } from '../../typedefs/typedefs';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Field: FC<IField> = (props) => {
  const {
    onChange,
    placeholder,
    val,
    isSecure,
    keyboardType,
    onChangeSecure
  } = props;

  const isVisible = isSecure !== undefined;

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        showSoftInputOnFocus={true}
        placeholder={placeholder}
        onChangeText={onChange}
        value={val}
        secureTextEntry={isSecure}
        autoCapitalize='none'
        keyboardType={keyboardType}
      />

      {isVisible && (
        <Icon
          name={isSecure ? 'eye-slash' : 'eye'}
          size={20}
          color="#000"
          style={styles.icon}
          onPress={onChangeSecure}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    position: 'relative',
    fontFamily: 'mt-light',
    borderRadius: 12,
    backgroundColor: '#EDF2EF',
    marginTop: 15,
    padding: 15,
    flex: 1,
  },
  icon: {
    marginLeft: 10,
    position: 'absolute',
    top: '50%',
    right: 20
  },
});
