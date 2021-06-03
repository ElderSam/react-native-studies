import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Primeiro from './src/components/Primeiro';
import CompX, { Comp1, Comp2 } from './src/components/Multi';

export default function App() {

  return (
    <SafeAreaView style={style.App}>
      <Primeiro/>

      <CompX/>
      <Comp1/>
      <Comp2/>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  App: {
    //backgroundColor: '#B77',
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})