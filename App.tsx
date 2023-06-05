import { AuthProvider } from './app/providers/AuthProvider';
import { Navigation } from './app/navigation/Navigation';
import { useFonts } from './app/hooks/useFonts';
import { DataProvider } from './app/providers/DataProvider';
import { StoryContainer } from './app/components/screens/home/stories/StoryContainer';

export default function App() {
  const { fontLoaded } = useFonts();

  if (fontLoaded) {
    return (
      <AuthProvider>
        <DataProvider>
          <StoryContainer />

          <Navigation />
        </DataProvider>
      </AuthProvider>
    );
  }
}
