import {
  View,
  Text,
  Pressable,
  StyleSheet, Linking
} from 'react-native';
import { FC } from 'react';
import { IMoreItem } from '../../../../../typedefs/typedefs';
import { BOX_SHADOW } from '../../../../../utils/styles';
import { MaterialIcons } from '@expo/vector-icons';

interface Props {
  item: IMoreItem,
}

export const MenuItem: FC<Props> = (props) => {
  const { item } = props;

  return (
    <Pressable
      style={[styles.container, BOX_SHADOW]}
      onPress={() => Linking.openURL(item.link)}
    >
      <View style={styles.containerTwo}>
        <Text style={styles.textOne}>{item.title}</Text>
        <Text style={styles.textTwo}>{item.description}</Text>
      </View>

      <View style={styles.containerThree}>
        <MaterialIcons
          name={item.iconName}
          size={22}
          color='#EDF4FE'
        />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'space-between',
    borderRadius: 20,
  },
  containerTwo: {
    width: '83.3%',
  },
  containerThree: {
    borderRadius: 50,
    backgroundColor: '#4299e1',
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textOne: {
    fontSize: 20,
    color: '#2d3748',
    fontFamily: 'mt-bold'
  },
  textTwo: {
    marginTop: 4,
    opacity: 0.9,
    color: '#718096',
  }
})
