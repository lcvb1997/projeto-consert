import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HelloScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.subtitle}>Cadastre-se ou realize {"\n"} o login para continuar</Text>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.buttonText}>criar conta</Text>
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
    fontWeight: 'bold',
  },
  continueText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default HelloScreen;
