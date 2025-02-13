import { View, Text, Pressable } from "react-native";
import { Home, MessageSquare, Star } from "lucide-react-native";

export default function FloatingButton() {
  return (
    <View className="absolute bottom-10 left-10 right-10 bg-laranja px-4 py-6 rounded-full shadow-lg flex-row justify-around items-center">
      {/* Ícone Casa */}
      <Pressable className="flex items-center">
        <Home size={28} color="white" />
      </Pressable>

      {/* Ícone Mensagem */}
      <Pressable className="flex items-center">
        <MessageSquare size={28} color="white" />
      </Pressable>

      {/* Ícone Estrela */}
      <Pressable className="flex items-center">
        <Star size={28} color="white" />
      </Pressable>

      {/* Texto "Pro." */}
      <Pressable className="flex items-center">
        <Text className="text-fundo font-bold text-2xl">Pro.</Text>
      </Pressable>
    </View>
  );
}
