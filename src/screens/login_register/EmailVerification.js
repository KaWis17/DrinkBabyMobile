import { Text, SafeAreaView, TouchableOpacity, View } from 'react-native'
import React from 'react'
import useAuth from '../../firebase/AuthProvider'

const EmailVerification = () => {

  const { user, logout } = useAuth();
  const B = (props) => <Text className="font-bold text-lg">{props.children}</Text>
  
  return (
    <SafeAreaView className='h-full flex flex-col justify-between bg-[#E9F6FF]'>
       
      <View className='grow flex flex-col'>
        {/* Logo */}
        <View className='mt-24'>
          <Text className='text-center text-[#FE7A36] text-5xl font-bold'>DrinkBaby!</Text>
        </View>

        {/* Text */}
        <View className='flex grow flex-col items-center justify-center gap-4 px-8'>
          <Text className='text-2xl text-center'>Congrats {user.displayName}!</Text>
          <Text className='text-lg text-center'>
            Your account has been created. {"\n"}
            Verify your email address:{"\n"}
            (<B>{user.email}</B>){"\n"}
             and log in again to start using an app!
          </Text>
        </View>
      </View>


      {/* Create account and footer */}
      <View className='pb-8 flex flex-col items-center'>
        {/* Register button */}
        <TouchableOpacity
          onPress={() => logout()}
          className='w-5/6 p-3 rounded-full border-[#3652AD] border-2'
        >
          <Text className='text-center text-[#3652AD]'>Log out</Text>
        </TouchableOpacity>

        {/* Footer text */}
        <Text className='pt-3'>Created by Krzysztof Wiśniewski</Text>
      </View>
    </SafeAreaView>
  )
}



export default EmailVerification