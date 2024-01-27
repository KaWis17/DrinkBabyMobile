import { View, Text, ScrollView , TextInput} from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'

const Search = () => {

  const [input, setInput] = useState('');
  const [inputSelected, setInputSelected] = useState(false)
  return (
    <ScrollView>
      
      <Header text='Search' icon='person-outline'/>

      <View className='flex flex-col'>
        <View 
          className={` mt-12 w-5/6 flex justify-center self-center bg-white px-4 h-12 rounded-lg border-2
                      ${(inputSelected ? 'border-[#3652AD]' : 'border-white')}`}
        >
          {
            (input !== '' || inputSelected) ? (
              <Text className='text-sm text-[#808080] pt-1'>Search for posts...</Text>
            ) : (
              <></>
            )
          }

          <TextInput
            onFocus={() => setInputSelected(true)}
            onBlur={() => setInputSelected(false)}
            value={input}
            onChangeText={(text) => setInput(text)}
            placeholder={(input === '' && !inputSelected)  ? 'Search for posts...' : ''}
            autoCapitalize='sentences'
            autoCorrect={true}
            inputMode='search'
            placeholderTextColor='#808080'
            onSubmitEditing={() => console.log('search')}
            className={`grow w-full ${(input !== '' || inputSelected) ? 'mb-2' : ''}`}                  
          />
          
        </View>
      </View>
    </ScrollView>
  )
}

export default Search