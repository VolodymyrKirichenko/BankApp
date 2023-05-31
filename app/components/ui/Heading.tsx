import { Text, StyleSheet } from 'react-native';
import { FC } from 'react';
import { Padding } from '../../components/ui/Padding';

interface Props {
  text: string,
  isCenter?: boolean,
}

export const Heading: FC<Props> = (props) => {
  const { isCenter = false, text } = props;

  return (
    <Padding>
      <Text style={[styles.text, { textAlign: isCenter ? 'center' : 'justify' }]}>{text}</Text>
    </Padding>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    fontWeight: 'bold',
  }
})
