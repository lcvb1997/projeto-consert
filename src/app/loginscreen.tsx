import { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Linking } from 'react-native';
import db from '../../db.json';

const LoginScreen: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const validarLogin = () => {
    const conta = db.contas.find((conta) => conta.username === email);

    // verificação p saber se o usuário foi encontrado e se a senha bate
    if (conta) {
      if (conta.senha === senha) {
        Alert.alert('Sucesso', 'Login bem-sucedido!');
        router.push("/homepage"); // Vai para a página principal se o login funcionar
      } else {
        Alert.alert('Erro', 'Senha incorreta!');
      }
    } else {
      Alert.alert('Erro', 'Usuário não encontrado!');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.push("/helloscreen")}>
        <FontAwesome name="arrow-left" size={24} color="white" />
      </TouchableOpacity>

      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Preencha os dados</Text>
      
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
      />
      
      <Text style={styles.label}>Senha</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <FontAwesome name="eye" size={20} color="black" style={styles.eyeIcon} />
      </View>
      
      <View style={styles.rememberContainer}>
        <TouchableOpacity style={styles.checkbox} />
        <Text style={styles.rememberText}>Lembrar login</Text>
      </View>
      
      <TouchableOpacity style={styles.loginButton} onPress={validarLogin}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
      
      <Text style={styles.orText}>Ou realize o login com</Text>
      
      <TouchableOpacity style={styles.socialButton} onPress={() => Linking.openURL('https://www.facebook.com')}>
        <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
        <Text style={styles.socialText}>Entrar com Facebook</Text>
      </TouchableOpacity>
            
      <TouchableOpacity style={styles.socialButton} onPress={() => Linking.openURL('https://accounts.google.com')}>
        <Image source={require('../assets/google.png')} style={styles.socialIcon} />
        <Text style={styles.socialText}>Entrar com Google</Text>
      </TouchableOpacity>
      
      <Text style={styles.footerText}>
        Não tem uma conta?
        <Text style={styles.signupText} onPress={() => router.push("/signupscreen")}> Cadastre-se</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 100,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001F3F',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#999',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#fff',
    marginRight: 10,
  },
  rememberText: {
    fontSize: 14,
    color: '#fff',
  },
  loginButton: {
    backgroundColor: '#E65100',
    padding: 15,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  orText: {
    fontSize: 14,
    color: '#999',
    marginVertical: 10,
  },
  socialButton: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center', 
    justifyContent: 'center', 
    elevation: 2,
    marginBottom: 10,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialText: {
    fontSize: 16,
    color: '#000',
  },
  footerText: {
    fontSize: 14,
    color: '#fff',
    marginTop: 10,
  },
  signupText: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
