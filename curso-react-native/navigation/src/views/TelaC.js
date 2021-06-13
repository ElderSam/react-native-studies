import React from 'react'
import TextoCentral from '../components/TextoCentral'

export default props => {
    // console.warn(props.route.params)
    const r = props.route
    const numero = r && r.params && r.params.numero ? r.params.numero : 0

    return (
        <TextoCentral corFundo='#9932cd'>
            Tela C - {numero}
        </TextoCentral>
    )
}