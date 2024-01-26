import { ScrollView, View, Text, FlatList } from 'react-native'
import React, { useEffect, useState }from 'react'
import Header from '../components/Header'
import { useScrollToTop } from '@react-navigation/native';
import { getUserFriendships } from '../firebase/queries/UserQueries';

import Loader from '../components/Loader'
import useAuth from '../firebase/AuthProvider';


const Friends = () => {

  const { user } = useAuth();
  const [friendships, setFriendships] = useState(null);

  const scrollTop = React.useRef(null);
  useScrollToTop(scrollTop);

  useEffect(() => {
    getUserFriendships(user.uid, setFriendships);
  }, [])

  const renderFriend = ({ item }) => (
    <View className='text-black h-16 w-full'>
      {
        (Object.keys(item.users)[0] == user.uid) ? (
          <Text>{item.users[Object.keys(item.users)[1]]}</Text>
        ) : (
          <Text>{item.users[Object.keys(item.users)[0]]}</Text>
        )
      }
    </View>
  )


  return (
    <View>
      <Header text='Friends' icon='person-add-outline'/>
        {
          (friendships) ? (
            <View>
              {
                (friendships.length == 0) ? (
                  <Text>You have no friends</Text>
                ) : (
                  <View className=''>
                    <FlatList
                      data={friendships}
                      renderItem={renderFriend}
                      keyExtractor={(item) => item.id}
                    />
                  </View>
                )
              }

            </View>
          ) : (
            <View className='h-full'>
                <Loader />
            </View>
          )
        }
    </View>
  )

}

export default Friends