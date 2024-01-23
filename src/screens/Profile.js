import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import useAuth from '../firebase/AuthProvider'

const Profile = () => {

    const { user } = useAuth();

    return (
        <SafeAreaView className='flex-1 items-center justify-center'>
            <Text>{user}</Text>
        </SafeAreaView>
    )
}

export default Profile