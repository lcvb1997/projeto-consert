import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {Link} from 'expo-router';
import {Linking} from 'react-native';

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.backButton}>
        <Link href="/helloscreen">
          <FontAwesome name="arrow-left" size={24} color="white" />
        </Link>
      </TouchableOpacity>

      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Preencha os dados</Text>
      
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Digite seu email" />
      
      <Text style={styles.label}>Senha</Text>
      <View style={styles.passwordContainer}>
        <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry />
        <FontAwesome name="eye" size={20} color="black" style={styles.eyeIcon} />
      </View>
      
      <View style={styles.rememberContainer}>
        <TouchableOpacity style={styles.checkbox} />
        <Text style={styles.rememberText}>Lembrar login</Text>
      </View>
      
      <TouchableOpacity style={styles.loginButton}>
        <Link href="/homepage">
        <Text style={styles.buttonText}>ENTRAR</Text>
        </Link>
      </TouchableOpacity>
      
      <Text style={styles.orText}>Ou realize o login com</Text>
      
      <TouchableOpacity style={styles.socialButton} onPress={() => Linking.openURL('https://www.facebook.com/?stype=lo&flo=1&deoia=1&jlou=Afefquq9xHx99tTvyA7-l3GBAHF6jNVN_Ryx4jMbb7AduQEmK6txneCVrBAk4kfWnoEZ7EDX8bA3BHHpJc8x93fiy8U5Mkcio_qVjmVPACVnmA&smuh=27579&lh=Ac_LMJPQJmLW56db32c')}>
              <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
              <Text style={styles.socialText}>Entrar com Facebook</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.socialButton} onPress={() => Linking.openURL('https://accounts.google.com/InteractiveLogin/signinchooser?elo=1&ifkv=ASSHykqxqylYRuVyWBGkdBAVuQIfi2JZN6eG3vwgjrxPFC31wjfP6GN4A567se7NloYYEbLvsPhV&ddm=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin')}>
              <Image source={require('../assets/google.png')} style={styles.socialIcon} />
              <Text style={styles.socialText}>Entrar com Google</Text>
            </TouchableOpacity>
      
      <Text style={styles.footerText}>Não tem uma conta?
        <Link href="/signupscreen">
          <Text style={styles.signupText}> Cadastre-se</Text>
        </Link>
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
