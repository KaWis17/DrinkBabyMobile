import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const Drink = (props) => {

    const image = {uri: props.image}
  return (
    <View className={`shadow-lg max-w-sm min-w-sm h-64 w-64 rounded-lg border-transparent border-8 cursor-pointer self-center`}>
            <ImageBackground className='flex flex-col justify-end content-end h-full bg-cover'
                 source={image}>

                <View className="bg-white/70 p-2 w-full text-xl text-center self-end">

                    <Text className="text-3xl">{props.name}</Text>

                    <View className="flex flex-row justify-between">
                        <Text className="">{props.category}</Text>
                        <Text className="">{props.glass}</Text>
                    </View>
                   
                </View>
                
            </ImageBackground>    
        </View>
  )
}

export default Drink