import { View, Text, StyleSheet } from 'react-native'
import { FC, useCallback, useState } from 'react'
import { Layout } from '../../../components/layout/Layout'
import { Heading } from '../../../components/ui/Heading'
import { Padding } from '../../../components/ui/Padding'
import { useProfile } from '../../../hooks/useProfile'
import { Loader } from '../../../components/ui/Loader'
import { useUpdateProfile } from '../../../hooks/useUpdateProfile'
import { ProfileContent } from './ProfileContent/ProfileContent'

export const Profile: FC = () => {
  const [showModal, setShowModal] = useState(false)

  const {
    name,
    setName,
    profile,
    isLoading: isProfileLoading,
    realAvatar,
    setRealAvatar
  } = useProfile()

  const {
    isLoading,
    isSuccess,
    updateProfile
  } = useUpdateProfile(name, realAvatar, profile.docId)

  const handleShowModal = useCallback(() => {
    setShowModal(prevState => !prevState)
  }, [])

  const handleChangeAvatar = useCallback((uri: string) => {
    setRealAvatar(uri)
    handleShowModal()
  }, [])

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

        {(isProfileLoading || isLoading)
          ? (
          <Loader />
            )
          : (
          <ProfileContent
            handleChangeAvatar={handleChangeAvatar}
            showModal={showModal}
            updateProfile={updateProfile}
            handleShowModal={handleShowModal}
            name={name}
            setName={setName}
            realAvatar={realAvatar}
            setRealAvatar={setRealAvatar}
          />
            )}
      </Padding>
    </Layout>
  )
}

const styles = StyleSheet.create({
  alert: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 12
  },
  text: {
    color: 'white',
    textAlign: 'center'
  }
})
