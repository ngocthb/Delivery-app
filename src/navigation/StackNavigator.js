import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GetStarted from '~/screens/GetStarted';
import Login from '~/screens/Login';
import Register from '~/screens/Register';
import HomePage from '~/screens/HomePage';
import Restaurant from '~/screens/Restaurants';
import OrderPrepare from '~/screens/OrderPrepare';
import Delivery from '~/screens/Delivery';
import Address from '~/screens/Address';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
      <Stack.Screen name="OrderPrepare" component={OrderPrepare} />
      <Stack.Screen name="Delivery" component={Delivery} />
      <Stack.Screen name="Address" component={Address} />
    </Stack.Navigator>
  );
}
