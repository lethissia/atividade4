import Home from "./tela/Home";
import Sobre from "./tela/Sobre";
import IMCApp from "./tela/IMCApp"
import Cadastro from "./tela/Cadastro";

import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const stack1 = createStackNavigator()
const stack2 = createStackNavigator()

import Modal from "./components/Perfil";
import resultadoIMC from "./components/resultadoIMC";

function stack1Tela() {
    return (
        <stack1.Navigator initialRouteName='Home'>
            <stack1.Screen name='Home' component={Home} options={{ title: 'Bem vindo!', headerStyle: { backgroundColor: 'pink' } }} />
            <stack1.Screen name='Sobre' component={Sobre} options={{ headerStyle: { backgroundColor: 'pink' }, headerTitleAlign: 'center' }} />
            <stack1.Screen name='Cadastro' component={Cadastro} options={{ headerStyle: { backgroundColor: 'pink' }, headerTitleAlign: 'center' }} />
            <stack1.Screen name='Calcular' component={IMCApp} options={{ headerStyle: { backgroundColor: 'pink' }, headerTitleAlign: 'center' }} />
        </stack1.Navigator>
    )
}

function stack2Tela() {
    return (
        <NavigationContainer>
            <stack2.Navigator>
                <stack2.Screen name='Principal' component={stack1Tela} options={{ headerShown: false }} />
                <stack2.Screen name='Perfil' component={Modal} options={{ headerShown: false }} />
                <stack2.Screen name='resultadoIMC' component={resultadoIMC} options={{ headerShown: false }} />
            </stack2.Navigator>
        </NavigationContainer>
    )
}

export default stack2Tela