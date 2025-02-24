import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import Pesquisar from "../components/pesquisar";
import { Banner } from "../components/horizontal";
import ProfileCard from "../components/cards/ProfileCard";

const HomePage = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const menuButtonRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity ref={menuButtonRef} style={styles.menuButton} onPress={toggleDropdown}>
          <MaterialIcons name="menu" size={30} color="white" />
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

      {/* Dropdown Menu */}
      {isDropdownVisible && ( 
        <View style={styles.dropdownMenu}>
          <TouchableOpacity style={styles.dropdownItem}>
          <Link href='/closedorder'>
          <Text style={styles.dropdownText}>Pedidos Concluídos</Text>
          </Link>
           
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text style={styles.dropdownText}>Configurações</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text style={styles.dropdownText}>Sair</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Pesquisar />
          <Banner />
        </View>

        <View style={styles.cardsContainer}>
          <ProfileCard name="Júlio Cavalcante" image={require("../assets/julio.png")} rating={5} />
        </View>

        <View style={styles.cardsContainer}>
          {/* Outros Conteúdos */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0F24",
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
  profileIcon: {
    height: 50,
    width: 50,
  },
  headerLogo: {
    width: 120,
  },
  footerButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    paddingHorizontal: 16,
    paddingTop: 100,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 60, // Agora o menu está logo abaixo do botão de menu
    backgroundColor: '#fff',
    width: 150,  // Largura ajustada
    borderRadius: 8,
    elevation: 5, // Sombra para o efeito de modal
    zIndex: 20,
  },
  dropdownItem: {
    paddingVertical: 8, // Tamanho menor para os itens
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  dropdownText: {
    fontSize: 14,  // Fonte menor
    color: '#333',
  },
});

export default HomePage;
