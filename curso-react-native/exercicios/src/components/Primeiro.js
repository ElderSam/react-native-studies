import React from 'react';
import { Text } from 'react-native';

import Style from './Style';

export default () => {
    console.warn('first component') // to debug your app

    return (
        <Text style={Style.bigText}>Primeiro Componente</Text>
    )
}