import React from 'react'
import { Text } from 'react-native'
import Style from '../Style'

export default props => {
    return (
        <Text style={Style.bigText}>
            {props.nome} {props.sobrenome}
        </Text>
    )
}
