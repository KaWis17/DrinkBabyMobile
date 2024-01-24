import { TextInput, Keyboard } from 'react-native'
import React from 'react'

const InputText = (props) => {
    return (
        <TextInput
            value={props.getter}
            onChangeText={(text) => props.setter(text)}
            placeholder={props.placeholder}
            placeholderTextColor="#FFF"
            autoCapitalize={(props.isEmail || props.isPassword) ? 'none' : 'words'}
            autoComplete={(props.isEmail) ? 'email' : ((props.isPassword) ? 'current-password' : 'off')}
            textContentType={(props.isEmail) ? 'username' : 'none'}
            inputMode={(props.isEmail) ? 'email' : 'text'}
            keyboardType={(props.isEmail) ? 'email-address' : 'default'}
            secureTextEntry={(props.isPassword) ? true : false}
            onEndEditing={() => Keyboard.dismiss()}
            spellCheck={false}
            autoCorrect={false}
            className = "rounded-lg self-center p-3 mb-5 text-white border-[#280274] bg-[#3652AD] border-4 w-3/5 text-center"
        />
    )
}

export default InputText