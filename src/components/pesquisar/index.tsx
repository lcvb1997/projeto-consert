import { View, TextInput } from 'react-native';
import { Search, MapPin } from 'lucide-react-native';

export default function SearchScreen() {
  return (
    <View className="flex-1 p-0">
      
      {/* Search Bars */}
      <View className="flex-row justify-around -mb-8">
        
        {/* Search Input */}
        <View className="border-2 border-laranja rounded-full px-5 py-2 w-40 h-16 flex-row items-center justify-center overflow-hidden">
          <Search color="#E9501A" size={20} />
          <TextInput
            placeholder="Pesquisar"
            placeholderTextColor="#E9501A"
            className="ml-2 flex-1 text-laranja text-center min-w-0"
          />
        </View>

        {/* Location Input */}
        <View className="border-2 border-white rounded-full px-5 py-2 w-40 h-16 flex-row-reverse items-center justify-center overflow-hidden">
          <MapPin color="white" size={20} />
          <TextInput
            placeholder="Local"
            placeholderTextColor="white"
            className="ml-2 flex-1 text-white text-center min-w-0"
          />
        </View>

      </View>
    </View>
  );
}
