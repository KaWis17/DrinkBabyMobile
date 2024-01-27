import { View, Text, TouchableOpacity, TextInput, Image, NativeModules, useAnimatedValue, ScrollView } from 'react-native'
import React, { useState } from 'react'

import Header from '../components/Header'
import { createPostInFirestore } from '../firebase/queries/PostQueries'
import useAuth from '../firebase/AuthProvider'

import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from 'react-native-safe-area-context'


const AddPost = ( {navigation} ) => {

  const [input, setInput] = useState("")
  const [inputSelected, setInputSelected] = useState('')

  const { user } = useAuth();

  const [imageLink, setImageLink] = useState(false);

  async function addingPhoto() {
    setImageLink(await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.15
    }));

  }

  return (

    <View className='h-full'>
      <Header text='Add post' icon='person-outline'/>

      <ScrollView className='flex flex-col grow '>

        <View 
            className={` mt-12 w-5/6 flex justify-center self-center bg-white px-4 h-64 rounded-lg border-2
                        ${(inputSelected ? 'border-[#3652AD]' : 'border-white')}`}
          >
            {
              (input !== '' || inputSelected) ? (
                <Text className='text-sm text-[#808080] pt-1'>Write a post</Text>
              ) : (
                <></>
              )
            }

            <TextInput
              onFocus={() => setInputSelected(true)}
              onBlur={() => setInputSelected(false)}
              value={input}
              onChangeText={(text) => setInput(text)}
              placeholder={(input === '' && !inputSelected)  ? 'Write a post...' : ''}
              autoCapitalize='sentences'
              multiline={true}
              autoCorrect={true}
              inputMode='search'
              placeholderTextColor='#808080'
              onSubmitEditing={() => console.log('search')}
              maxLength={500}
              className={`grow w-full text-justify ${(input !== '' || inputSelected) ? 'mb-2' : ''}`}                  
            />
            
          </View>

            {(imageLink) && ( <Image source={{uri: imageLink.assets[0].uri}} className='aspect-square w-full' />
)}
         

          <TouchableOpacity
            onPress={() => addingPhoto()}
            className='w-5/6 self-center p-3 mt-12 rounded-full border-[#3652AD] border-2'
          >
            <Text className='text-center text-[#3652AD]'>Add photo</Text>
          </TouchableOpacity>

          
          <TouchableOpacity
            onPress={() => {
              if(imageLink)
                createPostInFirestore(user.uid, input, imageLink.assets[0].uri);
              else
                createPostInFirestore(user.uid, input, false);

              setInput("")
              setImageLink(false)

              navigation.navigate("Home");
            }}
            className='w-5/6 self-center p-3 mt-16 h-12 rounded-full justify-center bg-[#3652AD]'
          > 
              <Text className='text-white text-center font-bold'>Upload post</Text>
          </TouchableOpacity>
          
      </ScrollView>

    </View>
  )
}

export default AddPost