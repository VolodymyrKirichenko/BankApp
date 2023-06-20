import { Dispatch, FC, SetStateAction } from 'react';
import { Field } from '../../../../components/ui/Field';
import { Button } from '../../../../components/ui/Button';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { useAuth } from '../../../../hooks/useAuth';

interface Props {
  handleShowModal: () => void,
  updateProfile: () => Promise<void>,
  showModal: boolean,
  handleChangeAvatar: (uri: string) => void,
  name: string,
  setName: Dispatch<SetStateAction<string>>,
  realAvatar: string,
  setRealAvatar: (uri: string) => void,
}

export const ProfileContent: FC<Props> = (props) => {
  const {
    handleShowModal,
    updateProfile,
    showModal,
    handleChangeAvatar,
    setName,
    name,
    setRealAvatar,
    realAvatar
  } = props;

  const { logout } = useAuth();

  return (
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
        onPress={handleShowModal}
        title='Select new icon'
      />

      <Button
        onPress={logout}
        title='Logout'
        colors={['lightGrey', '#D6D8DB']}
      />

      <ModalWindow
        showModal={showModal}
        handleChangeAvatar={handleChangeAvatar}
      />
    </>
  )
}
