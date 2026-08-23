import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { RegistroIndustrial } from "../types/RegistroIndustrial";

type Props = {
  registro: RegistroIndustrial;
  onPress: () => void;
};

export default function RegistroCard({ registro, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.nome}>{registro.nome}</Text>

      <Text>Status: {registro.status}</Text>

      <Text>{registro.data}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },
});