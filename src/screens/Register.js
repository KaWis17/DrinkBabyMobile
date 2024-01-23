import { SafeAreaView, Text, Button } from 'react-native'
import React from 'react'

const Register = ( { navigation }) => {
  return (
    <SafeAreaView>
      <Text>Register</Text>
      <Button
        title='Go to login'
        onPress={() => navigation.navigate('Login')}
      />
    </SafeAreaView>
  )
}

export default Register