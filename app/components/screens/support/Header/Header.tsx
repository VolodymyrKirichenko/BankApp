import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../../assets/mono.webp')}
        style={styles.icon}
      />

      <View>
        <Text style={styles.textH2}>Support</Text>
        <Text style={styles.textH4}>We are there 24/7</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    marginBottom: 8,
    marginTop: 16
  },
  icon: {
    height: 60,
    width: 60,
    marginRight: 8
  },
  textH2: {
    fontFamily: 'mt-bold',
    fontSize: 18
  },
  textH4: {
    fontFamily: 'mt-light',
    fontSize: 14
  }
})
