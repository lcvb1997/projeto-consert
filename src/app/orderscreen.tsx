import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

const orders = [
  {
    status: "Pedido concluído",
    description: "Informamos que seu pedido com Júlio Cavalcante está concluído ...",
    color: "#2E7D32",
  },
  {
    status: "Pedido em andamento",
    description: "Informamos que seu pedido com Júlio Cavalcante está em ...",
    color: "#856F30",
  },
  {
    status: "Pedido na fila",
    description: "Informamos que seu pedido com Júlio Cavalcante foi iniciado e está ...",
    color: "#863A3A",
  },
];

export default function OrdersScreen() {
  const navigation = useNavigation();
  const router = useRouter(); // Inicializa o useRouter

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerLogo} onPress={() => router.push("/homepage")}>
          <Image source={require('../assets/logo_blue.png')} style={styles.headerLogo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <MaterialIcons name="search" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {orders.map((order, index) => (
          <TouchableOpacity key={index} onPress={() => router.push("/fila")}>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{order.status}</Text>
                <View style={[styles.statusIndicator, { backgroundColor: order.color }]} />
              </View>
              <Text style={styles.cardDescription}>{order.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d8d8d8",
  },
  header: {
    backgroundColor: "#0039A6",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 10,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  menuButton: {
    height: 30,
    width: 30,
  },
  content: {
    marginTop: 80,
    padding: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerLogo: {
    width: 120,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
  },
  statusIndicator: {
    width: 40,
    height: 8,
    borderRadius: 4,
  },
  
});
