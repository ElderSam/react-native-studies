/* Conditional Rendering */

import React from 'react'
import { View, Text } from 'react-native'

import Style from './Style'

export default ({num = 0}) => {
    console.warn(`num: ${num}`)

    //let value = ''

    // if(num % 2 === 0) {
    //     value = 'Par'
    // }else {
    //     value = 'Ímpar'
    // }

    return (
        <View>
            <Text style={Style.bigText}>O resultado é:</Text>
            <Text style={Style.bigText}>
                {(num % 2 === 0) ? 'Par' : 'Ímpar'}
            </Text>
        </View>
    )
}
