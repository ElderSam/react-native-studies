/* Random Number Challenge */

import React from 'react'
import { Text } from 'react-native'

import Style from './Style';

function Random(param) {
    const { min, max } = param;
    console.warn(param)

    const getRandomNumber = (min, max) => {
        return (Math.round(Math.random() * (max - min) + min));
    }

    return (
        <Text style={Style.bigText}>
            O número Aleatório é {getRandomNumber(min, max)}
        </Text>
    )
}

export default Random;