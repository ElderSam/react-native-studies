/* Indirect Communication between Father and Child */

import React, { useState } from 'react'
import { Text } from 'react-native'

import Child from './Child'
import Style from '../Style'

export default props => {
    const [text, setText] = useState('')
    const [num, setNum] = useState(0)

    function displayValue(number, text) {
        setNum(number)
        setText(text)
    }

    return (
        <>
            <Text>Número Aleatório:</Text>
            <Text style={Style.bigText}>{text}{num}</Text>
            <Child
                min={1}
                max={10}
                functionX={displayValue}
            />
        </>
    )
}
