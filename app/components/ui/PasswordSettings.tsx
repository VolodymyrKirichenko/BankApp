import {
  Switch,
  TextInput,
  View,
  StyleSheet
} from 'react-native';
import { FC } from 'react';

interface Props {
  isCondition: boolean,
  condition: string,
  handleChange: () => void,
}

export const PasswordSettings: FC<Props> = (props) => {
  const {
    isCondition,
    condition,
    handleChange
  } = props;

  return (
    <View style={styles.item}>
      <TextInput
        value={isCondition ? condition : ''}
        style={styles.input}
      />

      <Switch
        onValueChange={handleChange}
        style={{ top: 5}}
        value={isCondition}
      />
    </View>
  )
}

const styles = StyleSheet.create({
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
