import { StyleSheet } from 'react-native'
import { FC } from 'react'
import { Menu } from './Menu/Menu'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ExchangeRate } from './ExchangeRate/ExchangeRate'

export const More: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ExchangeRate />

      <Menu />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  }
})
