import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';
import ReadMore from '@fawazahmed/react-native-read-more';


const Post = (props) => {
  return (
    <View className="w-full flex flex-col py-3 shadow-2xl bg-[#E9F6FF]">
        {/* Header */}
        <View className='flex flex-row justify-between px-3 mb-2'>
            <View className='flex flex-row items-center'>
                <Image 
                    source={{uri: props.profileImageSource}}
                    className='aspect-square h-12 rounded-full'
                />
                <Text className='pl-3 text-lg font-bold'>{props.author}</Text>
            </View>

            <TouchableOpacity
                className='flex-row self-center items-center rounded-lg h-9 px-3 py-0 bg-[#3652AD]'
            >
                <Text className='p-0 m-0 text-white'>Safe post</Text>
            </TouchableOpacity>
        </View>

        {/* Photo */}
        <TouchableWithoutFeedback>
            <Image
                source={{uri: props.imageSource}}
                className='aspect-square'
            />
        </TouchableWithoutFeedback>

        {/* Review */}
        <View className='flex flex-row gap-3 justify-between pt-1 px-3'>
            <Text className='self-center text-lg'>
                {props.score.toFixed(1)} score
            </Text>
            <View className='flex flex-row grow justify-center'>
                <Ionicons name="star-outline" color='#000' size={30}/>
                <Ionicons name="star-outline" color='#000' size={30}/>
                <Ionicons name="star-outline" color='#000' size={30}/>
                <Ionicons name="star-outline" color='#000' size={30}/>
                <Ionicons name="star-outline" color='#000' size={30}/>
            </View>
            <Text className='self-center text-lg'>
                {props.votes} votes
            </Text>
        </View>

        {/* Description */}
        <View className='px-3 pt-1'>
            <ReadMore numberOfLines={3} style={{textAlign: 'justify'}}>
                {props.description}
            </ReadMore>
        </View>

        {/* Comments */}
        <View>

        </View>

        {/* Footer */}
        <View className='pt-2'>
            <Text className='text-center font-bold'>{props.time}</Text>
        </View>
    </View>
  )
}

export default Post