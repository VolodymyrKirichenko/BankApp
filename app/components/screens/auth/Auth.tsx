import { View, Text, StyleSheet, Pressable } from 'react-native';
import { FC, useCallback, useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { Loader } from '../../../components/ui/Loader';
import { Field } from '../../../components/ui/Field';
import { Button } from '../../../components/ui/Button'
import { IData } from '../../../typedefs/typedefs';
import { AuthModal } from './AuthModal/AuthModal';
import { useGeneratePassword } from '../../../hooks/useGeneratePassword';

export const Auth: FC = ({ navigation }: any) => {
  const [data, setData] = useState<IData>({} as IData);
  const [isReg, setIsReg] = useState(false);
  const [isSecure, setIsSecure] = useState(true);

  const {
    isLoading,
    login,
    register
  } = useAuth();

  const { password, isClicked } = useGeneratePassword();

  const { isModalVisible, handleChangeModalVisible } = useGeneratePassword();

  const authHandler = async () => {
    const { email, password } = data;

    if (isReg) {
      await register(email, password);
    } else {
      await login(email, password);
    }

    setData({} as IData);
    navigation.navigate('Home');
  };

  const handleChangeSecure = useCallback(() => {
    setIsSecure((prevState => !prevState))
  }, [])

  useEffect(() => {
    setData({...data, password: password});
  }, [isClicked])

  return (
    <View style={styles.main}>
      <View style={styles.block}>
        <View style={{width: '75%'}}>
          <Text style={styles.text}>
            {isReg ? 'Sign Up' : 'Sign in'}
          </Text>

          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Field
                val={data.email}
                placeholder='Enter email'
                onChange={val => setData({...data, email: val})}
              />

              <Field
                val={data.password}
                placeholder='Enter password'
                onChange={val => setData({...data, password: val})}
                isSecure={isSecure}
                onChangeSecure={handleChangeSecure}
              />

              <Pressable onPress={() => handleChangeModalVisible()}>
                <Text style={styles.lowText}>
                  {isReg ? 'Generate password' : ''}
                </Text>
              </Pressable>

              <AuthModal isVisible={isModalVisible} />

              <Button
                onPress={authHandler}
                title={`Let's go`}
              />

              <Pressable onPress={() => setIsReg(!isReg)}>
                <Text style={styles.lowText}>
                  {isReg ? 'Login' : 'Register'}
                </Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
  },
  block: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'mt-bold',
    fontSize: 26
  },
  lowText: {
    color: 'grey',
    textAlign: 'right',
    opacity: 30,
    marginTop: 3
  },
})
