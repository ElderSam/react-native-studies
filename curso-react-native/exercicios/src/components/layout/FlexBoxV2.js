import React from 'react'
import { View, StyleSheet } from 'react-native'

import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado color="#ff801a"/>
            <Quadrado color="#F00" />
            <Quadrado color="#0D0" />
            <Quadrado color="#8312ed" />
            <Quadrado color="grey" />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flex: 1, // flex grow
        width: '100%',
        alignItems: "flex-end",
        justifyContent: 'space-evenly',
        backgroundColor: '#000'
    }
})
