// buttons for navigation

import React from 'react'
import { View, Text, Button } from 'react-native'

export default props => (
    <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {props.voltar
                ?   <Button
                        title='Voltar'
                        onPress={() => {
                            props.navigation.goBack()
                        }}
                    />
                : false
            }
            {props.avancar
                ?   <Button
                        title='Avancar'
                        onPress={() => {
                            props.navigation.navigate(
                                props.avancar,
                                props.avancarParams  // you can pass params to the next screen
                            )

                            // props.navigation.push(
                            //     props.avancar,
                            //     {
                            //         numero: parseInt(Math.random() * 100)
                            //     }

                            // ) // you can use .push to call the same screen
                        }}
                    />
                : false
            }
        </View>
        <View style={{flex: 1}}>
            {props.children}
        </View>
    </View>
)