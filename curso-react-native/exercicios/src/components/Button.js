import React from 'react';
import { Button } from 'react-native'

export default props => {
    const executar = () => {
        console.warn('Botão 1 Clicado!!!')
    }

    return (
        <>
            <Button
                title="Executar #1"
                onPress={executar}
            />

            <Button
            title="Executar #2"
            onPress={() => console.warn('Botão 2 Clicado')}
            />
        </>
    )
}