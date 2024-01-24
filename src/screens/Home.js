import { View, FlatList, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios';
import InputText from '../components/InputText';
import Drink from '../components/Drink';

const Home = () => {

  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
        .then(response => {
          if(response.data.drinks != null){
            setItems(response.data.drinks);
            console.log(items);
          }
          else
            setItems([]);
        })
        .catch(error => {
          console.error(error);
      });
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [input]);


  return (
        <SafeAreaView
          className='flex flex-col'
        >
          <Header />

        <ScrollView>

          <View className="pt-6">
            <InputText
              getter={input}
              setter={setInput}
              placeholder="Search for a drink..."
            />
          </View>

          <FlatList
            horizontal={true}
            data={items}
            renderItem={({item}) => 
              <Drink 
                  data={items}
                  key={item.idDrink}
                  name={item.strDrink} 
                  image={item.strDrinkThumb} 
                  glass={item.strGlass} 
                  category={item.strCategory}
              />
            }
            keyExtractor={item => item.idDrink}
          / >

        </ScrollView>

  
        </SafeAreaView>
  )
}

export default Home