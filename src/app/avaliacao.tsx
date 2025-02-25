import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Font from "expo-font"; // Importa a API de fontes do Expo
import { useRouter } from "expo-router"; // Substitui Link pelo useRouter
import { useNavigation } from '@react-navigation/native';

export default function Evaluation() {
  const [rating, setRating] = useState(0); // Avaliação em estrelas
  const [description, setDescription] = useState(""); // Descrição da avaliação
  const [isSubmitted, setIsSubmitted] = useState(false); // Estado para verificar se a avaliação foi enviada
  const [fontsLoaded, setFontsLoaded] = useState(false); // Estado para verificar se as fontes foram carregadas
  const router = useRouter(); // Inicializa o useRouter
  const navigation = useNavigation();

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

  const handleRating = (ratingValue: number) => {
    setRating(ratingValue);
  };

  const handleSubmit = () => {
    setIsSubmitted(true); // Marca a avaliação como enviada
  };

  const handleGoBack = () => {
    setIsSubmitted(false); // Volta ao estado inicial (apaga a avaliação)
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={24} color="white" onPress={() => navigation.goBack()} />
        <Image source={require('../assets/logo_blue.png')} style={styles.headerLogo} />
        <MaterialIcons name="person" size={24} color="white" onPress={() => router.push("/perfil")} />
      </View>

      {/* Informações do Cliente */}
      <View style={styles.clientInfo}>
        <Image source={require('../assets/julio.png')} style={styles.profileImage} />
        <View>
          <Text style={styles.clientName}>Júlio Cavalcante</Text>
          <Text style={styles.clientLocation}>Quixadá – CE</Text>
          <Text style={styles.clientAddress}>Endereço: Rua José Maria 123</Text>
        </View>
      </View>

      {/* Avaliação */}
      <View style={[styles.evaluationCard, isSubmitted && styles.successCard]}>
        {!isSubmitted ? (
          <>
            <Text style={styles.title}>Deixe sua avaliação sobre o serviço prestado por este profissional:</Text>
            <TextInput
              style={styles.descriptionInput}
              placeholder="Digite sua avaliação aqui..."
              multiline
              numberOfLines={4}
              value={description}
              onChangeText={setDescription}
            />

            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>Avalie com estrelas:</Text>
              <View style={styles.stars}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <TouchableOpacity key={star} onPress={() => handleRating(star)}>
                    <MaterialIcons
                      name={star <= rating ? "star" : "star-border"}
                      size={30}
                      color={star <= rating ? "#FFD700" : "#B0B0B0"}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Enviar Avaliação</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.successContent}>
            <Image source={require('../assets/success.png')} style={styles.successImage} />
            <Text style={styles.successText}>Serviço avaliado com sucesso!</Text>
            <TouchableOpacity style={styles.goBackButton} onPress={() => router.push("/homepage")}>
              <Text style={styles.goBackButtonText}>Voltar ao Início</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => router.push("/homepage")}>
          <Image source={require("../assets/home.png")} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => router.push("/orderscreen")}>
          <Image source={require("../assets/message.png")} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
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
    backgroundColor: "#E4552D",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  headerLogo: {
    width: 120,
  },
  clientInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 3,
    marginTop: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  clientName: {
    fontSize: 18,
    fontFamily: "Funnel-Display", // Fonte Funnel Display para negrito
    fontWeight: "bold",
  },
  clientLocation: {
    fontSize: 16,
    fontFamily: "Sora-Regular", // Fonte Sora para o restante
    fontWeight: "bold",
    color: "#555",
  },
  clientAddress: {
    fontSize: 14,
    fontFamily: "Sora-Regular",
    color: "#777",
  },
  evaluationCard: {
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    marginTop: 70,
    padding: 16,
    borderRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#000",
  },
  successCard: {
    padding: 50,
    borderColor: "green", // Muda a cor da borda para verde quando enviado
  },
  successContent: {
    alignItems: "center", // Centraliza os itens de sucesso
  },
  successImage: {
    marginBottom: 20, // Espaço abaixo da imagem
  },
  title: {
    fontSize: 18,
    fontFamily: "Funnel-Display", // Fonte Funnel Display para negrito
    fontWeight: "bold",
    marginBottom: 10,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 10,
    borderRadius: 5,
    fontSize: 14,
    fontFamily: "Sora-Regular", // Fonte Sora para o restante
    marginBottom: 20,
    height: 100,
  },
  ratingContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingText: {
    fontSize: 16,
    fontFamily: "Funnel-Display", // Fonte Funnel Display para negrito
    fontWeight: "bold",
    marginBottom: 10,
  },
  stars: {
    flexDirection: "row",
    gap: 10,
  },
  submitButton: {
    backgroundColor: "#E4552D",
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Funnel-Display", // Fonte Funnel Display para negrito
    fontWeight: "bold",
  },
  successText: {
    fontSize: 18,
    color: "green",
    fontFamily: "Sora-Regular", // Fonte Sora para o restante
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20, // Espaço abaixo do texto de sucesso
  },
  goBackButton: {
    backgroundColor: "#E4552D",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  goBackButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Funnel-Display", // Fonte Funnel Display para negrito
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    gap: 20,
    paddingHorizontal: 40,
    paddingVertical: 25,
    backgroundColor: "#0044CC",
    borderTopWidth: 1,
    borderColor: "#ddd",
    marginTop: "auto",
    bottom: 30,
    borderRadius: 50,
    zIndex: 10,
    width: "85%",
  },
  footerButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  footerIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  footerProIcon: {
    width: 50,
    height: 30,
    resizeMode: "contain",
  },
});
