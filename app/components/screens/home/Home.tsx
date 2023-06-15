import { BackHandler } from 'react-native';
import { FC, useEffect } from 'react';
import { Header } from '../../../components/screens/home/Header';
import { Stories } from '../../../components/screens/home/stories/Stories';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Accounts } from './accounts/Accounts';
import { ApplyNewProduct } from './apply-new-product/ApplyNewProduct';
import { Layout } from '../../layout/Layout';

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
    <Layout>
      <Header />

      <Stories />

      <Accounts />

      <ApplyNewProduct />
    </Layout>
  )
}
