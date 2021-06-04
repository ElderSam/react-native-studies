/* State Component (UseState) */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Father from './src/components/direct/Father';

// import Primeiro from './src/components/Primeiro';
// import CompX, { Comp1, Comp2 } from './src/components/Multi';
// import MinMax from './src/components/MinMax';
// import Random from './src/components/Random';
// import Button from './src/components/Button';
// import Counter from './src/components/Counter'
// import Temp from './src/components/Temp';

export default function App() {

  return (
    <SafeAreaView style={style.App}>
      <Father />
      {/* <Temp /> */}

      {/* <Counter initial={100} step={2} />
      <Counter /> */}

      {/* <Button/> */}
      {/* <Random min={1} max={10} />
      <Random min={50} max={100} /> */}
            
      {/* <Primeiro/>
      <CompX/>
      <Comp1/>
      <Comp2/> */}

    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  App: {
    //backgroundColor: '#B77',
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }
})