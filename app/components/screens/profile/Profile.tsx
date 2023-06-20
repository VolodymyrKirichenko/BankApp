import { View, Text, StyleSheet } from 'react-native';
import { FC } from 'react';
import { Layout } from '../../../components/layout/Layout';
import { Heading } from '../../../components/ui/Heading';
import { Padding } from '../../../components/ui/Padding';
import { useProfile } from '../../../hooks/useProfile';
import { Loader } from '../../../components/ui/Loader';
import { Field } from '../../../components/ui/Field';
import { Button } from '../../../components/ui/Button';
import { useAuth } from '../../../hooks/useAuth';
import { useUpdateProfile } from '../../../hooks/useUpdateProfile';

export const Profile: FC = () => {
  const { logout } = useAuth();
  const {
    name,
    setName,
    profile,
    isLoading: isProfileLoading,
    realAvatar,
    setRealAvatar
  } = useProfile();

  const {
    isLoading,
    isSuccess,
    updateProfile,
  } = useUpdateProfile(name, realAvatar, profile.docId);

  return (
    <Layout>
      <Heading text='Profile' isCenter={true} />

      <Padding>
        {isSuccess && (
          <View style={styles.alert}>
            <Text style={styles.text}>
              Profile updated successfully
            </Text>
          </View>
        )}

        {(isProfileLoading || isLoading) ? (
          <Loader />
        ) : (
          <>
            <Field
              onChange={setName}
              val={name}
              placeholder='Enter name'
            />

            <Field
              onChange={setRealAvatar}
              val={realAvatar}
              placeholder='Enter news avatars uri'
            />

            <Button
              onPress={updateProfile}
              title='Update profile'
            />

            <Button
              onPress={logout}
              title='Logout'
              colors={['lightGrey', '#D6D8DB']}
            />
          </>
        )}
      </Padding>
    </Layout>
  )
}

const styles = StyleSheet.create({
  alert: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 12,
  },
  text: {
    color: 'white',
    textAlign: 'center'
  },
})
