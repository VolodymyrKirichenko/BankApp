import { Text, Pressable, StyleSheet } from 'react-native';
import { FC } from 'react';
import { IFooterItem } from '../../../../typedefs/typedefs';
import { AntDesign } from '@expo/vector-icons';
import { TypeRootStackParamList } from '../../../../navigation/types';

interface Props {
  item: IFooterItem,
  navigate: (screenName: keyof TypeRootStackParamList) => void,
  currentRoute: string,
}

export const NavItem: FC<Props> = (props) => {
  const { item, navigate, currentRoute } = props;

  const isActive = currentRoute === item.title;

  return (
    <Pressable
      style={styles.main}
      onPress={() => navigate(item.title)}
    >
      <AntDesign
        name={item.iconName}
        style={[styles.icon, { color: isActive ? '#3B82F6' : '#9CA3AF' }]}
      />

      <Text
        style={[styles.text, { color: isActive ? '#3B82F6' : '#9CA3AF' }]}
      >
        {item.title}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    width: '20%'
  },
  icon: {
    fontSize: 20,
  },
  text: {
    fontSize: 12,
    marginTop: 4,
  }
})
