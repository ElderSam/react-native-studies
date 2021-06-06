import React from 'react'
import { SafeAreaView } from 'react-native'

import TelaA from './src/views/TelaA'
import TelaB from './src/views/TelaB'
import TelaC from './src/views/TelaC'

export default props => (
    <SafeAreaView style={{flex: 1}}>
        <TelaA />
        <TelaB />
        <TelaC />
    </SafeAreaView>
)