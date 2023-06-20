import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import {
  limit,
  onSnapshot,
  query,
  where,
  collection
} from '@firebase/firestore';
import { db } from '../utils/firebase';
import { IProfile } from '../typedefs/typedefs';

export const useProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<IProfile>({} as IProfile);
  const [name, setName] = useState('');
  const [realAvatar, setRealAvatar] = useState('');

  const { user } = useAuth();

  useEffect(() => onSnapshot(query(collection(db, 'users'),
    where('_id', '==', user?.uid), limit(1)), snapshot => {
      const profile = snapshot.docs.map(el => ({
        ...(el.data() as IProfile),
        docId: el.id,
      }))[0]

    setProfile(profile);
    setName(profile.displayName);
    setIsLoading(false);
    setRealAvatar(profile.avatar);
  }), [])

  const value = useMemo(() => ({
    realAvatar,
    setRealAvatar,
    profile,
    isLoading,
    name,
    setName,
  }), [
    profile,
    isLoading,
    name,
    setName,
    realAvatar,
    setRealAvatar
  ])

  return value;
}
