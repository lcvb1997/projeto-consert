
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function ProfessionalProfile() {
  return (
    <View style={styles.container}>
      {/* Conteúdo rolável */}
      <ScrollView style={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backText}>{'<'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileIcon}>
            <Text style={styles.iconText}>{'👤'}</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View style={styles.profileCard}>
          <View style={styles.profileTop}>
            <Image source={require('../assets/julio.png')} 
              style={styles.avatar}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.name}>Júlio Cavalcante</Text>
              <Text style={styles.rating}>★★★★★</Text>
            </View>
          </View>

          <Text style={styles.location}>Quixadá – CE</Text>
          <Text style={styles.address}><Text style={styles.bold}>Endereço:</Text> Rua José Maria 123</Text>

          <Text style={styles.experience}>
            <Text style={styles.bold}>Experiência:</Text> 8 anos de experiência no setor de reparos eletrônicos. 
            Especialidades: Reparos de smartphones, tablets, notebooks, TVs de LED, LCD e Smart TVs.
          </Text>
          <Text style={styles.formation}>
            <Text style={styles.bold}>Formação:</Text> Curso Técnico em Eletrônica pelo SENAI.
          </Text>

          {/* Ícones de Serviços */}
          <View style={styles.serviceIcons}>
            <View style={styles.serviceItem}>
              <Text>❄️</Text>
              <Text style={styles.serviceText}>Freezers</Text>
            </View>
            <View style={styles.serviceItem}>
              <Text>🌀</Text>
              <Text style={styles.serviceText}>Ventiladores</Text>
            </View>
            <View style={styles.serviceItem}>
              <Text>📱</Text>
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
          <TouchableOpacity style={styles.hireButton}>
            <Text style={styles.hireButtonText}>Contratar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Barra fixa na parte inferior */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('../assets/home.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('../assets/message.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('../assets/star.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('../assets/pro.png')} style={styles.footerProIcon} />
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
  scrollContent: {
    flex: 1,
    paddingBottom: 200,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  backButton: {
    justifyContent: 'center',
  },
  backText: {
    fontSize: 18,
  },
  profileIcon: {
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 24,
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
  hireButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 26,
  },
  footerIcon: {
    width: 25,  // Ajuste se necessário para uma proporção melhor
    height: 25,
    resizeMode: 'contain',
},
  footerProIcon: {
      width: 50, 
      height: 30,
      resizeMode: 'contain',
  },
});
