import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { FC } from 'react';
import { Layout } from '../../../components/layout/Layout';
import { services } from './data';
import { ServiceItem } from './ServiceItem/ServiceItem';

export const Services: FC = () => {
  return (
    <Layout>
      <Text style={styles.text}>Lviv</Text>

      <View style={styles.container}>
        {services.map(service => (
          <ServiceItem
            key={service.title}
            service={service}
          />
        ))}
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'mt-bold',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 24,
  },
})
