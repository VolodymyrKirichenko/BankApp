import {
  Text,
  Pressable,
  StyleSheet,
  View
} from 'react-native'
import { FC, useCallback, useState } from 'react'
import { IContact } from '../../../../../typedefs/typedefs'
import { useAccounts } from '../../../../../hooks/useAccounts'
import { handleTransfer } from '../../handleTransfer'
import { ModalWindow } from '../../../../ui/ModalWindow'
import { useSendMoney } from '../../../../../hooks/useSendMoney'
import { ModifyAvatar } from '../../../../../components/ui/ModifyAvatar'

interface Props {
  contact: IContact
}

export const ContactItem: FC<Props> = (props) => {
  const { contact } = props
  const { accounts } = useAccounts()
  const [transferAmount, setTransferAmount] = useState('')

  const {
    setCardName,
    cardName,
    setShowModal,
    showModal,
    sendMoney
  } = useSendMoney()

  const handleTransferConfirm = useCallback(async (transferAmount: string) => {
    const cardNumber = accounts.find(el => el.name === cardName)

    if (cardNumber) {
      await handleTransfer(cardNumber, contact.cardNumber, transferAmount)
    }

    setTransferAmount('')
    setShowModal(false)
  }, [cardName, setCardName])

  return (
    <View style={styles.container}>
      <Pressable onPress={sendMoney}>
        <ModifyAvatar size={'large'} icon={contact.avatar}/>

        <Text style={styles.text}>{contact.displayName}</Text>
      </Pressable>

      <ModalWindow
        showModal={showModal}
        setShowModal={setShowModal}
        setTransferAmount={setTransferAmount}
        transferAmount={transferAmount}
        handleTransferConfirm={async () => { await handleTransferConfirm(transferAmount) }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginRight: 4,
    alignContent: 'center'
  },
  text: {
    marginTop: 4,
    fontSize: 14
  },
  input: {
    width: '80%',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10
  }
})
