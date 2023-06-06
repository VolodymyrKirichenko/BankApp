import { Text, Pressable, StyleSheet } from 'react-native';
import { FC } from 'react';
import { IContact } from '../../../../../typedefs/typedefs';
import { Avatar } from '../../../../ui/Avatar';

interface Props {
  contact: IContact,
}

export const ContactItem: FC<Props> = (props) => {
  const { contact } = props;

  return (
    <Pressable style={styles.container}>
      <Avatar name={contact.displayName} size={'large'}/>

      <Text style={styles.text}>{contact.displayName}</Text>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginRight: 4,
    alignItems: 'center'
  },
  text: {
    marginTop: 4,
    fontSize: 14,
  },
})
