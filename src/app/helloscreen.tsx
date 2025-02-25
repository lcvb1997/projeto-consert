import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import * as Font from 'expo-font';

const HelloScreen = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Funnel-Display': require('../assets/fonts/Funnel-Display.ttf'),
        'Sora-Regular': require('../assets/fonts/Sora-Regular.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Não renderiza nada enquanto as fontes não estiverem carregadas
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.subtitle}>Cadastre-se ou realize {"\n"} o login para continuar</Text>

      <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/loginscreen')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpButton} onPress={() => router.push('/signupscreen')}>
        <Text style={styles.buttonText}>Criar conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueWithoutLoginButton}>
        <Text style={styles.continueText}>Continuar sem login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001F3F',
    paddingHorizontal: 20,
  },
  logo: {
    width: 250,
    height: 150,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 19,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 40,
    fontFamily: 'Sora-Regular', // Fonte Sora para o subtítulo
  },
  loginButton: {
    width: '80%',
    backgroundColor: '#1E90FF',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15,
  },
  signUpButton: {
    width: '80%',
    backgroundColor: '#FF4500',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15,
  },
  continueWithoutLoginButton: {
    width: '80%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'normal',
    fontFamily: 'Sora-Regular', // Fonte Funnel Display para os botões
  },
  continueText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Sora-Regular', // Fonte Sora para o texto
  },
  link: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default HelloScreen;
