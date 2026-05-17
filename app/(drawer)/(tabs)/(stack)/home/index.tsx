import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {

  //1 obtenemos el objeto de navegacion nativo

  const navigation = useNavigation();

  //2 función para abrir el drawer
  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());}


  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        
        {/* Navegación Imperativa (Router) */}
        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => router.push("/products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          color="secondary"
          onPress={() => router.push("/profile")}
          className="mb-2"
        >
          Perfil
        </CustomButton>

        <CustomButton
          color="tertiary"
          onPress={() => router.push("/settings")}
          className="mb-2"
        >
          Ajustes
        </CustomButton>

        {/* Navegación Declarativa (Link) con Variante de Texto */}
        <Link href={"/products"} asChild>
          <CustomButton variant="text-only" className="mb-10" color="primary">
            Productos
          </CustomButton>
        </Link>

        {/* Botón para abrir el Drawer */
        <CustomButton onPress={onToggleDrawer}>
          Abrir Drawer
        </CustomButton>}

      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;