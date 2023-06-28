import { View } from 'react-native'
import { FC } from 'react'
import { menu } from '../menu'
import { MenuItem } from './MenuItem/MenuItem'

export const Menu: FC = () => {
  return (
    <View>
      {menu.map(item => (
        <MenuItem
          key={item.title}
          item={item}
        />
      ))}
    </View>
  )
}
