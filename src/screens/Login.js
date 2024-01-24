import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import useAuth from '../firebase/AuthProvider'

import Header from '../components/Header'
import InputText from '../components/InputText'

const Login = ({ navigation }) => {

  const { signInWithEmail } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View className='flex flex-col justify-between h-screen'>
      <Header />

      <View className='flex flex-col items-center bg-[#E9F6FF]'>
        <Text className='pb-16 text-center text-3xl'>Welcome to DrinkBaby!</Text>

        <InputText 
          getter={email}
          setter={setEmail}
          placeholder="Email..."
          isEmail={true}
        />

        <InputText 
          getter={password}
          setter={setPassword}
          placeholder="Password..."
          isPassword={true}
        />

        <Button
          title='Login'
          onPress={() => signInWithEmail(email, password)}
        />

      </View>

      <View className="pb-16">
        <Text className='text-xl text-center'>Don't have an account?</Text>
        <Button
          title='Register now'
          onPress={() => navigation.navigate('Register')}
        />
      </View>

    </View>
  )
}

export default Login