import { View } from 'react-native';
// IMPORTANTE: Importar el CSS global
import { Link, router } from 'expo-router'; // Importamos el componente Link
import { SafeAreaView } from "react-native-safe-area-context";
import './global.css';

import CustomButton from '@/components/shared/CustomButton';

const HomeScreen = () => {
  return (
    // SafeAreaView protege nuestro contenido de los bordes físicos del teléfono
    <SafeAreaView>
      <View className="px-10 mt-5">
        
        {/* Opción 1: Navegación Declarativa con Link */}
        <Link href={"/products"} asChild>
          <CustomButton className="mb-10" color="primary">
            Productos (Link)
          </CustomButton>
        </Link>

        {/* Opción 2: Navegación Imperativa con router.push */}
        <CustomButton
          className="mb-10"
          color="primary"
          onPress={() => router.push("/products")}
        >
          Productos (Router)
        </CustomButton>

        {/* Opción 3: Probando nuestra nueva variante text-only */}
        <CustomButton
          variant="text-only"
          onPress={() => router.push("/products")}
          className="mb-10"
        >
          Productos (Solo Texto)
        </CustomButton>

      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;