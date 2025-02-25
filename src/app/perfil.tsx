import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { useNavigation } from '@react-navigation/native';
import { useRouter } from "expo-router";

export default function Profile() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // Estado para controle da edição
  const [email, setEmail] = useState("usuario@gmail.com");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [cidade, setCidade] = useState("Quixadá-CE");
  const navigation = useNavigation();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false); // Controle de visibilidade da senha
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Controle de visibilidade da confirmação de senha

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
    return null; // Renderiza nada enquanto as fontes estão sendo carregadas
  }

  const handleEditProfile = () => {
    setIsEditing(true); // Ativa o modo de edição
  };

  const handleSaveChanges = () => {
    // Aqui você pode adicionar validações e lógica para salvar as alterações
    if (senha !== confirmSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    // Lógica para salvar os dados (por exemplo, enviar para o backend)
    setIsEditing(false); // Desativa o modo de edição após salvar
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerLogo} onPress={() => router.push("/homepage")}>
          <Image source={require('../assets/logo_blue.png')} style={styles.headerLogo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => router.push("/perfil")}>
          <MaterialIcons name="menu" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Conteúdo do Perfil */}
      <View style={styles.profileContainer}>
        <Image source={require("../assets/profile.png")} style={styles.profileImage} />
        <Text style={styles.usuario}>Usuário01</Text>

        {/* Exibição do email */}
        {isEditing ? (
          <>
            <TextInput
              style={styles.inputField}
              value={email}
              onChangeText={setEmail}
              placeholder="Digite seu e-mail"
              keyboardType="email-address"
            />
            <Text style={styles.hintText}>Digite o e-mail associado à sua conta.</Text>
          </>
        ) : (
          <Text style={[styles.email, { textDecorationLine: 'underline' }]}>{email}</Text>
        )}

        {/* Exibição da cidade */}
        {isEditing ? (
          <>
            <TextInput
              style={styles.inputField}
              value={cidade}
              onChangeText={setCidade}
              placeholder="Cidade"
            />
            <Text style={styles.hintText}>Digite a região onde você mora.</Text>
          </>
        ) : (
          <Text style={styles.city}>{cidade}</Text>
        )}

        {/* Campos de senha e confirmação de senha (somente no modo de edição) */}
        {isEditing && (
          <>
            <View style={styles.passwordContainer}>
              <TextInput
                style={[styles.inputField, styles.passwordInput]}
                value={senha}
                onChangeText={setSenha}
                placeholder="Senha"
                secureTextEntry={!showPassword} // Controle de visibilidade
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeButton}>
                <MaterialIcons
                  name={showPassword ? "visibility-off" : "visibility"}
                  size={24}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.hintText}>A senha deve ter no mínimo 6 caracteres.</Text>

            <View style={styles.passwordContainer}>
              <TextInput
                style={[styles.inputField, styles.passwordInput]}
                value={confirmSenha}
                onChangeText={setConfirmSenha}
                placeholder="Confirme a Senha"
                secureTextEntry={!showConfirmPassword} // Controle de visibilidade
              />
              <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeButton}>
                <MaterialIcons
                  name={showConfirmPassword ? "visibility-off" : "visibility"}
                  size={24}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.hintText}>Confirme a senha digitada anteriormente.</Text>
          </>
        )}

        {/* Botão Editar Perfil ou Salvar alterações */}
        {isEditing ? (
          <TouchableOpacity style={styles.editButton} onPress={handleSaveChanges}>
            <Text style={styles.buttonText}>Salvar Alterações</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
            <Text style={styles.buttonText}>Editar Perfil</Text>
          </TouchableOpacity>
        )}

        {/* Botões de Ações */}
        {!isEditing && (
          <>
            <TouchableOpacity style={styles.actionButton} onPress={() => router.push("/orderscreen")}>
              <Text style={styles.buttonText}>Pedidos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionButton, styles.evaluationButton]} onPress={() => router.push("/avaliacaoservico")}>
              <Text style={styles.evaluateButtonText}>Avaliações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionButton, styles.termsButton]}>
              <Text style={styles.termsText}>Termos de Uso</Text>
            </TouchableOpacity>
          </>
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
  menuButton: {
    height: 30,
    width: 30,
  },
  headerLogo: {
    width: 120,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 80,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  usuario: {
    fontSize: 18,
    fontFamily: "Sora-Regular",
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  email: {
    fontSize: 18,
    fontFamily: "Sora-Regular",
    color: "#333",
    marginBottom: 5,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 12,
    borderRadius: 30,
    fontSize: 18,
    marginBottom: 10,
    width: "80%",
  },
  passwordInput: {
    flex: 1,
  },
  city: {
    fontSize: 16,
    fontFamily: "Sora-Regular",
    color: "#777",
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginBottom: 10,
  },
  eyeButton: {
    position: "absolute",
    right: 10,
    padding: 8,
  },
  hintText: {
    fontSize: 14,
    fontFamily: "Sora-Regular",
    color: "#888",
    marginBottom: 15,
    width: "80%",
    textAlign: "left",
  },
  editButton: {
    backgroundColor: "#E4552D",
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
    width: "50%",
    marginBottom: 45,
  },
  actionButton: {
    backgroundColor: "#0037AD",
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
    width: "80%",
    marginBottom: 10,
  },
  evaluationButton: {
    borderColor: "#E4552D",
    borderWidth: 1,
    backgroundColor: "white",
  },
  termsButton: {
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "regular",
    fontFamily: "Sora-Regular",
  },
  evaluateButtonText: {
    color: "#E4552D",
    fontSize: 16,
    fontWeight: "regular",
    fontFamily: "Sora-Regular",
  },
  termsText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "regular",
    fontFamily: "Sora-Regular",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    gap: 20,
    paddingHorizontal: 40,
    paddingVertical: 25,
    backgroundColor: "#E9501A",
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

