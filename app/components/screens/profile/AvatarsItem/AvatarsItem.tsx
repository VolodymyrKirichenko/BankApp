import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar as IAvatar } from '../../../../typedefs/typedefs';
import { Avatar } from '../../../ui/Avatar';

interface Props {
  icon: IAvatar,
  onChangeAvatar: (uri: string) => void,
}

export const AvatarsItem: FC<Props> = (props) => {
  const { icon, onChangeAvatar } = props;

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Avatar
          icon={icon.avatar}
          size={'large'}
          onChangeAvatar={onChangeAvatar}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  item: {
    borderRadius: 12,
    overflow: 'hidden',
    width: 56,
    height: 56,
    marginHorizontal: 16
  },
})
