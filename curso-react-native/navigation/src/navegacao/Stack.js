import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="TelaA" /*screenOptions={{ headerShown: false }}*/ >
        <Stack.Screen name="TelaA"
            options={{ title:'Informações Iniciais' }}
            component={TelaA} />
        <Stack.Screen name="TelaB" component={TelaB} />
        <Stack.Screen name="TelaC" component={TelaC} />
    </Stack.Navigator>
)