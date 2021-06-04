import React, { useState } from 'react'
import { Text, Button } from 'react-native'

import Style from './Style'

export default ({ initial=0, step=1 }) => {
    const [number, setNumber] = useState(initial)

    console.warn(`initial: ${initial}`)

    const inc = () => setNumber(number + step)
    const dec = () => setNumber(number - step)

    return (
        <>
            <Text style={Style.bigText}>{number}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
        </>
    )
}