import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando as 3 telas exatas que atualizamos
import ListaRegistrosScreen from './src/screens/ListaRegistrosScreen';
import CadastroRegistroScreen from './src/screens/CadastroRegistroScreen';
import DetalheRegistroScreen from './src/screens/DetalheRegistroScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaRegistros">
        <Stack.Screen 
          name="ListaRegistros" 
          component={ListaRegistrosScreen} 
          options={{ title: 'Registros Industriais' }} 
        />
        <Stack.Screen 
          name="CadastroRegistro" 
          component={CadastroRegistroScreen} 
          options={{ title: 'Novo Registro' }} 
        />
        <Stack.Screen 
          name="DetalheRegistro" 
          component={DetalheRegistroScreen} 
          options={{ title: 'Detalhes da Ocorrência' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}