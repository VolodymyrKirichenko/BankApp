import { View, StyleSheet, ScrollView } from 'react-native'
import { FC } from 'react'
import { SubHeading } from '../../../ui/SubHeading'
import { otherItems } from './data'
import { OtherItem } from './OtherItem/OtherItem'

export const Other: FC = () => {
  return (
    <View>
      <SubHeading text='Important transfers' />

      <ScrollView
        style={styles.scroll}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {otherItems.map(item => (
          <OtherItem key={item.title} item={item} />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  scroll: {
    paddingVertical: 20
  }
})
