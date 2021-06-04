/* State Component (UseState) */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import FLexBoxV1 from './src/components/layout/FlexBoxV1'
// import DigiteSeuNome from './src/components/DigiteSeuNome';
// import ProductListV2 from './src/components/products/ProductListV2'
// import ProductList from './src/components/products/ProductList'
// import UsuarioLogado from './src/components/UsuarioLogado'
// import Familia from './src/components/relacao/Familia'
// import Membro from './src/components/relacao/Membro'
// import ParImpar from './src/components/ParImpar'
// import Diferenciar from './src/components/Differentiate';
// import CounterV2 from './src/components/counter/CounterV2';
// import Father from './src/components/indirect/Father';
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
      <FLexBoxV1 />

      {/* <DigiteSeuNome /> */}

      {/* <ProductListV2 /> */}

      {/* Conditional Rendering #02 */}
      {/* <UsuarioLogado usuario={ {nome: 'Gui', email: 'gui@gui.com'} } />
      <UsuarioLogado usuario={ {nome: 'Ana' } } />
      <UsuarioLogado usuario={ { email: 'calos@email.com'} } />
      <UsuarioLogado usuario={null} />
      <UsuarioLogado usuario={{}} /> */}

      {/* passing components as parameters */}
      {/* <Familia>
        <Membro nome="Alexa" sobrenome="Arruda" />
        <Membro nome="Maria" sobrenome="Arruda" />
      </Familia>
      <Familia>
        <Membro nome="Ana" sobrenome="Silva" />
        <Membro nome="Julia" sobrenome="Silva" />
        <Membro nome="Pedro" sobrenome="Silva" />
      </Familia> */}

      {/* <ParImpar num={1} /> */}
      {/* <Diferenciar /> */}
      {/* <CounterV2 /> */}
      {/* <Father /> */}
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