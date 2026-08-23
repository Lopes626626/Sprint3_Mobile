import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import { ocorrenciaService } from '../services/ocorrenciaService';
import { RegistroIndustrial } from '../types/RegistroIndustrial';

export default function CadastroRegistroScreen({ navigation }: any) {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [status, setStatus] = useState<RegistroIndustrial['status']>('normal');
    const [dataStr, setDataStr] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSalvar = async () => {
        try {
            setLoading(true);
            const novaOcorrencia = {
                nome,
                descricao,
                status,
                data: dataStr
            };
            
            await ocorrenciaService.criar(novaOcorrencia);
            Alert.alert("Sucesso", "Registro criado!");
            navigation.goBack();
        } catch (error) {
            Alert.alert("Erro", "Falha ao salvar no backend.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Ex: Motor Principal" />

            <Text style={styles.label}>Descrição:</Text>
            <TextInput style={styles.input} value={descricao} onChangeText={setDescricao} placeholder="Ex: Superaquecimento" />

            <Text style={styles.label}>Status (normal, alerta, critico):</Text>
            <TextInput 
                style={styles.input} 
                value={status} 
                onChangeText={(text) => setStatus(text as RegistroIndustrial['status'])} 
                autoCapitalize="none"
            />

            <Text style={styles.label}>Data:</Text>
            <TextInput style={styles.input} value={dataStr} onChangeText={setDataStr} placeholder="Ex: 2026-08-23" />

            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <Button title="Salvar Registro" onPress={handleSalvar} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    label: { fontSize: 16, marginBottom: 8, fontWeight: 'bold' },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 16, borderRadius: 4 }
});