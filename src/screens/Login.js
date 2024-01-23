import { SafeAreaView, Text, Button } from 'react-native'
import React from 'react'
import useAuth from '../firebase/AuthProvider'

const Login = ({ navigation }) => {

  const { setUser } = useAuth();
  return (
    <SafeAreaView>
      <Text>Login</Text>

      <Button
        title='Login'
        onPress={() => setUser("krzysztof")}
      />

      <Button
        title='Go to register'
        onPress={() => navigation.navigate('Register')}
      />
    </SafeAreaView>
  )
}

export default Login