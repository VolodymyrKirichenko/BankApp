import { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/useAuth';
import { Auth } from '../components/screens/auth/Auth';
import { Services } from '../components/screens/services/Services';
import { More } from '../components/screens/more/More';
import { Support } from '../components/screens/support/support';
import { Payments } from '../components/screens/payments/Payments';

const Stack = createStackNavigator();

export const Navigation: FC = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
            <>
              <Stack.Screen name='Auth' component={Auth} />
              <Stack.Screen name='Payments' component={Payments} />
              <Stack.Screen name='Services' component={Services} />
              <Stack.Screen name='Support' component={Support} />
              <Stack.Screen name='More' component={More} />
            </>
          ) : (
          <Stack.Screen name='Auth' component={Auth} />
        )
      }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
