import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import useAuth from '../firebase/AuthProvider'
import { View, Text } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Summary from '../screens/Summary';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const BottomNavigation = () => {

    const Navigation = createBottomTabNavigator();
    const { user } = useAuth();

    return (
       <>
            {user ? (
                <Navigation.Navigator 
                    screenOptions={{headerShown: false}} 
                    initialRouteName="Home"
                >
                    <Navigation.Screen
                        name='Summary'
                        component={Summary}
                        options={{tabBarIcon: ({ color, size }) => (<Ionicons name="albums-outline" color={color} size={size} />)}}
                    />

                    <Navigation.Screen
                        name='Home'
                        component={Home}
                        options={{tabBarIcon: ({ color, size }) => (<Ionicons name="home-outline" color={color} size={size} />)}}
                    />

                    <Navigation.Screen
                        name='Profile'
                        component={Profile}
                        options={{tabBarIcon: ({ color, size }) => (<Ionicons name="person-outline" color={color} size={size} />)}}
                    />
                </Navigation.Navigator>
            ) : (
                <View className='flex-1 justify-center items-center'>
                    <Text>Niezalogowany</Text>
                </View>
            )}
       </>
    )
}

export default BottomNavigation