import React from 'react'
import TextoCentral from '../components/TextoCentral'

export default props => {
    // console.warn(props.route.params)
    const route = props.route || { params: { numero: 0 } }

    return (
        <TextoCentral corFundo='#9932cd'>
            Tela C - {route.params.numero}
        </TextoCentral>
    )
}