import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { changeProfilePicture } from '../../firebase/queries/UserQueries'
import Loader from '../Loader'

const ProfileHeader = (props) => {
  return (
    <View className='flex flex-col py-5'>
        <Text className='text-center text-2xl'>{props.fullName}</Text>
        <View className='flex flex-row justify-center p-5'>

            <View className='flex-1 flex items-center'>
                {
                    (!props.imageIsLoading) ? (
                        <Image
                            source={(props.userImage) ? {uri: props.userImage} : {uri: 'https://avatar.iran.liara.run/public/boy?username=Ash'}}
                            className='w-full aspect-square rounded-3xl'
                        />
                    ) : (
                        <Loader />
                    )
                }
            </View>

            <View className='flex-1 flex-col items-center justify-center '>
                <Text className='text-5xl'>{props.friends}</Text>
                <Text className='text-center'>Friends</Text>
            </View>

            <View className='flex-1 flex-col items-center justify-center'>
                <Text className='text-5xl'>{props.likes}</Text>
                <Text className='text-center'>Likes</Text>
            </View>
    
        </View>

        <View className='flex flex-row justify-around'>
            <TouchableOpacity 
                className='rounded-xl bg-[#3652AD] p-2'
                onPress={async () => {
                    await changeProfilePicture(props.user);
                }}
            >
                <Text className='text-white'>Change profile image</Text>
            </TouchableOpacity>

            <TouchableOpacity className='rounded-xl bg-[#3652AD] p-2'>
                <Text className='text-white'>Share profile</Text>
            </TouchableOpacity>
        </View>
      
    </View>
  )
}

export default ProfileHeader