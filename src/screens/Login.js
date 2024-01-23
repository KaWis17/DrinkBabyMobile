import { SafeAreaView, Text, Button } from 'react-native'
import React from 'react'
import useAuth from '../firebase/AuthProvider'

const Login = ({ navigation }) => {

  const { signInWithEmail } = useAuth();
  return (
    <SafeAreaView>
      <Text>Login</Text>

      <Button
        title='Login'
        onPress={() => signInWithEmail("krzymado@gmail.com", "test123")}
      />

      <Button
        title='Go to register'
        onPress={() => navigation.navigate('Register')}
      />
    </SafeAreaView>
  )
}

export default Login