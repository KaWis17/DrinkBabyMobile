import { Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'

export class Input extends Component {

    constructor(title, input, setInput, selected, setSelected, next, type){
        super();
        this.title = title;
        this.input = input;
        this.setInput = setInput;
        this.selected = selected;
        this.setSelected = setSelected;
        this.next = next;
        this.type = type;
    }
    render() {
        return (
            <View 
                className={`w-5/6 flex justify-center bg-white px-4 h-12 rounded-lg border-2
                            ${(this.selected ? 'border-[#3652AD]' : 'border-white')}`}
              >
                {
                  (this.input !== '' || this.selected) ? (
                    <Text className='text-sm text-[#808080] pt-1'>{this.title}</Text>
                  ) : (
                    <></>
                  )
                }

                <TextInput
                  onFocus={() => this.setSelected(true)}
                  onBlur={() => this.setSelected(false)}
                  value={this.input}
                  onChangeText={(text) => this.setInput(text)}
                  placeholder={(this.input === '' && !this.selected)  ? `${this.title}` : ''}
                  autoCapitalize='none'
                  autoComplete='off'
                  autoCorrect={false}
                  secureTextEntry={(this.type === 'password') ? true : false}
                  inputMode = {(this.type === 'email') ? 'email' : 'none'}
                  placeholderTextColor='#808080'
                  textContentType='oneTimeCode'
                  className={`grow w-full ${(this.input !== '' || this.selected) ? 'mb-2' : ''}`}                  
                />
                
              </View>
        )
    }
}

export default Input