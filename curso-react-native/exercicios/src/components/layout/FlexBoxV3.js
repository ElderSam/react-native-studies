import React from 'react'
import { View, StyleSheet } from 'react-native'

import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV3}>
            <Quadrado color="#ff801a"lado={20} />
            <Quadrado color="#F00" lado={30} />
            <Quadrado color="#0D0" lado={40} />
            <Quadrado color="#8312ed" lado={50} />
            <Quadrado color="grey" lado={60} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: "row",
        justifyContent: "space-evenly", // Controls the Main Axis
        alignItems: "flex-start", // Controls the Cross Axis
        height: 350,
        width: '100%',
        backgroundColor: '#000'
    }
})
