import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

// Tipando as categorias
interface Category {
  icon: string;
  label: string;
}

const categories: Category[] = [
  { icon: "❄", label: "Freezers" },
  { icon: "🌀", label: "ventiladores" },
  { icon: "📱", label: "smartphones" },
  { icon: "💻", label: "Computadores" },
  { icon: "🔧", label: "Outros" },
];

// Tipando os técnicos
interface Technician {
  name: string;
  rating: number;
  badges: string[];
  image: string;
}

const technicians: Technician[] = [
  {
    name: "Júlio Cavalcante",
    rating: 4,
    badges: ["🔧", "🛠", "📱"],
    image: "",
  },
  {
    name: "Júlio Cavalcante",
    rating: 4,
    badges: ["🔧", "🛠", "📱"],
    image: "",
  },
  {
    name: "Júlio Cavalcante",
    rating: 4,
    badges: ["🔧", "🛠", "📱"],
    image: "",
  },
  {
    name: "Júlio Cavalcante",
    rating: 4,
    badges: ["🔧", "🛠", "📱"],
    image: "",
  },
];

// Tipando o componente TechnicianCard
interface TechnicianCardProps {
  technician: Technician;
}

const TechnicianCard: React.FC<TechnicianCardProps> = ({ technician }) => (
  <View style={styles.card}>
    <View style={styles.cardContent}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          {technician.image ? (
            <Image source={{ uri: technician.image }} style={styles.avatarimage} />
          ) : (
            <Text style={styles.avatarText}>JC</Text>
          )}
        </View>
        <Text style={styles.technicianName}>{technician.name}</Text>
      </View>

      <View style={styles.badgesContainer}>
        {technician.badges.map((badge, i) => (
          <View key={i} style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        ))}
      </View>

      <View style={styles.ratingContainer}>
        {[...Array(5)].map((_, i) => (
          <MaterialIcons
            key={i}
            name="star"
            size={18}
            color={i < technician.rating ? "#FFD700" : "#B0B0B0"}
          />
        ))}
      </View>
    </View>
    <View style={styles.cardFooter}>
      <Text style={styles.profileText}>Perfil</Text>
    </View>
  </View>
);

const PginaInicial: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainCard}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.homeButton}>
            <MaterialIcons name="home" size={24} color="white" />
          </TouchableOpacity>
          <Image source={{ uri: "" }} style={styles.logo} />
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JC</Text>
          </View>
        </View>

        <ScrollView horizontal contentContainerStyle={styles.categoriesContainer}>
          {categories.map((category, i) => (
            <View key={i} style={styles.categoryItem}>
              <TouchableOpacity style={styles.categoryButton}>
                <Text style={styles.categoryIcon}>{category.icon}</Text>
              </TouchableOpacity>
              <Text style={styles.categoryLabel}>{category.label}</Text>
            </View>
          ))}
        </ScrollView>

        <ScrollView contentContainerStyle={styles.techniciansContainer}>
          {technicians.map((technician, i) => (
            <TechnicianCard key={i} technician={technician} />
          ))}
        </ScrollView>

        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <MaterialIcons name="home" size={24} color="white" />
            <MaterialIcons name="message" size={24} color="white" />
            <MaterialIcons name="star" size={24} color="white" />
            <Text style={styles.footerText}>Pro.</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainCard: {
    width: 360,
    height: 809,
    backgroundColor: '#0f1525',
    borderRadius: 16,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  homeButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#0036ac',
    backgroundColor: '#0f1525',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 128,
    height: 34,
    resizeMode: 'contain',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e9501a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: 'white',
    textAlign: 'center',
    lineHeight: 50,
  },
  categoriesContainer: {
    padding: 16,
    gap: 16,
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryButton: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: '#0036ac',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryIcon: {
    fontSize: 24,
  },
  categoryLabel: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  techniciansContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
  },
  card: {
    width: 151,
    height: 174,
    backgroundColor: '#0036ac',
    borderRadius: 20,
    marginBottom: 16,
  },
  cardContent: {
    flex: 1,
    backgroundColor: '#0f1525',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 12,
  },
  avatarContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  technicianName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
  badgesContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  badge: {
    backgroundColor: '#a73e17',
    padding: 4,
    borderRadius: 8,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  cardFooter: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  profileText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerContent: {
    width: 266,
    height: 61,
    backgroundColor: '#e9501a',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PginaInicial;
