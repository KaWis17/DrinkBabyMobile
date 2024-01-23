import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import useAuth from '../firebase/AuthProvider'
import { View, Text } from 'react-native';

const BottomNavigation = () => {

    const Navigation = createBottomTabNavigator();
    const { user } = useAuth();

    console.log(user);
    return (
       <>
            {user ? (

                <View className='flex-1 justify-center items-center'>
                    <Text>{user}</Text>
                </View>

            ) : (

                <View className='flex-1 justify-center items-center'>
                    <Text>Niezalogowany</Text>
                </View>

            )}
       </>
    )
}

export default BottomNavigation