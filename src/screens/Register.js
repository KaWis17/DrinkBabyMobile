import { SafeAreaView, Text, Button } from 'react-native'
import React from 'react'

import useAuth from '../firebase/AuthProvider'


const Register = ( { navigation }) => {

  const { signUpWithEmail } = useAuth();
  return (
    <SafeAreaView>
      <Text>Register</Text>

      <Button
        title='Register'
        onPress={() => signUpWithEmail("krzymado@gmail.com", "test123", "test123")}
      />

      <Button
        title='Go to login'
        onPress={() => navigation.navigate('Login')}
      />

    </SafeAreaView>
  )
}

export default Register