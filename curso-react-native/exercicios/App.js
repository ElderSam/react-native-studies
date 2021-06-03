import React from 'react';
import { Text, SafeAreaView } from 'react-native';

export default function App() {
  const jsx = <Text>Primeiro Componente</Text>

  return (
    <SafeAreaView>
      {jsx}
    </SafeAreaView>
  );
}