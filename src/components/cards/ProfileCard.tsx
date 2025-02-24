import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {Link} from 'expo-router';

// Definir os tipos das props
interface ProfileCardProps {
  name: string;
  image: any;
  rating: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, image, rating }) => {
  return (
    <View style={styles.card}>
      <View style={styles.topSection}>
        <Image source={image} style={styles.avatar} />
        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.iconsRow}>
        <Image source={require('../../assets/freezer.png')} style={styles.icon} />
        <Image source={require('../../assets/fan.png')} style={styles.icon} />
        <Image source={require('../../assets/phone.png')} style={styles.icon} />
      </View>

      <View style={styles.starsRow}>
        {[...Array(Math.floor(rating))].map((_, index) => (
          <Text key={index}>⭐</Text>
        ))}
      </View>
      
      <Text style={styles.button}>
        <Link href="/professionalprofile">
        Perfil
        </Link>
      </Text>
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
    height: 20,
    width: 20,
    marginHorizontal: 4,
  },
  starsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 8,
  },
  button: {
    textAlign: "center",
    color: "#FFF",
    backgroundColor: "#0044FF",
    paddingVertical: 6,
    borderRadius: 6,
    fontWeight: "bold",
  },
});

export default ProfileCard;
