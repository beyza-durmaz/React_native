import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Categories' component={Categories} options={{
          headerTitleStyle: {color: 'orange'},
          headerTitleAlign: 'center'
        }}/>
        <Stack.Screen name='Meals' component={Meals} options={{
          headerTitleStyle: {color: 'orange'},
          headerTitleAlign: 'center',
          headerTintColor: 'orange',
        }}/>
        <Stack.Screen name='Detail' component={Detail} options={{
          headerTintColor: 'orange',
          headerTitleStyle: {color: 'orange'},
          headerTitleAlign: 'center'
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;