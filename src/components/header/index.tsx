import { View, Pressable, Text, Image } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';



export function Header() {
  return (
    <View className="w-full flex flex-row items-center justify-between px-3 -mt-14">
      
      <Pressable className="w-20 h-20 rounded-full flex justify-center items-center border-4 border-minha-cor">
        <Ionicons name="arrow-back" size={30} color="#0037AD" />
      </Pressable>

      <View className="flex flex-col items-center justify-center">
        
        <Image 
            source={require('../../assets/logo.png')}
            style={{ width: 170, height: 170 }} // 🔹 Define tamanho exato
            resizeMode="contain" // 🔹 Mantém a proporção correta
            />


        </View>

      <Pressable className="w-20 h-20 rounded-full flex justify-center items-center border-4 border-minha-cor">
        <Feather name="user" size={32} color="#0037AD" />
      </Pressable>

    </View>
  );
}
