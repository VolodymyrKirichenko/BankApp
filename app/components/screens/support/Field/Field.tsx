import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert
} from 'react-native';
import { useAuth } from '../../../../hooks/useAuth';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { collection } from '@firebase/firestore';
import { db } from '../../../../utils/firebase';

export const Field = () => {
  const { user } = useAuth();
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    try {
      await addDoc(collection(db, 'messages'), {
        timestamp: serverTimestamp(),
        userId: user?.uid,
        text: message,
      })

    } catch (error: any) {
      Alert.alert('Error add new message', error.message)
    }

    setMessage('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter your message'
        onChangeText={setMessage}
        value={message}
        showSoftInputOnFocus={false}
        autoCapitalize='none'
        style={styles.input}
      />

      <Pressable onPress={handleSendMessage}>
        <MaterialCommunityIcons
          name='send-circle-outline'
          size={42}
          style={styles.icon}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
    bottom: 40
  },
  input: {
    backgroundColor: '#f7fafc',
    borderRadius: 16,
    padding: 12,
    width: '83.333333%',
    height: 40,
  },
  icon: {
    color: '#A7F3D0',
  }
})
