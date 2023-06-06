import { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { IFooterItem } from '../../../../../typedefs/typedefs';
import { AntDesign } from '@expo/vector-icons'

interface Props extends Pick<IFooterItem, 'iconName'>{}

export const Icon: FC<Props> = (props) => {
  const { iconName } = props;

  return (
    <View style={styles.icon}>
      <AntDesign
        name={iconName}
        size={19}
        color='white'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    borderRadius: 50,
    backgroundColor: '#3B82F6',
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
