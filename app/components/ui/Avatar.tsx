import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { FC } from 'react'
import { IAvatar } from '../../typedefs/typedefs'

export const Avatar: FC<IAvatar> = (props) => {
  const { size = 'small', icon, onChangeAvatar } = props

  const isSmall = size === 'small'

  return (
    <View
      style={[styles.avatar, {
        width: isSmall ? 40 : 52, height: isSmall ? 40 : 52
      }]}
    >
      {icon && (
        <TouchableWithoutFeedback onPress={() => { onChangeAvatar ? onChangeAvatar(icon) : '' }}>
          <Image
            source={{ uri: icon }}
            style={styles.image}
          />
        </TouchableWithoutFeedback>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    backgroundColor: '#D4D4D4',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontWeight: '800'
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50
  }
})
