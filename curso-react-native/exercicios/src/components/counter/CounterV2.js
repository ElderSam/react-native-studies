import React, { useState } from 'react'
import { Text } from 'react-native'

import CounterDisplay from './CounterDisplay'
import CounterButtons from './CounterButtons'

import Style from '../Style'

export default props => {
    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return (
        <>
            <Text style={Style.bigText}>Contador</Text>
            {/* Direct communication */}
            <CounterDisplay num={num} />

            {/* Indirect communication */}
            <CounterButtons inc={inc} dec={dec} />
        </>
    )
}
