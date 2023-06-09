import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FC } from 'react';
import { useContacts } from '../../../../hooks/useContacts';
import { SubHeading } from '../../../ui/SubHeading'
import { Loader } from '../../../ui/Loader';
import { ContactItem } from './ContactItem/ContactItem';
import { TransferByCardNumber } from './TransferByCardNumber/TransferByCardNumber';

export const Contacts: FC = () => {
  const { contacts, isLoading } = useContacts();

  return (
    <View style={styles.main}>
      <TransferByCardNumber />

      <SubHeading text='Phone transfers' />

      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView
          style={styles.scroll}
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          {contacts.map(contact => (
            <ContactItem
              key={contact._id}
              contact={contact}
            />
          ))}
        </ScrollView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    marginVertical: 32,
  },
  scroll: {
    marginTop: 20,
  }
})
