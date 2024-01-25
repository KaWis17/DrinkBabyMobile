import { View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const UserProfile = (props) => {
  return (
    <View className='flex flex-col py-5'>
        <Text className='text-center text-2xl'>{props.fullName}</Text>
        <View className='flex flex-row justify-center p-5'>

            <View className='flex-1 flex items-center'>
                <Image
                    source={{uri: props.userImage}}
                    className='w-full aspect-square rounded-3xl'
                />
            </View>

            <View className='flex-1 flex-col items-center justify-center '>
                <Text className='text-5xl'>{props.friends}</Text>
                <Text>Friends</Text>
            </View>

            <View className='flex-1 flex-col items-center justify-center'>
                <Text className='text-5xl'>{props.likes}</Text>
                <Text>Likes</Text>
            </View>
    
        </View>

        <View className='flex flex-row justify-around'>
            <TouchableOpacity className='rounded-xl bg-[#3652AD] p-2'>
                <Text className='text-white'>Edit profile</Text>
            </TouchableOpacity>

            <TouchableOpacity className='rounded-xl bg-[#3652AD] p-2'>
                <Text className='text-white'>Share profile</Text>
            </TouchableOpacity>
        </View>
      
    </View>
  )
}

export default UserProfile