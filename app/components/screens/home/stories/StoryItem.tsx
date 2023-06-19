import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground
} from 'react-native';
import { FC } from 'react';
import { IStory } from '../../../../typedefs/typedefs';
import { useData } from '../../../../hooks/useData';

interface Props {
  story: IStory,
}

export const StoryItem: FC<Props> = (props) => {
  const { story } = props;

  const { setActiveStories } = useData();

  return (
    <Pressable
      style={{ alignSelf: 'flex-start' }}
      onPress={() => setActiveStories(story)}
    >
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: story.images[0] }}
          resizeMode='cover'
          style={styles.image}
          imageStyle={{ borderRadius: 8 }}
        >
          <Text style={styles.text}>{story.heading}</Text>
        </ImageBackground>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginLeft: 16,
    borderWidth: 3,
    borderColor: '#00f',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontSize: 12,
    margin: 8
  }
})
