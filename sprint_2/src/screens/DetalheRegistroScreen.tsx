import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { ocorrenciaService } from '../services/ocorrenciaService';
import { RegistroIndustrial } from '../types/RegistroIndustrial';

export default function DetalheRegistroScreen({ route }: any) {
    const { id } = route.params;
    const [registro, setRegistro] = useState<RegistroIndustrial | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const carregarDetalhes = async () => {
            try {
                const dados = await ocorrenciaService.buscarPorId(id);
                setRegistro(dados);
            } finally {
                setLoading(false);
            }
        };
        carregarDetalhes();
    }, [id]);

    if (loading) return <ActivityIndicator size="large" color="#0000ff" style={styles.center} />;
    if (!registro) return <Text style={styles.center}>Registro não encontrado.</Text>;

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Registro #{registro.id}</Text>
            <Text style={styles.texto}>Nome: {registro.nome}</Text>
            <Text style={styles.texto}>Descrição: {registro.descricao}</Text>
            <Text style={styles.texto}>Status: {registro.status}</Text>
            <Text style={styles.texto}>Data: {registro.data}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#fff' },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
    texto: { fontSize: 18, marginBottom: 8 }
});