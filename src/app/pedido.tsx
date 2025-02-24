import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Font from "expo-font"; // Importando a função para carregar fontes
import { Link } from "expo-router";
import { useNavigation } from '@react-navigation/native';
export default function Evaluation() {
   const [setFontsLoaded] = useState(false); // Estado para saber se as fontes estão carregadas
  const [code, setCode] = useState(""); // Estado para o código de confirmação
  const [isServiceContracted, setIsServiceContracted] = useState(false); // Estado para verificar se o serviço foi contratado
  const navigation = useNavigation();

  const handleGoBack = () => {
    // Função de voltar ao início
  };

  const handleContractService = () => {
    setIsServiceContracted(true); // Marca que o serviço foi contratado
  };

  useEffect(() => {
      const loadFonts = async () => {
        // Corrigindo o caminho para as fontes
        await Font.loadAsync({
          "Funnel-Display": require("../assets/fonts/Funnel-Display.ttf"),  // Caminho ajustado
          "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"),      // Caminho ajustado
        });
      };
  
      loadFonts();
    }, []); // O useEffect é chamado uma vez quando o componente é montado

  const isButtonDisabled = code.length !== 4; // Verifica se o código tem 4 dígitos

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
              <TouchableOpacity style={styles.menuButton} onPress={() => navigation.goBack()}>
                <MaterialIcons name="arrow-back" size={30} color="white" />         
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerLogo}>
                <Link href="/homepage">
                  <Image source={require('../assets/logo_blue.png')} style={styles.headerLogo} />
                </Link>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuButton}>
                <Link href="/perfil">
                <MaterialIcons name="person" size={30} color="white" />
                </Link>
              </TouchableOpacity>
            </View>

      {/* Descrição de Contratação */}
      <View
        style={[styles.evaluationCard, isServiceContracted && styles.successCard]} // Altera o estilo quando o serviço for contratado
      >
        {!isServiceContracted ? (
          <>
            <Text style={styles.title}>Novo serviço</Text>
            <Text style={styles.descriptionText}>
              Depois de ter fechado o serviço com o seu técnico, digite o código fornecido por ele para poder
              receber notificações sobre o status do serviço, e a avaliação quando concluído.
            </Text>
            <Text style={styles.smallDescriptionText}>
              Essa funcionalidade promove uma relação de confiança, segurança e transparência entre as partes envolvidas.
            </Text>

            {/* Campo de código de confirmação */}
            <TextInput
              style={styles.codeInput}
              maxLength={4} // Limita a 4 dígitos
              keyboardType="numeric"
              value={code}
              onChangeText={setCode}
              placeholder="_ _ _ _"
              placeholderTextColor="#B0B0B0" // Cor para o placeholder
            />

            {/* Botão de Contratar Serviço */}
            <TouchableOpacity
              style={[styles.contractButton, isButtonDisabled && styles.contractButtonDisabled]}
              onPress={handleContractService}
              disabled={isButtonDisabled}
            >
              <Text style={styles.contractButtonText}>Contratar Serviço</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={[styles.title]}>
              Novo Serviço
            </Text>
            {/* Conteúdo após a contratação do serviço */}
            <Image source={require('../assets/success.png')} style={styles.successImage} />
            <Text style={[styles.descriptionText, styles.successText]}>
              Serviço cadastrado com sucesso
            </Text>
            <Text style={styles.smallDescriptionText}>
              Verifique sua caixa de mensagens para maiores notícias sobre seu pedido
            </Text>

            {/* Botões abaixo do texto */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.orderButton}>
                <Link href="/fila">
                <Text style={styles.buttonText}>Acompanhar Pedido</Text>
                </Link>                
              </TouchableOpacity>
              <TouchableOpacity style={styles.homeButton}>
                <Link href="/homepage">
                <Text style={styles.buttonText}>Voltar ao Início</Text>
                </Link>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>

      {/* Footer */}
            <View style={styles.footer}>
              <TouchableOpacity style={styles.footerButton}>
                <Link href="/homepage">
                <Image source={require("../assets/home.png")} style={styles.footerIcon} />
                </Link>
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerButton}>
                <Link href="/orderscreen">
                <Image source={require("../assets/message.png")} style={styles.footerIcon} />
                </Link>          
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerButton}>
                <Image source={require("../assets/star.png")} style={styles.footerIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerButton}>
                <Link href="/telapro">
                <Image source={require("../assets/pro.png")} style={styles.footerProIcon} />
                </Link>          
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
    justifyContent: 'center', // Centraliza todo o conteúdo verticalmente
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
  evaluationCard: {
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    marginTop: 100,
    padding: 24, // Aumenta o padding
    borderRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#000",
    paddingBottom: 50, // Adiciona mais espaço para os campos
    alignItems: 'center', // Centraliza os itens dentro do card
  },
  successCard: {
    borderColor: "green", // Mudança do contorno da tela para verde após o serviço ser contratado
  },
  title: {
    fontSize: 22, // Aumenta o tamanho da fonte do título
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: "Funnel-Display",
  },
  descriptionText: {
    fontSize: 18, // Aumenta a fonte do primeiro texto
    marginBottom: 30,
    color: "#333",
    textAlign: 'center', // Centraliza o texto
    paddingHorizontal: 20,
    fontFamily: "Sora-Regular" // Adiciona um pouco de padding nas laterais
  },
  successText: {
    fontSize: 18,
    color: "green", // Cor verde para o texto após a contratação
    textAlign: 'center',
    marginBottom: 20,
  },
  smallDescriptionText: {
    fontSize: 14, // Aumenta a fonte do segundo texto
    color: "#777",
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily: "Sora-Regular" // Adiciona padding nas laterais
  },
  codeInput: {
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 12,
    borderRadius: 5,
    fontSize: 18,
    textAlign: "center",
    letterSpacing: 10,
    marginBottom: 30,
    color: "#333", // Cor do texto inserido
    width: '80%', // Largura do campo de código
  },
  contractButton: {
    backgroundColor: "#E4552D",
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
    width: '80%', // Largura do botão
  },
  contractButtonDisabled: {
    backgroundColor: "#B0B0B0", // Cor cinza para o botão desabilitado
  },
  contractButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Sora-Regular"
  },
  successImage: {
    marginTop: 20,
    marginBottom: 50, // Espaço abaixo da imagem
  },
  buttonContainer: {
    width: '80%', // Largura dos botões
    marginTop: 20,
  },
  orderButton: {
    backgroundColor: "#0037AD",
    paddingVertical: 20,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 10, // Espaço entre os botões
  },
  homeButton: {
    backgroundColor: "#E4552D",
    paddingVertical: 20,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 10, // Espaço entre os botões
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Sora-Regular"
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
  soraText: {
    fontFamily: "Sora-Regular",  // Usando a fonte Sora
    fontSize: 18,
  },
});
