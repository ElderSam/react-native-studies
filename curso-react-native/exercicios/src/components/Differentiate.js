import React from 'react'
import { Text, Platform } from 'react-native'
import Style from './Style'

export default _ => { // Conditional rendering based on Operating System type

    if(Platform.OS === 'android') {
        return <Text style={Style.bigText}>Android</Text>
    }else if(Platform.OS === 'ios') {
        return <Text style={Style.bigText}>iOS</Text>
    }else {
        return <Text style={Style.bigText}>Eita!!!</Text>
    }
}
