import { View, ActivityIndicator } from 'react-native'
import React from 'react'

const Loader = () => {
  return (
    <View className='flex-1 items-center justify-center'>
        <ActivityIndicator className='self-center' size='large'/>
    </View>
  )
}

export default Loader