import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

const ProductScreen = () => {
  // 1. Obtenemos el parámetro 'id' de la URL
  const { id } = useLocalSearchParams();
  
  // 2. Instanciamos el controlador de navegación nativo
  const navigation = useNavigation();

  // 3. Buscamos el producto en nuestro store (base de datos simulada)
  const product = products.find((p) => p.id === id);

  // 4. EFECTO SECUNDARIO: Cambiamos el título dinámicamente
  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? "Producto", // Título dinámico o fallback
    });
  }, [product]); // Se vuelve a ejecutar si el 'product' cambia

  // 5. Medida de seguridad: Si no existe el producto, regresamos al menú
  if (!product) {
    return <Redirect href="/" />;
  }

  // 6. Si el producto existe, pintamos la interfaz
  return (
    <View className="px-5 mt-2">
      <Text className="font-work-black text-2xl">{product.title}</Text>
      <Text className="mt-2">{product.description}</Text>
      <Text className="font-work-black mt-5 text-xl text-primary">${product.price}</Text>
    </View>
  );
};

export default ProductScreen;