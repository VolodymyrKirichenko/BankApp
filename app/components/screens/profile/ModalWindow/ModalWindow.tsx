import { FC } from 'react'
import { Layout } from '../../../../components/layout/Layout'
import { FlatList, Modal } from 'react-native'
import { avatars } from '../avatars'
import { AvatarsItem } from '../AvatarsItem/AvatarsItem'

interface Props {
  showModal: boolean
  handleChangeAvatar: (uri: string) => void
}

export const ModalWindow: FC<Props> = (props) => {
  const { showModal, handleChangeAvatar } = props

  return (
    <Modal visible={showModal}>
      <Layout isScrollView={false}>
        <FlatList
          data={avatars}
          renderItem={({ item }) => (
            <AvatarsItem
              icon={item}
              onChangeAvatar={handleChangeAvatar}
            />
          )}
          keyExtractor={item => String(item.id)}
          numColumns={4}
          style={{ paddingHorizontal: 20 }}
        />
      </Layout>
    </Modal>
  )
}
