import React, {  } from 'react'
import Header from '../components/Header'
import { ScrollView, Text, View } from 'react-native'
import Post from '../components/home/Post'


const Home = () => {

  return (
      <>
        <Header text='DrinkBaby' icon='person-outline'/>
        <ScrollView className=''>

          <Post 
            author='Krzysztof'
            profileImageSource={{uri: "https://scontent.fsvq4-1.fna.fbcdn.net/v/t39.30808-6/360086319_3683278515233971_4867496317066971572_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=PVQXhirZTi4AX-WsOGa&_nc_ht=scontent.fsvq4-1.fna&oh=00_AfCmk8_N-8IPfxJ5tEAR-0xgjIOvszOFh8FwODth4J9WlQ&oe=65B74769"}}
            imageSource={{uri: "https://media.sciencephoto.com/c0/34/19/98/c0341998-800px-wm.jpg"}}
            score={5}
            votes={15}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            time="8h ago"
          />

<Post 
            author='Krzysztof'
            profileImageSource={{uri: "https://scontent.fsvq4-1.fna.fbcdn.net/v/t39.30808-6/360086319_3683278515233971_4867496317066971572_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=PVQXhirZTi4AX-WsOGa&_nc_ht=scontent.fsvq4-1.fna&oh=00_AfCmk8_N-8IPfxJ5tEAR-0xgjIOvszOFh8FwODth4J9WlQ&oe=65B74769"}}
            imageSource={{uri: "https://media.sciencephoto.com/c0/34/19/98/c0341998-800px-wm.jpg"}}
            score={5}
            votes={15}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            time="8h ago"
          />

<Post 
            author='Krzysztof'
            profileImageSource={{uri: "https://scontent.fsvq4-1.fna.fbcdn.net/v/t39.30808-6/360086319_3683278515233971_4867496317066971572_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=PVQXhirZTi4AX-WsOGa&_nc_ht=scontent.fsvq4-1.fna&oh=00_AfCmk8_N-8IPfxJ5tEAR-0xgjIOvszOFh8FwODth4J9WlQ&oe=65B74769"}}
            imageSource={{uri: "https://media.sciencephoto.com/c0/34/19/98/c0341998-800px-wm.jpg"}}
            score={5}
            votes={15}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            time="8h ago"
          />

<Post 
            author='Krzysztof'
            profileImageSource={{uri: "https://scontent.fsvq4-1.fna.fbcdn.net/v/t39.30808-6/360086319_3683278515233971_4867496317066971572_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=PVQXhirZTi4AX-WsOGa&_nc_ht=scontent.fsvq4-1.fna&oh=00_AfCmk8_N-8IPfxJ5tEAR-0xgjIOvszOFh8FwODth4J9WlQ&oe=65B74769"}}
            imageSource={{uri: "https://media.sciencephoto.com/c0/34/19/98/c0341998-800px-wm.jpg"}}
            score={5}
            votes={15}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            time="8h ago"
          />

<Post 
            author='Krzysztof'
            profileImageSource={{uri: "https://scontent.fsvq4-1.fna.fbcdn.net/v/t39.30808-6/360086319_3683278515233971_4867496317066971572_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=PVQXhirZTi4AX-WsOGa&_nc_ht=scontent.fsvq4-1.fna&oh=00_AfCmk8_N-8IPfxJ5tEAR-0xgjIOvszOFh8FwODth4J9WlQ&oe=65B74769"}}
            imageSource={{uri: "https://media.sciencephoto.com/c0/34/19/98/c0341998-800px-wm.jpg"}}
            score={5}
            votes={15}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            time="8h ago"
          />
          
        </ScrollView>
      </>
  )
}

export default Home