import React, { Component } from "react";
import { StyleSheet, View, Text, Button, Image } from 'react-native'

export default class Modal extends Component {

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 25, padding: 20, fontWeight: 700 }}>
                    Seu Perfil
                </Text>
                <View>
                    <Image
                        style={styles_img.container_img}
                        source={{ uri: 'https://s11.favim.com/orig/7/785/7856/78567/comic-book-icons-dc-comics-harley-quinn-Favim.com-7856777.jpg' }}
                    />
                </View>

                <Text style={{ fontSize: 15, padding: 5 }}>
                    Nome: {this.props.route.params.nome}
                </Text>
                <Text style={{ fontSize: 15, padding: 5 }}>
                    Idade: {this.props.route.params.idade}
                </Text>
                <Text style={{ fontSize: 15, padding: 5, paddingBottom: 15 }}>
                    Email: {this.props.route.params.email}
                </Text>



                <Button onPress={() => this.props.navigation.navigate('Home')} title="Home" />
            </View>
        );
    }
}
const styles_img = StyleSheet.create({
    container_img: {
        width: 200,
        height: 200,
        borderRadius: 20,
    },
});