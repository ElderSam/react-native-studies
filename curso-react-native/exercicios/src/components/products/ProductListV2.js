import React from 'react'
import { Text, FlatList } from 'react-native'

import products from './products'
import Style from '../Style'

export default props => {
    const productRender = ({ item: p }) => {
        return <Text>{p.id}) {p.nome} - R$ {p.preco}</Text>
    }

    return (
        <>
            <Text style={Style.bigText}>
                Lista de Produtos V2
            </Text>
            <FlatList
            data={products}
            keyExtractor={i => `${i.id}`}
            renderItem={productRender}
            />
        </>
    )
}
