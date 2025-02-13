import { View, Text, ScrollView, Pressable, Image } from 'react-native';

export function Banner() {
  return (
    <View className="w-full mt-16 mb-4">
      <Text className="text-center text-white text-lg mb-4">categorias</Text>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {[
          { id: 1, name: 'Freezers', img: require('../../assets/Rectangle.png') },
          { id: 2, name: 'Ventiladores', img: require('../../assets/Rectangle.png') },
          { id: 3, name: 'Smartphones', img: require('../../assets/Rectangle.png') },
          { id: 4, name: 'Computadores', img: require('../../assets/Rectangle.png') },
          { id: 5, name: 'Televisores', img: require('../../assets/Rectangle.png') },
        ].map((item) => (
          <Pressable
            key={item.id}
            className="items-center mr-4"
            onPress={() => console.log(`CLICOU EM ${item.name}`)}
          >
            <Image
              source={item.img}
              className="w-20 h-20 rounded-full bg-blue-700"
            />
            <Text className="text-white text-sm mt-2">{item.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
