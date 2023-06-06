import { useEffect, useState } from 'react';
import { IContact, IProfile } from '../typedefs/typedefs';
import { useAuth } from './useAuth';
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where
} from '@firebase/firestore';
import { db } from '../utils/firebase';

export const useContacts = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuth();

  useEffect(() => onSnapshot(query(collection(db, 'accounts'),
    where('userId', '!=', user?.uid)),
    async snapshot => {
      const contactsFire = await Promise.all(
        snapshot.docs.map(async el => {
          const data = el.data() as IContact & {
            userId: string,
          }

          let displayName = '';
          const q = query(collection(db, 'users'),
            where('_id', '==', data.userId)
          )

          const querySnapshot = await getDocs(q);

          querySnapshot.forEach(doc => {
            displayName = (doc.data() as IProfile).displayName
          })

          return {
            ...data,
            _id: el.id,
            displayName
          }
        })
      )

      setContacts(contactsFire.filter((v, i, a) => (
        a.findIndex(t => t.displayName === v.displayName) === i
      )).filter(i => i.displayName));

      setIsLoading(false);
    }), [])

  return {
    contacts,
    isLoading,
  }
}
