import { View, StyleSheet, ViewStyle  } from 'react-native';
import { FC, ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  children?: ReactNode,
  style?: ViewStyle,
}

export const Padding: FC<Props> = (props) => {
  const { children, style } = props;

  return (
    <SafeAreaView  style={[styles.main, style]}>
      {children}
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  main: {
    paddingLeft: 16,
    paddingRight: 16,
  },
})
