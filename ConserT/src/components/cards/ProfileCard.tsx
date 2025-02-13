import React from "react";
import { View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";

// Definindo os tipos das props
interface ProfileCardProps {
  name: string;
  image: ImageSourcePropType;
  rating: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, image, rating }) => {
  return (
    <View style={styles.card}>
      <View style={styles.topSection}>
        <Image 
    source={require('../../assets/homi.png')}
    style={{ width: 40, height: 40, marginRight: 12 }} 
    resizeMode="contain"
         />

        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.iconsRow}>
        <Image 
            source={require('../../assets/ventiladores.png')}
            style={{ width: 25, height: 25 }} // 🔹 Define tamanho exato
            resizeMode="contain" // 🔹 Mantém a proporção correta
            />
        <Image 
            source={require('../../assets/celulares.png')}
            style={{ width: 25, height: 25 }} // 🔹 Define tamanho exato
            resizeMode="contain" // 🔹 Mantém a proporção correta
            />
        <Image 
            source={require('../../assets/outros.png')}
            style={{ width: 25, height: 25 }} // 🔹 Define tamanho exato
            resizeMode="contain" // 🔹 Mantém a proporção correta
            />
      </View>

      <View style={styles.starsRow}>
        {[...Array(rating)].map((_, index) => (
          <Text key={index} style={styles.star}>⭐</Text>
        ))}
      </View>

      <Text style={styles.button}>Perfil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "48%",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 3, // Adicionando borda
    borderColor: "#0044FF", // Cor da borda
  },
  topSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    color: "#FFF",
    fontSize: 13,
    fontWeight: "bold",
    flexShrink: 1,  // 🔹 Permite que o texto quebre linha
    maxWidth: 100,   // 🔹 Define um limite para a largura do nome
  },
  
  iconsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 8,
    gap: 5, // Adiciona espaçamento uniforme entre os elementos
  },
  icon: {
    fontSize: 16,
    marginHorizontal: 4,
  },
  starsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 8,
  },
  star: {
    fontSize: 16,
  },
  button: {
    textAlign: "center",
    color: "#FFF", // Corrigindo a cor do texto
    backgroundColor: "#0044FF",
    paddingVertical: 6,
    borderRadius: 6,
    fontWeight: "bold", 
  },
});

export default ProfileCard;