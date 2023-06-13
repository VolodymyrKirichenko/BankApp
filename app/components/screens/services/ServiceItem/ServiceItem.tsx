import { View, Text, StyleSheet } from 'react-native';
import { FC } from 'react';
import { IService } from '../../../../typedefs/typedefs';
import { MaterialIcons } from '@expo/vector-icons';
import { Percent } from './Percent';
import { LinearGradient } from 'expo-linear-gradient';
import { getRandomGradient } from '../../../../utils/getRandomGradient';

interface Props {
  service: IService,
}

export const ServiceItem: FC<Props> = (props) => {
  const { service } = props;

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <LinearGradient
          colors={getRandomGradient()}
          style={styles.gradient}
        >
          <Percent percent={service.percent}/>

          <MaterialIcons
            name={service.iconName}
            color={'#FFF'}
            size={30}
          />
        </LinearGradient>
      </View>

      <Text style={styles.text}>{service.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  item: {
    borderRadius: 12,
    overflow: 'hidden',
    width: 56,
    height: 56,
    marginHorizontal: 16
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4
  },
  gradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
