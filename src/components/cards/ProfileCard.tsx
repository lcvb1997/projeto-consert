import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProfileCard = ({ name, image, rating }) => {
  return (
    <View style={styles.card}>
      <View style={styles.topSection}>
        <Image source={image} style={styles.avatar} />
        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.iconsRow}>
        <Text style={styles.icon}>🔧</Text>
        <Text style={styles.icon}>💻</Text>
        <Text style={styles.icon}>📱</Text>
      </View>

      <View style={styles.starsRow}>
      {[...Array(rating)].map((_, index) => (
        <Text key={index}>⭐</Text>
      ))}
      </View>

      <Text style={styles.button}>Perfil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#112244",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
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
    fontSize: 11,
    fontWeight: "bold",
  },
  iconsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 8,
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
    color: "minha-cor",
    backgroundColor: "#0044FF",
    paddingVertical: 6,
    borderRadius: 6,
    fontWeight: "bold",
  },
});

export default ProfileCard;
