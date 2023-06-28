import { FC } from 'react'
import { useData } from '../../../../hooks/useData'
// @ts-expect-error
import { StoryContainer as SC } from 'react-native-stories-view'

export const StoryContainer: FC = () => {
  const { activeStories, setActiveStories } = useData()

  return (
    activeStories && (
      <SC
        visible={true}
        enableProgress={true}
        images={activeStories.images}
        duration={20}
        onComplete={() => { setActiveStories(null) }}
        containerStyle={{
          top: 20,
          width: '100%',
          height: '100%'
        }}
        imageStyle={{
          height: 900,
          width: 450
        }}
      />
    )
  )
}
