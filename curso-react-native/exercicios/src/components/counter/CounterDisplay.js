import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Style from '../Style'

export default props => {
    return (
        <View style={style.Display}>
            <Text style={[Style.bigText, style.DisplayText]}>
                {props.num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: "#000",
        padding: 20,
        width: 300,
    },
    DisplayText: {
        color: '#FFF'
    }
})
