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
                    <Text style={estilos.titulo}>Cursos</Text>
                    <Text style={estilos.biografia}>
                        Manutenção de Máquinas Agricolas e Veículos Pesados
                        {'\n'}
                        Local: Senai Duque de Caxias/Araçatuba/SP
                        
                    </Text>

                    <Text style={estilos.titulo}>Habilidades</Text>
                    <Text style={estilos.biografia}>
                        Sou alguém comprometido com resultados e aprendizado contínuo. Tenho habilidades em organização, comunicação eficiente e resolução de problemas, além de facilidade em lidar com tecnologia e processos complexos. Busco sempre transformar desafios em oportunidades de crescimento.
                        {'\n'}
                        {'\n'}
                        Curioso e determinado, gosto de aprender coisas novas e de colocar a mão na massa. Tenho facilidade em me comunicar, organizar tarefas e trabalhar em equipe, além de me adaptar bem a situações diferentes. Adoro desafios que me fazem evoluir.
                        {'\n'}
                        {'\n'}
                        Apaixonado por inovação e resultados, consigo transformar ideias em soluções práticas. Sou criativo, organizado e comunicativo, com talento para lidar com tecnologia e resolver problemas de forma inteligente. Gosto de desafios e de sair da zona de conforto para crescer sempre.
                    </Text>

                    <Text style={estilos.titulo}>Experiências</Text>
                    <Text style={estilos.biografia}>
                    Experiências Profissionais

                        Eletricista – John Deere
                        Período: [Trabalho Atual]
                        {'\n'}
                        Manutenção e reparo de sistemas elétricos em máquinas agrícolas e veículos pesados.
                        {'\n'}
                        Diagnóstico de falhas e aplicação de soluções técnicas eficientes.
                        {'\n'}
                        Garantia de operação segura e otimizada dos equipamentos.
                        {'\n'}
                        {'\n'}
                        Estagiário – Tribunal de Justiça
                        Período: [10/01/2019 até 20/12/2019]
                        {'\n'}
                        Apoio em atividades administrativas e processos internos do tribunal.
                        {'\n'}
                        Organização de documentos, protocolo de processos e atendimento ao público.
                        {'\n'}
                        Desenvolvimento de habilidades em gestão de documentos e comunicação profissional.
                        {'\n'}
                        {'\n'}
                        Formação Técnica
                        {'\n'}
                        Curso de Mecânico de Máquinas Agrícolas e Veículos Pesados
                        {'\n'}
                        Conhecimentos em manutenção, reparo e operação de equipamentos agrícolas e pesados.
                        {'\n'}
                        Preparação para atuação prática em oficinas e manutenção de campo.
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