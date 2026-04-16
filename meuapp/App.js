import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './src/Screens/HomeScreen';
import CalculadoraScreen from './src/Screens/CalculadoraScreen';
import ImagemScreen from './src/Screens/ImagemScreen';
import AdvicesScreen from './src/Screens/AdvicesScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="CalculadoraScreen" component={CalculadoraScreen} />
        <Drawer.Screen name="ImagemScreen" component={ImagemScreen} />
        <Drawer.Screen name="AdvicesScreen" component={AdvicesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}