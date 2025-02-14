import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Header } from "../components/header";
import Pesquisar from "../components/pesquisar";
import { Banner } from "../components/horizontal";
import ProfileCard from "../components/cards/ProfileCard";
import AdBanner from "../components/AdBanner";
import Paginas from "../components/Paginas";
import NavBar from "../components/NavBar";

const Index = () => {
  return (
    <View style={styles.container}>
      {/* Conteúdo rolável */}
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Header />
          <Pesquisar />
          <Banner />
        </View>
        
        <Header />
        <Pesquisar />
        <Banner />
      </View>
      
      <View style={styles.cardsContainer}>
        <ProfileCard name="Romero Brito" image={require("../assets/Rectangle.png")} rating={2} />
        <ProfileCard name="Júlio Cavalcante" image={require("../assets/Rectangle.png")} rating={4} />
        <ProfileCard name="Peter Parker" image={require("../assets/Rectangle.png")} rating={5} />
        <ProfileCard name="Raimundo Nonato" image={require("../assets/Rectangle.png")} rating={4} />
      </View>

        <View style={styles.cardsContainer}>
          <ProfileCard name="Romero Brito" image={require("../assets/Rectangle.png")} rating={2} />
          <ProfileCard name="Júlio Cavalcante" image={require("../assets/Rectangle.png")} rating={4} />
          <ProfileCard name="Peter Parker" image={require("../assets/Rectangle.png")} rating={5} />
          <ProfileCard name="Raimundo Nonato" image={require("../assets/Rectangle.png")} rating={4} />
        </View>
        <Paginas totalPages={3} currentPage={1} onPageChange={3} />
      </ScrollView>

      {/* Botão fixo na parte inferior */}
      <NavBar />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0F24",
  },
  scrollContainer: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
  },
  navbarContainer: {
    position: "absolute",
    bottom: 50, // 🔥 Subindo o botão mais na tela
    left: 0,
    right: 0,
    alignItems: "center", // Centraliza o botão
  },
});


export default Index;
