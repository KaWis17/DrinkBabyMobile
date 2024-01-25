import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import useAuth from '../firebase/AuthProvider'

import Header from '../components/Header'
import Loader from '../components/Loader'
import { getUserData } from '../firebase/queries/UserQueries'
import ProfileHeader from '../components/profile/ProfileHeader'

const Profile = () => {

    const { user } = useAuth();
    const [userData, setUserData] = useState();

    useEffect(() => {
        getUserData(user.uid, setUserData);
    }, [])

    return (
        <>
            <Header text='Profile' icon='exit-outline'/>

            {
                (userData) ? (
                    <ScrollView>
                        <ProfileHeader
                            user = {user.uid}
                            fullName = {userData.fullName}
                            userImage = {userData.imageUri}
                            friends = {15}
                            likes = {96}
                        />

                        <View className='border-b-2 border-gray-600'/>

                    </ScrollView>
                ) : (
                    <Loader />
                )
            }

        </>
        
    )
}

export default Profile