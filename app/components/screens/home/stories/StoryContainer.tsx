import { FC } from 'react';
import { useData } from '../../../../hooks/useData';
// @ts-ignore
import { StoryContainer as SC } from 'react-native-stories-view';

export const StoryContainer: FC = () => {
  const { activeStories, setActiveStories } = useData();

  console.log(activeStories);
  return activeStories && (
    <SC
      visible
      enableProgress
      images={activeStories}
      duration={20}
      onComplete={() => setActiveStories(null)}
      containerStyle={{ width: '100%', height: '100%' }}
    />
  )
}
