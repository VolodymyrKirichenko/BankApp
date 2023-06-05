import { View, StyleSheet, Text  } from 'react-native';
import { FC } from 'react';
import { IAvatar } from '../../typedefs/typedefs';

export const Avatar: FC<IAvatar> = (props) => {
  const { name, size = 'small' } = props;

  const isSmall = size === 'small';

  return (
    <View
      style={[styles.avatar, {
        width: isSmall ? 36 : 48, height: isSmall ? 36 : 48
      }]}
    >
      <Text
        style={[styles.text, {
          fontSize: isSmall ? 22 : 30
        }]}
      >
        {name?.slice(0, 1)}
      </Text>
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
  }
})
