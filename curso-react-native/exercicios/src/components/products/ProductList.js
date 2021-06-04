import React from 'react'
import { Text } from 'react-native'

import products from './products'
import Style from '../Style'

export default props => {

    function getList() {
        return products.map(p => {
            return (
                <Text key={p.id}>
                    {p.id}) {p.nome} tem R$ {p.preco}
                </Text>
            )
        })
    }
    return (
        <>
            <Text style={Style.bigText}>
                Lista de Produtos
            </Text>
            {getList()}
        </>
    )
}
