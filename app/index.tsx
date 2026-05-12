import { Text, View } from 'react-native';
// IMPORTANTE: Importar el CSS global
import { Link } from 'expo-router'; // Importamos el componente Link
import './global.css';

const App = () => {
return (
    <View className="flex-1 px-10 py-20">
      <Text className="text-4xl font-work-black text-primary mb-10">
        Menú Principal
      </Text>

      {/* Navegación a Productos */}
      <Link href="/products" className="mb-5">
        <Text className="text-xl font-work-medium text-secondary">
          Ir a Productos
        </Text>
      </Link>

      {/* Navegación a Perfil */}
      <Link href="/profile" className="mb-5">
        <Text className="text-xl font-work-medium text-secondary">
          Ir a Perfil
        </Text>
      </Link>

      {/* Navegación a Ajustes */}
      <Link href="/settings">
        <Text className="text-xl font-work-medium text-secondary">
          Ir a Ajustes
        </Text>
      </Link>
    </View>
  );};

export default App;