import { View, Text, Button } from 'react-native'
import React from 'react'
import useAuth from '../firebase/AuthProvider'

import Header from '../components/Header'

const Profile = () => {

    const { user, logout } = useAuth();

    return (
        <View flex flex-col justify-between h-screen>
            <Header />
            {user ? (
                <>
                    <Text>{user.displayName}</Text>

                    <Button
                        title='LogOut'
                        onPress={() => logout()}
                    />
                </>
                
            ) : (
                <Text>Not logged in</Text>
            )}
        </View>
    )
}

export default Profile