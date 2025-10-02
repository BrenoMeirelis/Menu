import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

function TelaInicio() {
    return (
        <View style={{ flex: 1, backgroundColor: '#f2f6fa' }}>
            {}
            <View style={estilos.cabecalho}>
                <Image resizeMode='cover'
                    source={require('../assets/fotos/BrenoMeirelis1.png')} 
                    style={estilos.foto}
                />
                <Text style={estilos.nome}>Breno Meirelis</Text>
            </View>

            {}
            <ScrollView contentContainerStyle={estilos.scrollContent}>
                <View style={estilos.card}>
                    <Text style={estilos.titulo}>Redes Sociais</Text>
                    <Text style={estilos.biografia}>
                        Instagram: @brenomeirelis
                    </Text>

                    <Text style={estilos.titulo}>Telefone</Text>
                    <Text style={estilos.biografia}>
                        (18) 99815-4516
                    </Text>

                    <Text style={estilos.titulo}>Email</Text>
                    <Text style={estilos.biografia}>
                        brenomeirelis@outlook.com
                    </Text>

                
                </View>
            </ScrollView>

            {}
            <TouchableOpacity style={estilos.botao}>
                <Text style={estilos.textoBotao}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

const estilos = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 20,
        elevation: 4,
    },
    nome: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    foto: {
        width: 55,
        height: 120,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#fff',
        
    
    },
    scrollContent: {
        padding: 15,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 12,
        color: '#2c3e50',
    },
    biografia: {
        fontSize: 15,
        lineHeight: 22,
        marginBottom: 8,
        color: '#444',
        textAlign: 'justify',
    },
    destaque: {
        fontWeight: 'bold',
        color: '#2980b9',
    },
    botao: {
        backgroundColor: '#3498db',
        paddingVertical: 12,
        margin: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    textoBotao: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default TelaInicio;