import { View, StyleSheet, ViewStyle  } from 'react-native';
import { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode,
  style?: ViewStyle,
}

export const Padding: FC<Props> = (props) => {
  const { children, style } = props;

  return (
    <View style={[styles.main, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    paddingLeft: 16,
    paddingRight: 16,
  },
})
