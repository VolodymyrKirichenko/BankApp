import { FC } from 'react';
import { useData } from '../../../../hooks/useData';
// @ts-ignore
import { StoryContainer as SC } from 'react-native-stories-view';
import { useAuth } from '../../../../hooks/useAuth';

export const StoryContainer: FC = () => {
  const { activeStories, setActiveStories } = useData();
  const { user } = useAuth();

  return (
    activeStories && (
      <SC
        visible={true}
        enableProgress={true}
        images={activeStories.images}
        duration={20}
        onComplete={() => setActiveStories(null)}
        containerStyle={{
          width: '100%',
          height: '100%',
        }}
        imageStyle={{
          width: 400,
          height: 500
        }}
      />
    )
  )
}
