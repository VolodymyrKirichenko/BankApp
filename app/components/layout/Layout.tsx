import { View, Text, ScrollView } from 'react-native';
import { FC, ReactNode } from 'react';

interface ILayout {
  isScrollView?: boolean,
  children: ReactNode,
}

export const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {

  return (
    <View style={{height: '100%', width: '100%', backgroundColor: 'white', paddingTop: 16}}>
      {isScrollView ? (
        <ScrollView>
          {children}
        </ScrollView>
      ) : (
        children
      )}
    </View>
  )
}
