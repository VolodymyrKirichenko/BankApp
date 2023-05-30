import { View, Text, StyleSheet, Pressable } from 'react-native';
import { FC, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { Loader } from '../../../components/ui/Loader';
import { Field } from '../../../components/ui/Field';
import { Button } from '../../../components/ui/Button';

interface IData {
  email: string,
  password: string,
}

export const Auth: FC = ({ navigation }: any) => {
  const {
    isLoading,
    login,
    register
  } = useAuth();

  const [data, setData] = useState<IData>({} as IData);
  const [isReg, setIsReg] = useState(false);

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
                isSecure={true}
              />

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
