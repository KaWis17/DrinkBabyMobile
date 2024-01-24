import { View, Text, Button } from 'react-native'
import React from 'react'
import useAuth from '../firebase/AuthProvider'

import Header from '../components/Header'

const Profile = () => {

    const { user, logout } = useAuth();

    return (
        <View>
            <Header text='Profile' />
        </View>
    )
}

export default Profile