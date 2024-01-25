import { ScrollView, View } from 'react-native'
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


  return (
    <View>
      <Header text='Friends' icon='person-add-outline'/>
        {
          (friendships) ? (
            <ScrollView>

            </ScrollView>
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