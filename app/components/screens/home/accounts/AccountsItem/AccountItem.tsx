import { View, StyleSheet } from 'react-native'
import { FC } from 'react'
import { IAccount } from '../../../../../typedefs/typedefs'
import { Currency } from './Currency'
import { Balance } from './Balance'
import { ImageCard } from './ImageCard'

interface Props {
  account: IAccount
}

export const AccountsItem: FC<Props> = (props) => {
  const { account } = props

  return (
    <View style={styles.container}>
      <Currency currency={account.currency} />
      <Balance account={account} />
      <ImageCard account={account} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
