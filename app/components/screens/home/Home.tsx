import { View, StyleSheet } from 'react-native';
import { FC } from 'react';
import { Header } from '../../../components/screens/home/Header';
import { Stories } from '../../../components/screens/home/stories/Stories';

export const Home: FC = ({ navigation }: any) => {
  return (
    <View style={styles.main}>
      <Header />

      <Stories />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    height: '100%',
    display: 'flex',
  }
})
