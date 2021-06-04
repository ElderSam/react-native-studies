/* random number generator */

import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import Style from '../Style'
import MegaNumero from './MegaNumero'

export default class Mega extends Component {

    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }

    changeQtdNumero = (qtde) => {
        this.setState({ qtdNumeros: +qtde })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1 // random number 1-60
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b) // ordinates alphabetically

        this.setState({ numeros })
    }

    // gerarNumeros = () => { // alternative: procedural form
    //     const { qtdNumeros } = this.state
    //     const numeros = []
    //     for(let i=0; i<qtdNumeros; i++) {
    //         const n = this.gerarNumeroNaoContido(numeros)
    //         numeros.push(n)
    //     }

    //     numeros.sort((a, b) => a - b) // ordinates alphabetically
    //     this.setState({ numeros })
    // }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }

    render() {
        return (
            <>
                <Text style={Style.bigText}>
                    Gerador de Mega-Sena 
                </Text>
                <Text>(Números Aleatórios)</Text>

                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder="Qtde de Números"
                    value={`${this.state.qtdNumeros}`}
                    onChangeText={this.changeQtdNumero}
                />
                <Button
                    title="Gerar"
                    onPress={this.gerarNumeros}
                />

                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}