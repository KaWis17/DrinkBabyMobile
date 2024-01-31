import { View, Text, Keyboard, Platform, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, SafeAreaView } from 'react-native'
import React, { useRef, useState } from 'react'
import useAuth from '../../firebase/AuthProvider';
import Button from '../../components/Button';



const Register = ( { navigation }) => {

  const { signUpWithEmail } = useAuth();

  const [fullName, setFullName] = useState('');
  const [fullNameInputSelected, setFullNameInputSelected] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordInputSelected, setPasswordInputSelected] = useState(false);

  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [passwordRepeatInputSelected, setPasswordRepeatInputSelected] = useState(false);

  const [email, setEmail] = useState('');
  const [emailInputSelected, setEmailInputSelected] = useState(false);

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();

  const registerButton = new Button('Register', () => signUpWithEmail(email, password, passwordRepeat, fullName) , 'full-button')
  const goBackToLoginButton = new Button('Go back to login', () => navigation.navigate("Login") , 'border-button')


  return (
    <SafeAreaView className='h-full flex flex-col justify-between bg-[#E9F6FF]'>
    {/* Keyboard Avoiding*/}
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className='grow'
      >

        <View className='flex-1 flex flex-col'>
          {/* Register */}
          <View className='flex grow flex-col gap-4 items-center justify-center'>
            
            {/* FullName Input */}
            <View 
              className={`w-5/6 flex justify-center bg-white px-4 h-12 rounded-lg border-2
                          ${(fullNameInputSelected ? 'border-[#3652AD]' : 'border-white')}`}
            >
              {
                (fullName !== '' || fullNameInputSelected) ? (
                  <Text className='text-sm text-[#808080] pt-1'>Full name</Text>
                ) : (
                  <></>
                )
              }

              <TextInput
                onFocus={() => setFullNameInputSelected(true)}
                onBlur={() => setFullNameInputSelected(false)}
                value={fullName}
                onChangeText={(text) => setFullName(text)}
                placeholder={(fullName === '' && !fullNameInputSelected)  ? 'Full name' : ''}
                autoCapitalize='words'
                autoComplete='off'
                autoCorrect={false}
                inputMode='search'
                placeholderTextColor='#808080'
                ref={firstInput}
                onSubmitEditing={() => secondInput.current.focus()}
                textContentType='oneTimeCode'
                className={`grow w-full ${(fullName !== '' || fullNameInputSelected) ? 'mb-2' : ''}`}                  
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
                onSubmitEditing={() => thirdInput.current.focus()}
                textContentType='oneTimeCode'
                className={`grow w-full ${(password !== '' || passwordInputSelected) ? 'mb-2' : ''}`}                  
              />
              
            </View>


            {/* PasswordRepeat Input */}
            <View 
              className={`w-5/6 flex justify-center bg-white px-4 h-12 rounded-lg border-2
                          ${(passwordRepeatInputSelected ? 'border-[#3652AD]' : 'border-white')}`}
            >
              {
                (passwordRepeat !== '' || passwordRepeatInputSelected) ? (
                  <Text className='text-sm text-[#808080] pt-1'>Password repeat</Text>
                ) : (
                  <></>
                )
              }

              <TextInput
                onFocus={() => setPasswordRepeatInputSelected(true)}
                onBlur={() => setPasswordRepeatInputSelected(false)}
                value={passwordRepeat}
                onChangeText={(text) => setPasswordRepeat(text)}
                placeholder={(passwordRepeat === '' && !passwordRepeatInputSelected) ? 'Password repeat' : ''}
                placeholderTextColor='#808080'
                autoCapitalize='none'
                secureTextEntry={true}
                ref={thirdInput}
                onSubmitEditing={() => fourthInput.current.focus()}
                textContentType='oneTimeCode'
                className={`grow w-full ${(passwordRepeat !== '' || passwordRepeatInputSelected) ? 'mb-2' : ''}`}                  
              />
              
            </View>


            {/* Email Input */}
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
                ref={fourthInput}
                onSubmitEditing={() => {signUpWithEmail(email, password, passwordRepeat, fullName); Keyboard.dismiss}}
                textContentType='oneTimeCode'
                className={`grow w-full ${(email !== '' || emailInputSelected) ? 'mb-2' : ''}`}                  
              />
              
            </View>

            {registerButton.render()}
          </View>
        </View>

      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>

    <View className='pb-8 flex flex-col items-center'>
        {goBackToLoginButton.render()}
        <Text className='pt-3'>Created by Krzysztof Wiśniewski</Text>
      </View>

  </SafeAreaView>
  )
}

export default Register