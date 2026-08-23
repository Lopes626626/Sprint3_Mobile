import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { ocorrenciaService } from '../services/ocorrenciaService';
import { RegistroIndustrial } from '../types/RegistroIndustrial';

export default function ListaRegistrosScreen({ navigation }: any) {
    const [registros, setRegistros] = useState<RegistroIndustrial[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [erro, setErro] = useState<string | null>(null);

    const carregarDados = async () => {
        try {
            setLoading(true);
            setErro(null);
            const dados = await ocorrenciaService.listar();
            setRegistros(dados);
        } catch (error) {
            setErro("Erro ao conectar com a API.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', carregarDados);
        return unsubscribe;
    }, [navigation]);

    if (loading) return <ActivityIndicator size="large" color="#0000ff" style={styles.center} />;
    
    if (erro) return (
        <View style={styles.center}>
            <Text style={styles.erroText}>{erro}</Text>
            <Button title="Tentar Novamente" onPress={carregarDados} />
        </View>
    );

    return (
        <View style={styles.container}>
            <Button title="Novo Registro" onPress={() => navigation.navigate('CadastroRegistro')} />
            <FlatList
                data={registros}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ marginTop: 16 }}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DetalheRegistro', { id: item.id })}>
                        <Text style={styles.titulo}>{item.nome}</Text>
                        <Text>Status: {item.status}</Text>
                        <Text>Data: {item.data}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    card: { padding: 16, backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc', marginBottom: 8, borderRadius: 8 },
    erroText: { color: 'red', textAlign: 'center', marginBottom: 16 },
    titulo: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 }
});