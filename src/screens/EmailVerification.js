import { Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import useAuth from '../firebase/AuthProvider'

const EmailVerification = () => {

  const { logout } = useAuth();
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text>EmailVerification</Text>

      <Button
        title='logout'
        onPress={() => logout()}
      />
    </SafeAreaView>
  )
}

export default EmailVerification