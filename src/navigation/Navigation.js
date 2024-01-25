import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AddPost from '../screens/AddPost';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Login from '../screens/login_register/Login';
import Register from '../screens/login_register/Register';
import EmailVerification from '../screens/login_register/EmailVerification';

import useAuth from '../firebase/AuthProvider';
import Search from '../screens/Search';
import Friends from '../screens/Friends';

const Navigation = () => {

    const LoggedNavigation = createBottomTabNavigator();
    const NotLoggedNavigation = createNativeStackNavigator();

    const { user } = useAuth();

    return (
       <>
            { user ? (
                <>
                    {user.emailVerified ? (
                        <LoggedNavigation.Navigator 
                            screenOptions={{headerShown: false, tabBarShowLabel: false}} 
                            initialRouteName="Home"
                        >
                            <LoggedNavigation.Screen
                                name='Home'
                                component={Home}
                                options={{tabBarIcon: ({ color, size }) => (<Ionicons name="home-outline" color={color} size={size} />)}}
                            />

                            <LoggedNavigation.Screen
                                name='Friends'
                                component={Friends}
                                options={{tabBarIcon: ({ color, size }) => (<Ionicons name="people-outline" color={color} size={size} />)}}
                            />
    
                            <LoggedNavigation.Screen
                                name='AddPost'
                                component={AddPost}
                                options={{tabBarIcon: ({ color, size }) => (<Ionicons name="arrow-up-circle-outline" color={color} size={size} />)}}
                            />

                            <LoggedNavigation.Screen
                                name='Search'
                                component={Search}
                                options={{tabBarIcon: ({ color, size }) => (<Ionicons name="search-outline" color={color} size={size} />)}}
                            />
                
                            <LoggedNavigation.Screen
                                name='Profile'
                                component={Profile}
                                options={{tabBarIcon: ({ color, size }) => (<Ionicons name="person-outline" color={color} size={size} />)}}
                            />
        
                        </LoggedNavigation.Navigator>
                    ) : (
                        <EmailVerification />
                    )}
                </>
            ) : (
                <NotLoggedNavigation.Navigator 
                    screenOptions={{headerShown: false}} 
                    initialRouteName='Login'
                >

                    <NotLoggedNavigation.Screen
                        name="Login"
                        component={Login}
                    />
                    <NotLoggedNavigation.Group
                        screenOptions={{headerShown: true}} 
                    >
                        <NotLoggedNavigation.Screen
                            name="Register"
                            component={Register}
                        />
                    </NotLoggedNavigation.Group>

                </NotLoggedNavigation.Navigator>
            )}
       </>
    )
}

export default Navigation