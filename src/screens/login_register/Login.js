import { View, Text, Keyboard, Platform, TextInput, Alert, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, SafeAreaView } from 'react-native'
import React, { useRef, useState } from 'react'
import useAuth from '../../firebase/AuthProvider'

const Login = ({ navigation }) => {

  const { signInWithEmail } = useAuth();

  const [email, setEmail] = useState('');
  const [emailInputSelected, setEmailInputSelected] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordInputSelected, setPasswordInputSelected] = useState(false);

  const firstInput = useRef();
  const secondInput = useRef();

  return (

    <SafeAreaView className='h-full flex flex-col justify-between bg-[#E9F6FF]'>
      {/* Keyboard Avoiding*/}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className='grow'
        >

          <View className='flex-1 flex flex-col'>
            {/* Logo */}
            <View className='mt-24'>
              <Text className='text-center text-[#FE7A36] text-5xl font-bold'>DrinkBaby!</Text>
            </View>

            {/* Login */}
            <View className='flex grow flex-col items-center justify-center gap-4'>
              {/* Login Input */}
              <View 
                className={`w-5/6 flex justify-center bg-white px-4 h-12 rounded-lg border-2
                            ${(emailInputSelected ? 'border-[#3652AD]' : 'border-white')}`}
              >
                {
                  (email !== '' || emailInputSelected) ? (
                    <Text className='text-sm text-[#808080] pt-1'>Email address</Text>
                  ) : (
                    <></>
                  )
                }

                <TextInput
                  onFocus={() => setEmailInputSelected(true)}
                  onBlur={() => setEmailInputSelected(false)}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  placeholder={(email === '' && !emailInputSelected)  ? 'Email address' : ''}
                  autoCapitalize='none'
                  autoComplete='off'
                  autoCorrect={false}
                  inputMode='email'
                  placeholderTextColor='#808080'
                  ref={firstInput}
                  onSubmitEditing={() => secondInput.current.focus()}
                  textContentType='oneTimeCode'
                  className={`grow w-full ${(email !== '' || emailInputSelected) ? 'mb-2' : ''}`}                  
                />
                
              </View>
                
              {/* Password Input */}
              <View 
                className={`w-5/6 flex justify-center bg-white px-4 h-12 rounded-lg border-2
                            ${(passwordInputSelected ? 'border-[#3652AD]' : 'border-white')}`}
              >
                {
                  (password !== '' || passwordInputSelected) ? (
                    <Text className='text-sm text-[#808080] pt-1'>Password</Text>
                  ) : (
                    <></>
                  )
                }

                <TextInput
                  onFocus={() => setPasswordInputSelected(true)}
                  onBlur={() => setPasswordInputSelected(false)}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  placeholder={(password === '' && !passwordInputSelected) ? 'Password' : ''}
                  placeholderTextColor='#808080'
                  autoCapitalize='none'
                  secureTextEntry={true}
                  ref={secondInput}
                  onSubmitEditing={() => {if(email!=="" && password!=="")signInWithEmail(email, password)}}
                  textContentType='oneTimeCode'
                  className={`grow w-full ${(password !== '' || passwordInputSelected) ? 'mb-2' : ''}`}                  
                />
                
              </View>

              {/* Login button */}
              <TouchableOpacity
                onPress={() => signInWithEmail(email, password)}
                className='w-5/6 p-3 rounded-full bg-[#3652AD]'
              > 
                <Text className='text-white text-center font-bold'>Log In</Text>
              </TouchableOpacity>

              {/* Forgot password button */}
              <TouchableOpacity
                onPress={() => Alert.alert("To be added", "Nie mam na to czasu...")}
              >
                <Text>Forgotten Password?</Text>
              </TouchableOpacity>
            </View>
          </View>

        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

      {/* Create account and footer */}
      <View className='pb-8 flex flex-col items-center'>
        {/* Register button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          className='w-5/6 p-3 rounded-full border-[#3652AD] border-2'
        >
          <Text className='text-center text-[#3652AD]'>Create new account</Text>
        </TouchableOpacity>

        {/* Footer text */}
        <Text className='pt-3'>Created by Krzysztof Wiśniewski</Text>
      </View>
    </SafeAreaView>
  )
}

export default Login