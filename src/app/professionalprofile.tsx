import React from 'react';
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
        </View>
      </ScrollView>

      {/* Barra fixa na parte inferior */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerIcon}>⭐</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.hireButton}>
          <Text style={styles.hireButtonText}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerProButton}>
          <Text style={styles.footerProText}>Pro.</Text>
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
    paddingBottom: 110,
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 16,
    color: '#000',
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  address: {
    fontSize: 14,
    marginTop: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
  experience: {
    marginTop: 12,
    fontSize: 14,
  },
  formation: {
    marginTop: 8,
    fontSize: 14,
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
    paddingVertical: 10,
    borderRadius: 30,
    marginTop: 10,
    alignItems: 'center',
  },
  socialButtonFacebook: {
    backgroundColor: '#3b5998',
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  socialButtonInstagram: {
    backgroundColor: '#C13584',
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#0044CC', 
    borderTopWidth: 1,
    borderColor: '#ddd',
    position: 'absolute',
    bottom: 30, 
    left: 10,
    right: 10,
    borderRadius: 50, 
  },
  footerButton: {
    flex: 1,
    alignItems: 'center',
  },
  footerProButton: {
    backgroundColor: '#ff5a32',
    borderRadius: 30,
    alignItems: 'center',
    paddingVertical: 10,
    marginLeft: 20, // Mais espaço para a direita
    paddingHorizontal: 20,
  },
  hireButton: {
    flex: 1,
    backgroundColor: '#0044CC',
    borderRadius: 30,
    alignItems: 'center',
    paddingVertical: 10,
    marginLeft: 10,
  },
  hireButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerIcon: {
    fontSize: 24,
  },
  footerProText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
