import { View, Text, Keyboard, Platform, Alert, KeyboardAvoidingView, TouchableWithoutFeedback, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import useAuth from '../../firebase/AuthProvider'
import Button from '../../components/Button';
import Input from '../../components/Input';

const Login = ({ navigation }) => {

  const { signInWithEmail } = useAuth();

  const [email, setEmail] = useState('');
  const [emailInputSelected, setEmailInputSelected] = useState(false);
  const loginInput = new Input("Email address", email, setEmail, emailInputSelected, setEmailInputSelected, null, 'email');

  const [password, setPassword] = useState('');
  const [passwordInputSelected, setPasswordInputSelected] = useState(false);
  const passwordInput = new Input("Password", password, setPassword, passwordInputSelected, setPasswordInputSelected, null, 'password');

  const loginButton = new Button("Login", () => signInWithEmail(email, password), 'full-button');
  const forgotPasswordButton = new Button("Forgotten Password?", () => Alert.alert("To be added..."), 'basic-button');
  const registerButton = new Button("Register", () => navigation.navigate("Register"), 'border-button');

  return (

    <SafeAreaView className='h-full flex flex-col justify-between bg-[#E9F6FF]'>
      {/* Keyboard Avoiding*/}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className='grow'
        >

          <View className='flex-1 flex flex-col'>
            
            <View className='mt-24'>
              <Text className='text-center text-[#FE7A36] text-5xl font-bold'>DrinkBaby!</Text>
            </View>

            <View className='flex grow flex-col items-center justify-center gap-4'>

              {loginInput.render()}
                
              {passwordInput.render()}

              {loginButton.render()}

              {forgotPasswordButton.render()}

            </View>

          </View>

        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

      <View className='pb-8 flex flex-col items-center'>
        {registerButton.render()}
        <Text className='pt-3'>Created by Krzysztof Wiśniewski</Text>
      </View>

    </SafeAreaView>
  )
}

export default Login