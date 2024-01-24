import { TextInput } from 'react-native'
import React from 'react'

const InputText = (props) => {
    return (
        <TextInput
            value={props.getter}
            onChangeText={(text) => props.setter(text)}
            placeholder={props.placeholder}
            placeholderTextColor="#FFF"
            autoCapitalize='none'
            autoComplete={(props.isEmail) ? 'email' : ((props.isPassword) ? 'current-password' : 'off')}
            textContentType={(props.isEmail) ? 'username' : ((props.isPassword) ? 'password' : 'none')}
            inputMode={(props.isEmail) ? 'email' : 'none'}
            keyboardType={(props.isEmail) ? 'email-address' : 'default'}
            secureTextEntry={(props.isPassword) ? true : false}
            
            className = "rounded-lg self-center p-3 mb-5 text-white bg-[#280274] w-3/5 text-center"
        />
    )
}

export default InputText