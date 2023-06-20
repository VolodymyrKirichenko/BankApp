import { createContext, useEffect, useMemo, useState, ReactNode } from 'react';
import firebase from 'firebase/compat';
import User = firebase.User;
import { Alert } from 'react-native';
import { auth, db, login, logout, register } from '../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { FC } from 'react';

interface IContext {
  user: User | null
  isLoading: boolean
  register: (email: string, password: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const registerHandler = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const { user } = await register(email, password);

      await addDoc(collection(db, 'users'), {
        _id: user.uid,
        displayName: 'Noname',
        avatar: 'https://static-00.iconduck.com/assets.00/user-avatar-icon-512x512-vufpcmdn.png',
      })
    } catch (error: any) {
      Alert.alert('Error reg:', error.message)
    } finally {
      setIsLoading(false);
    }
  }

  const loginHandler = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      await login(email, password);
    } catch (error: any) {
      Alert.alert('Error login:', error.message)
    } finally {
      setIsLoading(false);
    }
  }

  const logoutHandler = async () => {
    setIsLoading(true);

    try {
      await logout();
    } catch (error: any) {
      Alert.alert('Error logout:', error)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user as User);

      setIsLoadingInitial(false);
    });

    return unsubscribe;
  }, []);

  const value = useMemo(() => ({
    user,
    isLoading,
    login: loginHandler,
    logout: logoutHandler,
    register: registerHandler,
  }), [user, isLoading])

  return (
    <AuthContext.Provider value={value}>
      {!isLoadingInitial && children}
    </AuthContext.Provider>
  );
}
