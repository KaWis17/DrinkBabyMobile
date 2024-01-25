import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { ScrollView, Text, View } from 'react-native'
import Post from '../components/home/Post'
import { useScrollToTop } from '@react-navigation/native';


import axios from 'axios'


const Home = () => {

  const [posts, setPosts] = useState([]);

  const scrollTop = React.useRef(null);

  useScrollToTop(scrollTop);

  useEffect(() => {
  
    axios.get(`https://jsonplaceholder.org/posts`)
      .then(response => {
        if(response.data != null)
          setPosts(response.data);
        else
          setItems([]);
      })
      .catch(error => {
        console.error(error);
    });
  
  }, []);

  return (
      <>
        <Header text='DrinkBaby' icon='person-outline'/>
        <ScrollView
          className='bg-[#E9F6FF]'
          ref={scrollTop}
        >

        {
                (posts) ? (
                    <>
                      {posts.map(item => (
                        <View 
                          key={item.id}
                          className='mb-6 bg-red-500'
                        >
                          <Post 
                            author={item.slug}
                            description={item.content}
                            profileImageSource={item.thumbnail}
                            imageSource={"https://loremflickr.com/640/480/abstract"}
                            time={item.publishedAt}
                            votes={Math.floor(Math.random()*100)}
                            score={Math.random()*5}
                          />
                        </View>
                      ))}
                    </>
                ) : (
                    <Loader />
                )
            }
          
        </ScrollView>
      </>
  )
}

export default Home