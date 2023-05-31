import { View, StyleSheet } from 'react-native';
import { FC } from 'react';
import { Header } from '../../../components/screens/home/Header';

export const Home: FC = ({ navigation }: any) => {
  return (
    <View style={styles.main}>
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    // height: '100%',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
  }
})
