import React from 'react'
import { View, StyleSheet } from 'react-native'

import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV1}>
            <Quadrado color="#ff801a"/>
            <Quadrado color="#F00" />
            <Quadrado color="#0D0" />
            <Quadrado color="#8312ed" />
            <Quadrado color="grey" />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flexGrow: 1,
        justifyContent: 'space-evenly',
        backgroundColor: '#FFF'
    }
})
