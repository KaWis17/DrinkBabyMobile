import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity, ViewComponent } from 'react-native'
import React, { useState } from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';
import ReadMore from '@fawazahmed/react-native-read-more';

const Post = ({item}) => {


  return (
    <View className='pb-3 px-2'>
        <View className="w-full flex flex-col py-3 shadow-2xl bg-[#E9F6FF]">
            {/* Header */}
            <View className='flex flex-row justify-between px-3 mb-2'>
                <View className='flex flex-row items-center'>
                    
                      {
                        ((item.authorImageURL)) &&
                        <Image 
                            source={{uri: item.authorImageURL}}
                            className='aspect-square h-12 rounded-full'
                        />
                        
                      }
                        
            
                    
                    <Text className='pl-3 text-lg font-bold'>{item.author}</Text>
                </View>

                <TouchableOpacity
                    className='flex-row self-center items-center rounded-lg h-9 px-3 py-0 bg-[#3652AD]'
                >
                    <Text className='p-0 m-0 text-white'>Safe post</Text>
                </TouchableOpacity>
            </View>

            {/* Photo */}
            {
                (!(item.imageURL === "none")) ? (
                    <TouchableWithoutFeedback>
                        <Image
                            source={{uri: item.imageURL}}
                            className='aspect-square'
                        />
                    </TouchableWithoutFeedback>
                ) : (
                    <Text className='text-lg p-3 text-justify'>
                        {item.text}
                    </Text>
                )
            }
           

            {/* Review */}
            <View className='flex flex-row gap-3 justify-between pt-1 px-3'>
                <Text className='self-center text-lg'>
                    {item.score} score
                </Text>
                <View className='flex flex-row grow justify-center'>
                    <Ionicons name="star-outline" color='#000' size={30}/>
                    <Ionicons name="star-outline" color='#000' size={30}/>
                    <Ionicons name="star-outline" color='#000' size={30}/>
                    <Ionicons name="star-outline" color='#000' size={30}/>
                    <Ionicons name="star-outline" color='#000' size={30}/>
                </View>
                <Text className='self-center text-lg'>
                    {item.votes} votes
                </Text>
            </View>

            {/* Description */}
            {
                (!(item.imageURL === "none")) ? (
                    <View className='px-3 pt-3'>
                        <ReadMore numberOfLines={3} style={{textAlign: 'justify'}}>
                            {item.text}
                        </ReadMore>
                    </View>
                ) : (
                    <></>
                )
            }

            {/* Comments */}
            <View>

            </View>

            {/* Footer */}
            <View className='pt-2'>
            </View>
        </View>

    </View>
  )
}

export default Post