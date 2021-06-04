import React, { Component } from 'react'
import { Text } from 'react-native'

import Style from '../Style'

export default class Mega extends Component {
    render() {
        return (
            <Text style={Style.bigText}>
                Gerador de Mega-Sena
            </Text>
        )
    }
}