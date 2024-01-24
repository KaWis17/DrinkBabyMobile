import { Text, Button, View } from 'react-native'
import React from 'react'
import useAuth from '../firebase/AuthProvider'

import Header from '../components/Header'

const EmailVerification = () => {

  const { user, logout } = useAuth();
  const B = (props) => <Text className="font-bold text-lg">{props.children}</Text>

  return (
    <View className='flex flex-col justify-between h-screen'>
      <Header />

      <View className='px-12'>
        <Text className='text-xl text-center pb-5'>
          Hello {user.displayName}!
        </Text>
        <Text className='text-center'>
          Your account has been created. {"\n"}
          Email verification has been sent to: {"\n"} <B>{user.email}</B> {"\n"}
          Confirm it and login into the app
        </Text>
      </View>

      <View className="pb-16">
        <Button
          title='Login again'
          onPress={() => logout()}
        />
      </View>
    </View>
  )
}



export default EmailVerification