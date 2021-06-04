/* Controlled Components */

import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'

import Style from './Style'

export default props => {
    const [nome, setNome] = useState('')

    return (
        <View>
            <Text style={Style.bigText}>
                Valor: {nome}
            </Text>

            <TextInput
                placeholder="Digite seu Nome"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}
