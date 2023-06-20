import { FC } from 'react';
import { Layout } from '../../../../components/layout/Layout';
import { Modal, StyleSheet, View } from 'react-native';
import { avatars } from '../avatars';
import { AvatarsItem } from '../AvatarsItem/AvatarsItem';

interface Props {
  showModal: boolean,
  handleChangeAvatar: (uri: string) => void,
}

export const ModalWindow: FC<Props> = (props) => {
  const { showModal, handleChangeAvatar } = props;

  return (
    <Modal visible={showModal}>
      <Layout isScrollView={true}>
        <View style={styles.container}>
          {avatars.map(avatar => (
            <AvatarsItem
              key={avatar.id}
              icon={avatar}
              onChangeAvatar={handleChangeAvatar}
            />
          ))}
        </View>
      </Layout>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
