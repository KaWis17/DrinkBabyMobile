import { Text, Button, View } from 'react-native'
import React, { useState } from 'react'

import InputText from '../components/InputText'

import useAuth from '../firebase/AuthProvider'


const Register = ( { navigation }) => {

  const { signUpWithEmail } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  return (
    <View className='flex flex-col justify-start h-full'>
      <Text className='text-center text-3xl p-16'>Join DrinkBaby today!</Text>

      <View>

        <InputText 
            getter={name}
            setter={setName}
            placeholder="Name..."
        />

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

        <InputText 
            getter={repeatPassword}
            setter={setRepeatPassword}
            placeholder="Repeat password..."
            isPassword={true}
        />

      </View>

      <Button
        title='Register'
        onPress={() => signUpWithEmail(email, password, repeatPassword, name)}
      />

    </View>
  )
}

export default Register