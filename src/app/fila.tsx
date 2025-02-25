import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, Easing } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Font from "expo-font"; // Importa a API de fontes do Expo
import { useRouter } from "expo-router"; // Usando useRouter para navegação

export default function OrderDetails() {
  const [containerWidth, setContainerWidth] = useState(0);
  const [statusText, setStatusText] = useState("na fila");
  const [buttonColor, setButtonColor] = useState("#333");
  const [statusContainerColor, setStatusContainerColor] = useState("#863A3A");
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  const statusContainerWidth = 160;

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Funnel-Display": require("../assets/fonts/Funnel-Display.ttf"),
        "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"),
      });
      setFontsLoaded(true);
    };

    loadFonts();

    const timer = setTimeout(() => {
      Animated.timing(slideAnim, {
        toValue: containerWidth - statusContainerWidth + 20,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }, 2000);

    slideAnim.addListener(({ value }) => {
      const progress = (value / (containerWidth - statusContainerWidth + 20)) * 100;

      if (progress === 100) {
        setStatusText("concluído");
        setStatusContainerColor("#377529");
        setButtonColor("#377529");
      } else if (progress >= 10) {
        setStatusText("em reparo");
        setStatusContainerColor("#856F30");
        setButtonColor("#333");
      } else if (progress <= 25) {
        setStatusText("na fila");
        setStatusContainerColor("#863A3A");
        setButtonColor("#333");
      }
    });

    return () => {
      slideAnim.removeAllListeners();
      clearTimeout(timer);
    };
  }, [containerWidth]);

  if (!fontsLoaded) {
    return null;
  }

  const handleButtonClick = () => {
    if (statusText === "concluído") {
      router.push("/avaliacao");
    } else {
      alert("O pedido ainda não foi concluído!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerLogo} onPress={() => router.push("/homepage")}>
          <Image source={require('../assets/logo_blue.png')} style={styles.headerLogo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => router.push("/perfil")}>
          <MaterialIcons name="person" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.clientInfo}>
        <Image source={require('../assets/julio.png')} style={styles.profileImage} />
        <View>
          <Text style={styles.clientName}>Júlio Cavalcante</Text>
          <Text style={styles.clientLocation}>Quixadá – CE</Text>
          <Text style={styles.clientAddress}>Endereço: Rua José Maria 123</Text>
        </View>
      </View>

      <View
        style={styles.orderCard}
        onLayout={(event) => setContainerWidth(event.nativeEvent.layout.width)}
      >
        <View style={styles.sliderBackground}>
          <Animated.View style={[styles.statusContainer, { transform: [{ translateX: slideAnim }], backgroundColor: statusContainerColor }]}>
            <Text style={styles.status}>{statusText}</Text>
          </Animated.View>
        </View>
        <Text style={styles.orderDescription}>Galaxy S21 está apresentando {"\n"} problemas na tela.</Text>
        <TouchableOpacity style={[styles.completeButton, { backgroundColor: buttonColor }]} onPress={handleButtonClick}>
          <Text style={styles.completeButtonText}>Marcar como concluído</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => router.push("/homepage")}>
          <Image source={require("../assets/home.png")} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => router.push("/orderscreen")}>
          <Image source={require("../assets/message.png")} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => router.push("/avaliacaoservico")}>
          <Image source={require("../assets/star.png")} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => router.push("/telapro")}>
          <Image source={require("../assets/pro.png")} style={styles.footerProIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}



// Estilos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
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
    backgroundColor: '#e9501a',
  },
  headerLogo: {
    width: 120,
  },
  menuButton: {
    height: 30,
    width: 30,
  },
  clientInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 3,
    marginTop: 80,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  clientName: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Funnel-Display", // Fonte Funnel Display para negrito
  },
  clientLocation: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    fontFamily: "Sora-Regular", // Fonte Sora para o restante
  },
  clientAddress: {
    fontSize: 14,
    color: "#777",
    fontFamily: "Sora-Regular", // Fonte Sora para o restante
  },
  orderCard: {
    alignItems: 'center',
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    marginTop: 20,
    padding: 16,
    borderRadius: 10,
    elevation: 3,
    borderWidth: 1,  // Adiciona a borda
    borderColor: "#000",  // Define a cor da borda como preta
  },
  sliderBackground: {
    width: "100%", // Agora usa toda a largura disponível
    height: 32,
    backgroundColor: "#E0E0E0",
    borderRadius: 20,
    justifyContent: "center",
    padding: 4,
    marginBottom: 10,
    borderWidth: 1,  // Adiciona a borda
    borderColor: "#000",  // Define a cor da borda como preta
  },
  statusContainer: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    width: 100, // Largura fixa para garantir que o statusContainer não ultrapasse os limites
  },
  status: {
    color: "white",
    fontWeight: "normal",
    fontSize: 13, // Ajuste o tamanho da fonte para caber no espaço
    fontFamily: "Sora-Regular", // Fonte Sora para o status
  },
  orderDescription: {
    fontSize: 18,
    color: "#333",
    marginBottom: 16,
    fontFamily: "Sora-Regular", // Fonte Sora para o restante
  },
  completeButton: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: "center",
  },
  completeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "normal",
    fontFamily: "Sora-Regular", // Fonte Sora para o restante
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: 20,
    paddingHorizontal: 40,
    paddingVertical: 25,
    backgroundColor: '#0044CC',
    borderTopWidth: 1,
    borderColor: '#ddd',
    marginTop: 'auto',
    bottom: 30,
    borderRadius: 50,
    zIndex: 10,
    width: '85%',
  },
  footerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  footerProIcon: {
    width: 50,
    height: 30,
    resizeMode: 'contain',
  },
});
