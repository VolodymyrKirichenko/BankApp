import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './app/providers/AuthProvider';
import { Navigation } from './app/navigation/Navigation';
import { useFonts } from './app/hooks/useFonts';

export default function App() {
  const { fontLoaded } = useFonts();

  if (fontLoaded) {
    return (
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    );
  }
}
