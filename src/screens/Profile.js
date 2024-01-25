import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import useAuth from '../firebase/AuthProvider'


import Header from '../components/Header'
import Loader from '../components/Loader'
import { getUserData } from '../firebase/UserQueries'

const Profile = () => {

    const { user } = useAuth();
    const [userData, setUserData] = useState();

    useEffect(() => {getUserData(user.uid, setUserData);}, [])

    return (
        <>
            <Header text='Profile' icon='exit-outline'/>
        
            {
                (userData) ? (
                    <View>
                        <Text>{userData.fullName}</Text>
                    </View>
                ) : (
                    <Loader />
                )
            }

        </>
        
    )
}

export default Profile