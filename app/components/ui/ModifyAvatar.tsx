import { View, StyleSheet, Image  } from 'react-native';
import { FC } from 'react';
import { IAvatar } from '../../typedefs/typedefs';

export const ModifyAvatar: FC<IAvatar> = (props) => {
  const { size = 'small', icon } = props;

  const isSmall = size === 'small';

  return (
    <View
      style={[styles.avatar, {
        width: isSmall ? 36 : 48, height: isSmall ? 36 : 48
      }]}
    >
      {icon && (
        <Image
          source={{ uri: icon }}
          style={styles.image}
        />
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
    borderRadius: 50,
  },
})
