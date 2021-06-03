import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import Primeiro from './src/components/Primeiro';

export default function App() {

  return (
    <SafeAreaView>
      <Text>My App</Text>
      <Text>{1 + 1}</Text>

      <Primeiro/>
    </SafeAreaView>
  );
}