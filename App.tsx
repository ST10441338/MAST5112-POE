// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ChefsLoginScreen from './screens/ChefsLoginScreen';
import ViewMenuScreen from './screens/ViewMenuScreen';
import { DishProvider } from './context/DishContext';

const Stack = createStackNavigator();

const App: React.FC = () => (
  <DishProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ChefsLogin" component={ChefsLoginScreen} />
        <Stack.Screen name="ViewMenu" component={ViewMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </DishProvider>
);

export default App;
