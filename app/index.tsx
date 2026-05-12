import { Text, View } from 'react-native';
// IMPORTANTE: Importar el CSS global
import './global.css';

const App = () => {
   return (
    <View className="flex-1 items-center justify-center bg-white px-10">
      
      <Text className="text-5xl font-work-black text-primary">
        Primary
      </Text>

      <Text className="text-4xl font-work-medium text-secondary mt-4">
        Secondary
      </Text>

      <Text className="text-3xl font-work-light text-tertiary mt-4">
        Tertiary
      </Text>

      {/* Ejemplo de un botón usando bg-primary */}
      <View className="mt-10 bg-primary p-4 rounded-2xl w-full items-center">
        <Text className="text-white font-work-medium text-lg">
          Botón de Marca
        </Text>
      </View>

    </View>
  );
};

export default App;