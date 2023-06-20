import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';
import { db } from '../utils/firebase';
import { doc, updateDoc } from '@firebase/firestore';
import { Alert } from 'react-native';

export const useUpdateProfile = (name: string, realAvatar: string, docId: string) => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateProfile = async () => {
    setIsLoading(true);

    if (!user) {
      return;
    }

    try {
      const docRef = doc(db, 'users', docId);

      await updateDoc(docRef, {
        displayName: name,
        avatar: realAvatar,
      })

      setIsSuccess(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(false);
      }, 3000);
    } catch (error: any) {
      Alert.alert('Error update profile', error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    isSuccess,
    updateProfile,
  }
}
