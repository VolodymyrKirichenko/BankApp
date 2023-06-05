import { StyleSheet, ScrollView } from 'react-native';
import { FC } from 'react';
import { useStories } from '../../../../hooks/useStories';
import { Loader } from '../../../../components/ui/Loader';
import { StoryItem } from './StoryItem';

export const Stories: FC = ({ navigation }: any) => {
  const { stories, isLoading } = useStories();

  return isLoading ? <Loader /> : (
    <ScrollView
      style={styles.story}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {stories.map(story => (
        <StoryItem key={story._id} story={story} />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  story: {
    top: 10,
    marginRight: 20
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})
