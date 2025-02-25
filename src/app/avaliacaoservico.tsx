import React, { useState, useEffect } from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Font from "expo-font"; // Importa a API de fontes do Expo
import { useNavigation } from '@react-navigation/native';
import { useRouter } from "expo-router";

const orders = [
  {
    status: "Júlio Cavalcante - Galaxy S21",
    description: " O Júlio foi super atencioso desde o início, explicando cada etapa do reparo do meu celular.",
    rating: "★★★★★",
    color: "#2E7D32",
  },
];

export default function OrdersScreen() {
  const [fontsLoaded, setFontsLoaded] = useState(false); // Estado para verificar se as fontes foram carregadas
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Funnel-Display": require("../assets/fonts/Funnel-Display.ttf"),
        "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"),
      });
      setFontsLoaded(true); // Marca que as fontes foram carregadas
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Renderiza nada enquanto as fontes estão sendo carregadas
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerLogo} onPress={() => router.push('/homepage')}>
          <Image source={require('../assets/logo_blue.png')} style={styles.headerLogo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <MaterialIcons name="search" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Adicionando o texto "Pedidos" */}
      <Text style={styles.title}>Minhas Avaliações</Text>

      <ScrollView contentContainerStyle={styles.content}>
        {orders.map((order, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{order.status}</Text>
              <Text style={styles.statusIndicator}>{order.rating}</Text>
            </View>
            <Text style={styles.cardDescription}>{order.description}</Text>
          </View>
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
    backgroundColor: "#E9501A",
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
  headerLogo: {
    width: 120,
  },
  menuButton: {
    height: 30,
    width: 30,
  },
  content: {
    padding: 16,
  },
  title: {
    marginTop: 80,
    fontSize: 20,
    textAlign: "center",
    marginVertical: 16,
    color: "#000",
    fontFamily: "Funnel-Display", // Fonte Funnel Display para negrito
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: "Funnel-Display", // Fonte Funnel Display para negrito
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
    fontFamily: "Sora-Regular", // Fonte Sora para o restante
  },
  statusIndicator: {
    fontSize: 16,
  },
});
