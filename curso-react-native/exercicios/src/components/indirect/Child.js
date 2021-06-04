import React from 'react'
import { Button } from 'react-native'

export default props => {

    function generateNumber(min, max) {
        const factor = max - min + 1
        return parseInt(Math.random() * factor) + min
    }

    return (
        <Button
            title="Executar"
            onPress={() => {
                const n = generateNumber(props.min, props.max)
                props.functionX(n, 'O valor é: ')
            }}
        />
    )
}
