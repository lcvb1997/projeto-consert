import React, { useState, useEffect } from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { useRouter } from "expo-router";

const orders = [
  {
    status: "Galaxy S21",
    description: "Galaxy S21 está apresentando problemas na tela. A parte...",
    color: "#2E7D32",
  },
  {
    status: "IPhone 13",
    description: "Olá amigo, preciso trocar a placa de som do IPhone 13, quanto sairia o serviço por...",
    color: "#2E7D32",
  },
  {
    status: "Zenfone 7",
    description: "Meu Zenfone caiu na água e desde então apresenta erros na tela que...",
    color: "#2E7D32",
  },
];

export default function OrdersScreen() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Funnel-Display": require("../assets/fonts/Funnel-Display.ttf"),
        "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerLogo} onPress={() => router.push("/homepage")}> 
          <Image source={require("../assets/logo_blue.png")} style={styles.headerLogo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <MaterialIcons name="search" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Pedidos Concluídos</Text>

      <ScrollView contentContainerStyle={styles.content}>
        {orders.map((order, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{order.status}</Text>
              <View style={[styles.statusIndicator, { backgroundColor: order.color }]} />
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
    backgroundColor: "#0039A6",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    fontFamily: "Funnel-Display",
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
    fontFamily: "Funnel-Display",
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
    fontFamily: "Sora-Regular",
  },
  statusIndicator: {
    width: 40,
    height: 8,
    borderRadius: 4,
  },
});