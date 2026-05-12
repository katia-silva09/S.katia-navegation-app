import { Text, View } from 'react-native';
// IMPORTANTE: Importar el CSS global
import './global.css';

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      
      {/* Usando la variante Black */}
      <Text className="text-4xl font-work-black text-blue-800">
        Hola Mundo Black
      </Text>

      {/* Usando la variante Medium */}
      <Text className="text-3xl font-work-medium text-gray-800 mt-4">
        Hola Mundo Medium
      </Text>

      {/* Usando la variante Light */}
      <Text className="text-2xl font-work-light text-gray-500 mt-4">
        Hola Mundo Light
      </Text>

    </View>
  );
};

export default App;