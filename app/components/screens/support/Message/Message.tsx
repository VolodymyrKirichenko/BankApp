import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { FC } from 'react';
import { IMessage } from '../../../../typedefs/typedefs';
import { useAuth } from '../../../../hooks/useAuth';

interface Props {
  message: IMessage,
}

export const Message: FC<Props> = (props) => {
  const { message } = props;

  const { user } = useAuth();

  const isMessageByAuthUser = user?.uid === message.userId;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isMessageByAuthUser ? '#4299e1' : '#edf2f7' },
        { alignSelf: isMessageByAuthUser ? 'flex-end' : 'flex-start' },
      ]}
    >
      <Text
        style={{ color: isMessageByAuthUser ? 'white' : '#2d3748' }}
      >
        {message.text}
      </Text>

      <Text
        style={[
          styles.time,
          { color: isMessageByAuthUser ? '#edf2f7' : '#4a5568' }
        ]}
      >
        {message.timestamp}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderRadius: 8,
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  time: {
    opacity: 0.7,
    marginLeft: 2,
    fontSize: 10
  }
})
