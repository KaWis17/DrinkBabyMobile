import { SafeAreaView, Text, Button } from 'react-native'
import React from 'react'
import useAuth from '../firebase/AuthProvider'

const Profile = () => {

    const { user, logout } = useAuth();

    return (
        <SafeAreaView className='flex-1 items-center justify-center'>
            {user ? (
                <>
                    <Text>{user.email}</Text>

                    <Button
                        title='LogOut'
                        onPress={() => logout()}
                    />
                </>
                
            ) : (
                <Text>Not logged in</Text>
            )}
        </SafeAreaView>
    )
}

export default Profile