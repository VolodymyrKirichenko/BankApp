import { FC } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { IOtherItem } from '../../../../../typedefs/typedefs';
import { Icon } from './Icon';
import { BOX_SHADOW } from '../../../../../utils/styles';

interface Props {
  item: IOtherItem,
}

export const OtherItem: FC<Props> = (props) => {
  const { item } = props;

  return (
    <Pressable style={[styles.main, BOX_SHADOW]}>
      <Icon iconName={item.iconName} />

      <Text>{item.title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  main: {
    margin: 16,
    borderRadius: 10,
    padding: 8,
    width: 96,
    height: 96,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 12,
    marginTop: 6
  }
})
