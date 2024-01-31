import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';
import useAuth from '../firebase/AuthProvider';


const Header = (props) => {

    const { logout } = useAuth();

    function button() {
        switch(props.text) {
            case "DrinkBaby" : 
                props.navigation.navigate("Profile")
                break;
            case "Friends" : 
                props.navigation.navigate("Profile")
                break;
            case "Add post" :
                props.navigation.navigate("Profile")
                break;
            case "Search" :
                props.navigation.navigate("Profile")
                break;
            case "Profile" :
                logout();
                break;
            default :
                props.navigation.navigate("Profile")
        }
    }

    return (
        <View className='bg-[#3652AD]/95  w-full z-50'>
            <SafeAreaView className='flex flex-row justify-start'>
                <View className='flex grow p-3 pl-5'>
                    <Text className='text-3xl text-white'>{props.text}</Text>
                </View>
                
                <TouchableOpacity 
                    className='flex-row aspect-square justify-center items-center'
                    onPress={() => button()}
                >
                    <Ionicons name={props.icon} color='#FFF' size={30}/>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

export default Header