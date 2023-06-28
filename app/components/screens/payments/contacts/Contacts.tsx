import { View, StyleSheet, ScrollView } from 'react-native'
import { FC } from 'react'
import { useContacts } from '../../../../hooks/useContacts'
import { SubHeading } from '../../../ui/SubHeading'
import { Loader } from '../../../ui/Loader'
import { ContactItem } from './ContactItem/ContactItem'
import { TransferByCardNumber } from './TransferByCardNumber/TransferByCardNumber'

export const Contacts: FC = () => {
  const { contacts, isLoading } = useContacts()

  return (
    <View>
      <TransferByCardNumber />

      <SubHeading text='Phone transfers' />

      {isLoading
        ? (
        <Loader />
          )
        : (
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
  scroll: {
    marginTop: 20
  }
})
