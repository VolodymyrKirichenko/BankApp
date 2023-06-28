import { StyleSheet } from 'react-native'
import { FC } from 'react'
import { Padding } from '../../ui/Padding'
import { menu } from './menu'
import { NavItem } from './NavItem/NavItem'
import { TypeRootStackParamList } from '../../../navigation/types'

interface Props {
  navigate: (screenName: keyof TypeRootStackParamList) => void
  currentRoute: string
}

export const Footer: FC<Props> = (props) => {
  const { navigate, currentRoute } = props

  return (
    <Padding style={styles.main}>
      {menu.map(item => (
        <NavItem
          key={item.title}
          item={item}
          navigate={navigate}
          currentRoute={currentRoute}
        />
      ))}
    </Padding>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 0,
    paddingBottom: 20,
    paddingTop: 8,
    borderTopColor: '#E1E1E1',
    borderTopWidth: 1
  }
})
