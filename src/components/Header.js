import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';
import useAuth from '../firebase/AuthProvider';


const Header = (props) => {

    const { logout } = useAuth();

    return (
        <View className='bg-[#3652AD]'>
            <SafeAreaView className='flex flex-row justify-start'>
                <View className='flex grow p-3 pl-5'>
                    <Text className='text-3xl text-white'>{props.text}</Text>
                </View>
                
                <TouchableOpacity 
                    className='flex-row aspect-square justify-center items-center'
                    onPress={() => logout()}
                >
                    <Ionicons name={props.icon} color='#FFF' size={30}/>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

export default Header