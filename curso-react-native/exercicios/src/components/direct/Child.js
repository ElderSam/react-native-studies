import React from 'react'
import { View, Text } from 'react-native'
import Style from '../Style'

export default props => {
    return (
        <View>
            <Text style={Style.bigText}>{props.a} </Text>
            <Text style={Style.bigText}>{props.b} </Text>
        </View>
    )
}
