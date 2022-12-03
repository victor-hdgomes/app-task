import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'
import NewTask from '../pages/NewTask'
import Details from '../pages/Details'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: "To Do", headerTintColor: '#00E0FF', headerStyle: {backgroundColor: '#222222'} }} />
        <Stack.Screen name="New Task" component={NewTask} options={{ title: "New Task", headerTintColor: '#00E0FF', headerStyle: {backgroundColor: '#222222'} }} />
        <Stack.Screen name="Details" component={Details} options={{ title: "Details", headerTintColor: '#00E0FF', headerStyle: {backgroundColor: '#222222'} }} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}