import { View, StyleSheet, BackHandler } from 'react-native';
import { FC, useEffect } from 'react';
import { Header } from '../../../components/screens/home/Header';
import { Stories } from '../../../components/screens/home/stories/Stories';
import { useIsFocused, useNavigation } from '@react-navigation/native';

export const Home: FC = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    const backAction = () => {
      return true;
    };

    if (isFocused) {
      const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
      return () => backHandler.remove();
    }
  }, [isFocused]);

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
