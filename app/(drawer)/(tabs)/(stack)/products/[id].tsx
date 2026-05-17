import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const ProductScreen = () => {
  // 1. Obtenemos el parámetro 'id' desde la URL
  const { id } = useLocalSearchParams();

  // 2. Buscamos el producto en nuestro store
  const product = products.find((p) => p.id === id);

  // 3. Medida de seguridad: Si no existe, lo regresamos a la raíz
  if (!product) {
    return <Redirect href="/home" />;
  }

  // 4. Si existe, pintamos los detalles
  return (
    <View className="px-5 mt-2">
      <Text className="font-work-black text-2xl">{product.title}</Text>
      <Text className="">{product.description}</Text>
      <Text className="font-work-black">{product.price}</Text>
    </View>
  );
};

export default ProductScreen;