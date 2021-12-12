import React, { Component } from "react";
import { View, Text } from 'react-native';

export default class Sobre extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 25, fontWeight: 700, marginBottom: 15 }}> Sobre nós</Text>
                <View style={{ width: 340, paddingLeft: 10 }}>
                    <Text style={{ fontSize: 15 }}>Nossa História</Text>
                    <Text style={{ fontSize: 13, color: 'pink' }}> Somos calculadores de IMC desde 1890. Na época, calculavamos o IMC pela quantidade de gordura que cabia em um palmo da mão. Ainda bem que hoje em dia não precisamos mais fazer isso.</Text>
                </View>
            </View>
        )
    }
}