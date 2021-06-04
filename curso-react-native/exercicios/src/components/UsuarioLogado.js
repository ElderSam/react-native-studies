import React from 'react'
import { Text } from 'react-native'

import If from './If'

import Style from './Style'

export default (props) => {
    const usuario = props.usuario || {}

    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text>Usuário Logado:</Text>
                <Text style={Style.bigText}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )
}
