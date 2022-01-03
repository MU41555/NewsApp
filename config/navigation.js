
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screen/signin';
import SignUp from '../screen/signup';
import Dashboard from '../screen/dashboard';

const Stack = createNativeStackNavigator();

function AppNavigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown : false}} name="Dashboard" component={Dashboard} />
        <Stack.Screen options={{headerShown : false}} name="SignIn" component={SignIn} />
        <Stack.Screen options={{headerShown : false}} name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigate;