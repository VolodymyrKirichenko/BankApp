import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { FC } from 'react';

export const More: FC = ({ navigation }: any) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
      <Text style={{top: 50}}>More</Text>
    </TouchableWithoutFeedback>
  )
}
