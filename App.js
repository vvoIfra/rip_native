import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShipListScreen from './screens/Ship_List';
import ShipScreen from './screens/Ship'
import { store } from './store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();
//<Stack.Screen name='Информация о товаре' component={ProductScreen} />
export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Список типов кораблей' component={ShipListScreen} />
                    <Stack.Screen name='Информация о корабле' component={ShipScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}