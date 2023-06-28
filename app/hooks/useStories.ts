import { useEffect, useState } from 'react'
import { IStory } from '../typedefs/typedefs'
import { onSnapshot, query, collection } from '@firebase/firestore'
import { db } from '../utils/firebase'

export const useStories = () => {
  const [stories, setStories] = useState<IStory[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => onSnapshot(query(collection(db, 'stories')),
    snapshot => {
      setStories(snapshot.docs.map(el => ({
        _id: el.id,
        ...el.data()
      }) as IStory))

      setIsLoading(false)
    }), [])

  return {
    stories,
    isLoading
  }
}
