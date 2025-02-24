import { View, Text, ScrollView, Pressable, Image, StyleSheet } from 'react-native';

export function Banner() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {[
          { id: 1, name: 'Freezers', img: require('../../assets/freezer-blue.png') },
          { id: 2, name: 'Ventiladores', img: require('../../assets/fan-blue.png') },
          { id: 3, name: 'Smartphones', img: require('../../assets/phone-blue.png') },
          { id: 4, name: 'Computadores', img: require('../../assets/pc-blue.png') },
          { id: 5, name: 'Outros', img: require('../../assets/other-blue.png') },
        ].map((item) => (
          <Pressable
            key={item.id}
            style={styles.item}
            onPress={() => console.log(`CLICOU EM ${item.name}`)}
          >
            <Image
              source={item.img}
              style={styles.image}
            />
            <Text style={styles.itemName}>{item.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 16,
    marginBottom: 4,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    marginBottom: 4,
  },
  scrollContainer: {
    paddingHorizontal: 16,
  },
  item: {
    alignItems: 'center',
    marginRight: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#1E3A8A', // Cor de fundo azul (pode ajustar)
  },
  itemName: {
    color: 'black',
    fontSize: 12,
    marginTop: 8,
  },
});
