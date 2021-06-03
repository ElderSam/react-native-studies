import React from 'react'
import { Text } from 'react-native'

import Style from './Style'

export default (param) => { // Component with Properties
    console.warn(param)

    return (
        <Text style={Style.bigText}>
            O valor de {param.max} é maior que o valor de {param.min}!
        </Text>
    )
}