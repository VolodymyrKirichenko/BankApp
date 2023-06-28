import { useEffect, useState } from 'react'
import { IAccount } from '../typedefs/typedefs'
import { onSnapshot, query, collection, where } from '@firebase/firestore'
import { db } from '../utils/firebase'
import { useAuth } from '../hooks/useAuth'

export const useAccounts = () => {
  const { user } = useAuth()

  const [accounts, setAccounts] = useState<IAccount[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => onSnapshot(query(collection(db, 'accounts'),
    where('userId', '==', user?.uid)),
  snapshot => {
    setAccounts(snapshot.docs.map(el => ({
      _id: el.id,
      ...el.data()
    }) as IAccount))

    setIsLoading(false)
  }), [])

  return {
    accounts,
    isLoading
  }
}
