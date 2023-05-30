import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { limit, onSnapshot, query, where } from '@firebase/firestore';
import { collection } from '@firebase/firestore/lite';
import { db } from '../utils/firebase';

interface IProfile {
  _id: string,
  displayName: string,
  docID: string
}

export const useProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<IProfile>({} as IProfile);
  const [name, setName] = useState('');

  const { user } = useAuth();

  useEffect(() => onSnapshot(query(collection(db, 'users'),
    where('_id', '==', user?.uid), limit(1)), snapshot => {
      const profile = snapshot.docs.map(el => ({
        ...(el.data() as IProfile),
        docId: el.id
      }))[0]

    setProfile(profile);
    setName(profile.displayName);
    setIsLoading(false);
  }), [])

  const value = useMemo(() => ({
    profile,
    isLoading,
    name,
    setName
  }), [])

  return value;
}
