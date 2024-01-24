import { Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import useAuth from '../firebase/AuthProvider'


const Header = () => {

    const { user } = useAuth();
    return (
        <SafeAreaView className="flex flex-row justify-between items-center bg-[#FE7A36]">

            <Text className='p-5 text-white text-3xl'>DrinkBaby</Text>
            {
                user ? (
                    <View className='pr-3'>
                        <Image
                            className='aspect-square h-12 rounded-full'
                            source={{uri: 'https://scontent.fsvq4-1.fna.fbcdn.net/v/t39.30808-6/360086319_3683278515233971_4867496317066971572_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=PVQXhirZTi4AX-WsOGa&_nc_ht=scontent.fsvq4-1.fna&oh=00_AfB3D-i_TrEBuuXN16hBEgCuunUGxjqBwBWJB6XwCFnLag&oe=65B54D29'}}
                        />
                    </View>
                ) : (
                    <View>
                
                    </View>
                )}
           
        </SafeAreaView>
    )
}

export default Header