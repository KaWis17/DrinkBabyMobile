import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import useAuth from '../firebase/AuthProvider'


import Header from '../components/Header'
import Loader from '../components/Loader'
import { getUserData } from '../firebase/UserQueries'
import UserProfile from '../components/profile/UserProfile'

const Profile = () => {

    const { user } = useAuth();
    const [userData, setUserData] = useState();

    useEffect(() => {getUserData(user.uid, setUserData);}, [])

    return (
        <>
            <Header text='Profile' icon='exit-outline'/>

            {
                (userData) ? (
                    <ScrollView>
                        <UserProfile
                            fullName = {userData.fullName}
                            userImage = {"https://scontent.fsvq4-1.fna.fbcdn.net/v/t39.30808-6/360086319_3683278515233971_4867496317066971572_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=PVQXhirZTi4AX-WsOGa&_nc_ht=scontent.fsvq4-1.fna&oh=00_AfCmk8_N-8IPfxJ5tEAR-0xgjIOvszOFh8FwODth4J9WlQ&oe=65B74769"}
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