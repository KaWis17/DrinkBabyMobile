import React, { useCallback, useEffect, useState } from 'react'
import Header from '../components/Header'
import { FlatList, RefreshControl, Text, View } from 'react-native'
import Post from '../components/home/Post'
import { useScrollToTop } from '@react-navigation/native';
import { getPostsData } from '../firebase/queries/PostQueries';

import Loader from '../components/Loader'

const Home = ( {navigation} ) => {

  const max = 10;

  const [posts, setPosts] = useState([]);
  const [last, setLast] = useState(null);

  const scrollTop = React.useRef(null);

  useScrollToTop(scrollTop);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
      setRefreshing(true);
      await getPostsData(true, max, last, setLast, posts, setPosts)
      setRefreshing(false)
  }, []);

  useEffect(() => {

    getPostsData(true, max, last, setLast, posts, setPosts)

  }, []);

  return (
      <>
        <Header text='DrinkBaby' navigation={navigation} icon='person-outline'/>
        <View>
        {
          (posts.length > 0) ? (
            
            <FlatList
              className='bg-[#E9F6FF]'
              ref={scrollTop}
              data={posts}
              renderItem={Post}
              keyExtractor={post => post._id}
              refreshControl={
                <RefreshControl 
                  refreshing={refreshing} 
                  onRefresh={onRefresh} 
                />
              }
              onEndReached={async () => {
                  await getPostsData(false, max, last, setLast, posts, setPosts);
              }}
              onEndReachedThreshold={1}
              ListFooterComponent={<Text className='pb-32 text-center'>The end of Internet</Text>}
            >

            </FlatList>
           
          ) : (
            <View className='h-full'>
                <Loader />
            </View>
          )
        }
        </View>  
      </>
  )
}

export default Home