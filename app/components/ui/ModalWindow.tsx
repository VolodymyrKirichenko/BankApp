import React, { Dispatch, FC, SetStateAction } from 'react'
import { Modal, View, StyleSheet } from 'react-native'
import { Field } from '../../components/ui/Field'
import { Button } from '../../components/ui/Button'

interface Props {
  needTwo?: boolean
  showModal: boolean
  setShowModal: (value: boolean) => void
  cardNumber?: string
  setCardNumber?: Dispatch<SetStateAction<string>>
  transferAmount: string
  setTransferAmount: Dispatch<SetStateAction<string>>
  handleTransferConfirm: () => void
  handleCardNumberChange: (text: string) => void
}

export const ModalWindow: FC<Props> = (props) => {
  const {
    needTwo,
    showModal,
    cardNumber,
    setShowModal,
    transferAmount,
    setTransferAmount,
    handleTransferConfirm,
    handleCardNumberChange
  } = props

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.modalContainer}>
        {needTwo && (
          <Field
            val={cardNumber}
            placeholder={'Enter the recipient\'s card number'}
            onChange={handleCardNumberChange}
            keyboardType="numeric"
          />
        )}

        <Field
          val={transferAmount}
          placeholder={'Enter the transfer amount'}
          onChange={setTransferAmount}
          keyboardType="numeric"
        />

        <View style={styles.flexButtons}>
          <View style={{ flex: 1 }}>
            <Button title="Confirm" onPress={handleTransferConfirm} />
          </View>

          <View style={{ flex: 1 }}>
            <Button
              title="Cancel"
              onPress={() => { setShowModal(false) }}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  flexButtons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  }
})
