import { Text, StyleSheet } from 'react-native'
import { FC } from 'react'
import { Padding } from '../../components/ui/Padding'

interface Props {
  text: string
}

export const SubHeading: FC<Props> = (props) => {
  const { text } = props

  return (
    <Padding>
      <Text style={styles.text}>{text}</Text>
    </Padding>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: 'bold'
  }
})
