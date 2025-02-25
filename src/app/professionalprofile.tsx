import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

export default function ProfessionalProfile() {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerLogo} onPress={() => router.push('/homepage')}>
          <Image source={require('../assets/logo_blue.png')} style={styles.headerLogo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => router.push('/perfil')}>
          <MaterialIcons name="person" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Conteúdo rolável */}
      <ScrollView style={styles.scrollContent}>
        {/* Profile Section */}
        <View style={styles.profileCard}>
          <View style={styles.profileTop}>
            <Image source={require('../assets/julio.png')} style={styles.avatar} />
            <View style={styles.profileInfo}>
              <Text style={styles.name}>Júlio Cavalcante</Text>
              <Text style={styles.rating}>★★★★★</Text>
            </View>
          </View>

          <Text style={styles.location}>Quixadá-CE</Text>
          <Text style={styles.address}><Text style={styles.bold}>Endereço:</Text> Rua José Maria 123</Text>

          <Text style={styles.experience}>
            <Text style={styles.bold}>Experiência:</Text> 8 anos de experiência no setor de reparos eletrônicos com especialidade em Reparos de smartphones, tablets, notebooks, TVs de LED.
          </Text>
          <Text style={styles.formation}>
            <Text style={styles.bold}>Formação:</Text> Curso Técnico em Eletrônica pelo SENAI.
          </Text>

          {/* Ícones de Serviços */}
          <View style={styles.serviceIcons}>
            <View style={styles.serviceItem}>
              <Image source={require('../assets/freezer.png')} style={styles.serviceIcon} />
              <Text style={styles.serviceText}>Freezers</Text>
            </View>
            <View style={styles.serviceItem}>
              <Image source={require('../assets/fan.png')} style={styles.serviceIcon} />
              <Text style={styles.serviceText}>Ventiladores</Text>
            </View>
            <View style={styles.serviceItem}>
              <Image source={require('../assets/phone.png')} style={styles.serviceIcon} />
              <Text style={styles.serviceText}>Smartphones</Text>
            </View>
          </View>

          {/* Botões de Redes Sociais */}
          <TouchableOpacity style={styles.socialButtonWhatsapp}>
            <Text style={styles.socialButtonText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButtonFacebook}>
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButtonInstagram}>
            <Text style={styles.socialButtonText}>Instagram</Text>
          </TouchableOpacity>

          {/* Botão de contratar */}
          <TouchableOpacity style={styles.hireButton} onPress={() => router.push('/pedido')}>
            <Text style={styles.hireButtonText}>Contratar</Text>
          </TouchableOpacity>

          {/* Botão de avaliações */}
          <TouchableOpacity style={styles.ratingButton} onPress={() => router.push('/avaliacaousuario')}>
            <Text style={styles.hireButtonText}>Avaliações</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => router.push('/homepage')}>
          <Image source={require("../assets/home.png")} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => router.push('/orderscreen')}>
          <Image source={require("../assets/message.png")} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => router.push('/avaliacaoservico')}>
          <Image source={require("../assets/star.png")} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => router.push('/telapro')}>
          <Image source={require("../assets/pro.png")} style={styles.footerProIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  loading: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
  scrollContent: {
    flex: 1,
    paddingBottom: 200,
    marginTop: 60,
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
  backButton: {
    height: 30,
    width: 30,
    justifyContent: 'center',
  },
  profileIcon: {
    height: 50,
    width: 50,
  },
  profileCard: {
    backgroundColor: '#D3D3D3',
    margin: 16,
    borderRadius: 16,
    padding: 16,
  },
  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 23,
    color: '#000',
  },
  location: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
  address: {
    fontSize: 18,
    marginTop: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
  experience: {
    marginTop: 16,
    fontSize: 16,
  },
  formation: {
    marginTop: 18,
    fontSize: 16,
  },
  serviceIcon: {
    justifyContent: 'center',
    width: 60,
    height: 60,
  },
  serviceIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  serviceItem: {
    alignItems: 'center',
  },
  serviceText: {
    fontSize: 12,
  },
  socialButtonWhatsapp: {
    backgroundColor: '#25D366',
    paddingVertical: 20,
    borderRadius: 30,
    marginTop: 10,
    alignItems: 'center',
  },
  socialButtonFacebook: {
    backgroundColor: '#3b5998',
    paddingVertical: 20,
    marginTop: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  socialButtonInstagram: {
    backgroundColor: '#C13584',
    paddingVertical: 20,
    marginTop: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 26,
  },
  hireButton: {
    flex: 1,
    backgroundColor: '#E9501A',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    marginTop: 20,
    height: 100,
  },
  ratingButton: {
    flex: 1,
    backgroundColor: '#0044CC',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    marginTop: 10,
    height: 70,
  },
  hireButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 26,
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
