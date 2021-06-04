/* Using 'props.children'
 */

import React from 'react'
import { Text } from 'react-native'

export default props => { // receiving components as parameters
    return (
        <>
            <Text>Membros da Família:</Text>
            {props.children}
            {/* <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Júlia" sobrenome="Silva" /> */}
        </>
    )
}
