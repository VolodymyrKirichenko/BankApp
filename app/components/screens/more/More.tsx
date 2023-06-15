import { View, StyleSheet } from 'react-native';
import { FC } from 'react';
import { Menu } from './Menu/Menu';

export const More: FC = () => {
  return (
    <View style={styles.container}>
      <Menu />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  }
})
