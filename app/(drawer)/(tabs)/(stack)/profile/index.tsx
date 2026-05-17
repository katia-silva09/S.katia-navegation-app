import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="items-center mt-10 px-6">
        
        {/* Foto de perfil */}
        <Image
          source={{
            uri: "https://i.pinimg.com/1200x/f8/95/2c/f8952c9b2fc1bf9ac3c9cdbbe9110177.jpg",
          }}
          className="w-32 h-32 rounded-full mb-4"
        />

        {/* Nombre */}
        <Text className="text-2xl font-bold text-gray-800">
          Katia Silva
        </Text>

        {/* Correo */}
        <Text className="text-gray-500 mt-1">
          katia@example.com
        </Text>

        {/* Tarjetas de información */}
        <View className="w-full mt-10 space-y-4">
          
          <View className="bg-gray-100 p-4 rounded-2xl">
            <Text className="text-gray-500">Carrera</Text>
            <Text className="text-lg font-semibold">
              Ingeniería en Sistemas
            </Text>
          </View>

          <View className="bg-gray-100 p-4 rounded-2xl mt-4">
            <Text className="text-gray-500">Ubicación</Text>
            <Text className="text-lg font-semibold">
              Nicaragua
            </Text>
          </View>
          <View className="bg-gray-100 p-4 rounded-2xl mt-4">
            <Text className="text-gray-500">Edad</Text>
            <Text className="text-lg font-semibold">
              25 años
            </Text>
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
}