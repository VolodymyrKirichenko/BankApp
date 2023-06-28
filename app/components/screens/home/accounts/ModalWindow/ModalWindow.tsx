import { FC } from 'react'
import {
  ImageBackground,
  Modal,
  Text,
  View,
  StyleSheet,
  ImageSourcePropType,
  TouchableWithoutFeedback
} from 'react-native'
import { IAccount } from '../../../../../typedefs/typedefs'
import { useProfile } from '../../../../../hooks/useProfile'

interface Props {
  account: IAccount
  handleChangeModal: () => void
  showModal: boolean
  imageBlack: ImageSourcePropType
  imageWhite: ImageSourcePropType
}

export const ModalWindow: FC<Props> = (props) => {
  const {
    account,
    handleChangeModal,
    showModal,
    imageWhite,
    imageBlack
  } = props

  const { name, cardNumber } = account
  const { name: userName } = useProfile()

  return (
    <Modal visible={showModal} animationType="slide">
      <TouchableWithoutFeedback onPress={handleChangeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.cardContainer}>
            <ImageBackground
              style={styles.cardBackground}
              source={name === 'Mono Black' ? imageBlack : imageWhite}
            />

            <View
              style={[
                styles.container,
                { bottom: name === 'Mono Black' ? '47%' : '50%' },
                { backgroundColor: name === 'Mono Black' ? '' : 'white' }
              ]}
            >
              <Text
                style={[
                  styles.cardNumber,
                  { color: name === 'Mono Black' ? 'white' : 'black' }
                ]}
              >
                {cardNumber.split(' ').join('    ')}
              </Text>
            </View>

            <View style={styles.cardHolder}>
              <Text style={[styles.text, { color: name === 'Mono Black' ? 'white' : 'black' }]}>
                {userName}
              </Text>

              <Text style={[styles.text, { color: name === 'Mono Black' ? 'white' : 'black' }]}>
                Expiry: 12/24
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    width: 430,
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardBackground: {
    position: 'relative',
    width: '100%',
    height: 230,
    resizeMode: 'cover',
    borderRadius: 10
  },
  cardNumber: {
    fontSize: 28,
    fontWeight: '900'
  },
  cardHolder: {
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    left: 50,
    bottom: '40%',
    display: 'flex',
    width: 230,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    position: 'absolute',
    left: 50,
    opacity: 0.9
  },
  text: {
    fontFamily: 'mt-bold',
    fontSize: 16
  }
})
