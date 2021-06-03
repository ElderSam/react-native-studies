import React from 'react';
import { SafeAreaView } from 'react-native';

import Primeiro from './src/components/Primeiro';
import CompX, { Comp1, Comp2 } from './src/components/Multi';

export default function App() {

  return (
    <SafeAreaView>
      <Primeiro/>

      <CompX/>
      <Comp1/>
      <Comp2/>
    </SafeAreaView>
  );
}