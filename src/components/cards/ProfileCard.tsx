import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';

// Definir os tipos das props
interface ProfileCardProps {
  name: string;
  image: any;
  rating: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, image, rating }) => {
  const router = useRouter();

  return (
    <View style={styles.card}>
      <View style={styles.topSection}>
        <Image source={image} style={styles.avatar} />
        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.iconsRow}>
        <Image source={require('../../assets/freezer-blue.png')} style={styles.icon} />
        <Image source={require('../../assets/fan-blue.png')} style={styles.icon} />
        <Image source={require('../../assets/phone-blue.png')} style={styles.icon} />
      </View>

      <View style={styles.starsRow}>
        {[...Array(Math.floor(rating))].map((_, index) => (
          <Text key={index}>⭐</Text>
        ))}
      </View>
      
      <TouchableOpacity onPress={() => router.push('/professionalprofile')}>
        <Text style={styles.button}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#0037AD',
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 15,
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
    color: "#000",
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
    paddingVertical: 10,
    borderRadius: 10,
    fontWeight: "bold",
  },
});

export default ProfileCard;
