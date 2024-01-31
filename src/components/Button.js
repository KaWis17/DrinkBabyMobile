import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class Button extends Component {

    marginTop = 0

    constructor(text, doOnClick, buttonType) {
        super();
        this.text = text
        this.doOnClick = doOnClick
        this.buttonType = buttonType
    }

    render() {
        return (
            <View 
                className={`
                    w-full
                    mt-${this.marginTop}
                `}
                
            >
                <TouchableOpacity
                    onPress={() => this.doOnClick()}
                    className={`
                        w-5/6 self-center p-3 rounded-full border-2
                        ${((this.buttonType === 'full-button') && 'bg-[#3652AD] border-transparent')}
                        ${((this.buttonType === 'border-button') && 'border-[#3652AD]')}
                        ${((this.buttonType === 'basic-button') && 'border-transparent ')}
                    `}


                >
                    <Text 
                        className={`
                            text-center
                            ${((this.buttonType === 'full-button') && 'text-white')}
                            ${((this.buttonType === 'border-button') && 'text-[#3652AD]')}
                        `}
                    >
                            
                        {this.text}
                        
                    </Text>

                </TouchableOpacity>
            </View>
        )
    }
}