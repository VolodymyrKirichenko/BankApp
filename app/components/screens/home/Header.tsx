import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FC } from 'react';
import { Padding } from '../../../components/ui/Padding';
import { Avatar } from '../../../components/ui/Avatar';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useProfile } from '../../../hooks/useProfile';
import { Loader } from '../../../components/ui/Loader';

export const Header: FC = () => {
  // const { isLoading, name } = useProfile();
  const { navigate } = useNavigation();

  const navigateToProfile = () => {
    navigate('Profile');
  }


  return (
    <Padding style={styles.main}>
      <Avatar name='Volodymyr' size='large' />

      <TouchableOpacity
        style={styles.name}
        onPress={navigateToProfile}
      >
        <Text style={styles.text}>Volodymyr</Text>

        <Entypo
          name='chevron-small-right'
          size={28}
          style={styles.icon}
        />
      </TouchableOpacity>
    </Padding>
  )
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    top: 50,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  text: {
    fontFamily: 'mt-bold',
    fontSize: 22
  },
  icon: {
    color: 'grey',
    fontWeight: 'bold',
  }
})
