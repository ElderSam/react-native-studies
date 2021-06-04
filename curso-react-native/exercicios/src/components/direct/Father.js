/* Direct Communication; pass properties to Child Component */

import React from 'react'
import { Text } from 'react-native'
import Style from '../Style'

import Child from './Child'

export default props => {
    let x = 13
    let y = 100

    return (
        <Text style={Style.bigText}>
            <Child a={x} b={y} />
            <Child a={x + 100} b={y + 200} />
        </Text>
    )
}
