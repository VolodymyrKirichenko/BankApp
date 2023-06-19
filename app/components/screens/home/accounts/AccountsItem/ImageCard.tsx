import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  Modal,
  TouchableOpacity,
  View
} from 'react-native';
import { FC, useCallback, useState } from 'react';
import { IAccount } from '../../../../../typedefs/typedefs';
import { useProfile } from '../../../../../hooks/useProfile';

interface Props {
  account: IAccount,
}

export const ImageCard: FC<Props> = (props) => {
  const { account } = props;
  const { name, cardNumber } = account;
  const { name: userName } = useProfile();
  const [showModal, setShowModal] = useState(false);

  const imageBlack: ImageSourcePropType = require('../../../../../../assets/monobank_mc-word.png');
  const imageWhite: ImageSourcePropType = require('../../../../../../assets/bila-n.jpg');

  const handleChangeModal = useCallback(() => {
    setShowModal(prevState => !prevState);
  }, [setShowModal])

  return (
    <>
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <ImageBackground
          source={name === 'Mono Black' ? imageBlack : imageWhite}
          resizeMode='contain'
          style={styles.icon}
        >
          <Text style={styles.text}>{cardNumber.slice(-4)}</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleChangeModal}>
        <Modal visible={showModal} animationType="slide">
          <View style={styles.cardContainer}>
            <ImageBackground
              style={styles.cardBackground}
              source={name === 'Mono Black' ? imageBlack : imageWhite}
            />

            <Text
              style={[
                styles.cardNumber,
                { color: name === 'Mono Black' ? 'white' : 'red' },
                { bottom: name === 'Mono Black' ? '47%' : '50%' }
              ]}
            >
              {cardNumber.split(' ').join('    ')}
            </Text>

            <View style={styles.cardHolder}>
              <Text style={{ color: name === 'Mono Black' ? 'white' : 'black' }}>
                {userName}
              </Text>

              <Text style={{ color: name === 'Mono Black' ? 'white' : 'black' }}>
                Expiry: 12/24
              </Text>
            </View>
          </View>
        </Modal>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'flex-end',
    width: 56,
    height: 40,
    padding: 18,
    position: 'relative'
  },
  text: {
    fontSize: 8,
    color: 'red',
    position: 'absolute',
    bottom: 5,
    left: 5,
    fontWeight: '600',
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
    borderRadius: 10,
  },
  cardNumber: {
    fontSize: 28,
    fontWeight: '900',
    position: 'absolute',
    left: 50,
    bottom: '47%'
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
})
