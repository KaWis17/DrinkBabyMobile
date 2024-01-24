import { View, Text, Keyboard, Platform, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, SafeAreaView } from 'react-native'
import React, { useRef, useState } from 'react'
import useAuth from '../firebase/AuthProvider'

const Login = ({ navigation }) => {

  const { signInWithEmail } = useAuth();

  const [email, setEmail] = useState('');
  const [emailInputSelected, setEmailInputSelected] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordInputSelected, setPasswordInputSelected] = useState(false);

  const firstInput = useRef();
  const secondInput = useRef();
  const loginButton = useRef();

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
                    <Text className='text-sm text-[#808080] pt-1'>Email</Text>
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
                className='w-5/6 p-2 rounded-full bg-[#3652AD]'
                ref={loginButton}
              > 
                <Text className='text-white text-center font-bold'>Log In</Text>
              </TouchableOpacity>

              {/* Forgot password button */}
              <TouchableOpacity>
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
          className='w-5/6 p-2 rounded-full border-[#3652AD] border-2'
        >
          <Text className='text-center text-[#3652AD]'>Create new account</Text>
        </TouchableOpacity>

        {/* Footer text */}
        <Text className='pt-3'>Created by Krzysztof Wiśniewski</Text>
      </View>
    </SafeAreaView>


    /*
      <SafeAreaView className='flex flex-col justify-between h-full'>

        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className='flex-1 bg-blue-500'
        >

<TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
    >
          <View className='flex flex-col pt-32 gap-16 '>

            <View>
              <Text className='text-center text-3xl'>DrinkBaby!</Text>
            </View>
            
            <View className='flex bg-red-500 items-center gap-4'>
              <View className='w-5/6 bg-white p-4 rounded-lg'>
                <TextInput
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  placeholder='Email'
                  placeholderTextColor='#808080'
                />
              </View>
              
              <View className='w-5/6 bg-white p-4 rounded-lg'>
                <TextInput
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  placeholder='Password'
                  placeholderTextColor='#808080'
                />
              </View>

                          
              <TouchableOpacity
                onPress={() => signInWithEmail(email, password)}
                className='w-5/6 p-2 rounded-full bg-[#3652AD]'
              > 
                <Text className='text-white text-center font-bold'>Log In</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text>Forgotten Password?</Text>
              </TouchableOpacity>

            </View>
          </View>
          </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
       
        <View className="flex items-center mb-10">
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            className='w-5/6 p-2 rounded-full border-[#3652AD] border-2'
          >
            <Text className='text-center text-[#3652AD]'>Create new account</Text>
          </TouchableOpacity>

          <Text className='pt-3'>Created by Krzysztof Wiśniewski</Text>
        </View>

      </SafeAreaView>

      */
  )
}

export default Login