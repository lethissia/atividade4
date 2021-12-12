import React, { Component } from "react";
import { View, Text, TextInput, Button } from 'react-native'

export default class resultadoIMC extends Component {

    render() {

        if (parseFloat(this.props.route.params.peso) != null && parseFloat(this.props.route.params.altura)) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: 700 }}>
                        O resultado do seu IMC é:
                    </Text>

                    <Text style={{ fontSize: 24, padding: 20 }}>
                        {(parseFloat(this.props.route.params.peso) /
                            (parseFloat(this.props.route.params.altura) * parseFloat(this.props.route.params.altura))).toFixed(2)}
                    </Text>
                    <mensagemIMC imc={(parseFloat(this.props.route.params.peso) /
                        (parseFloat(this.props.route.params.altura) * parseFloat(this.props.route.params.altura))).toFixed(2)}></mensagemIMC>
                    <View style={{ width: 300, marginTop: 20 }}>
                        <Button onPress={() => this.props.navigation.navigate('Home')} title="Home" />
                    </View>
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 14, fontWeight: 500 }}>
                        Epa! Algum campo não foi preenchido. (:
                    </Text>
                    <View style={{ width: 300, marginTop: 20 }}>
                        <Button onPress={() => this.props.navigation.navigate('Calcular')} title="Ok" />
                    </View>
                </View>
            )
        }
    }
}