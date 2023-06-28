import { View, ScrollView, StyleSheet } from 'react-native'
import { FC, ReactNode } from 'react'

interface Props {
  isScrollView?: boolean
  children: ReactNode
}

export const Layout: FC<Props> = ({ children, isScrollView = true }) => {
  return (
    <View style={ styles.container }>
      {isScrollView
        ? (
        <ScrollView>
          {children}
        </ScrollView>
          )
        : (
            children
          )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    paddingTop: 24
  }
})
