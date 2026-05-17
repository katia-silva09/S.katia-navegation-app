import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";

const StackLayout = () => {

  const navigation = useNavigation();
 // funcion que evalua si reglesar o abrir el menu

 const onHeaderLetfClick = (canGoBack: boolean) => {
  if (canGoBack) {
    router.back(); // regrasar a la pantalla anterior
    return;
  }
  //si no puede regresar, entonces abrimos el menu lateral
  navigation.dispatch(DrawerActions.toggleDrawer());
 }


  return (
    <Stack
      // Configuraciones globales para todas las pantallas del Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: "white" },
        // renderizado dinamico del icono izquierdo del header
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
          //cambiamos el icono dependiendo del historial
          name={canGoBack ? "arrow-back" : "grid-outline"}
          className="mr-5"
          size={20}
          onPress={() => onHeaderLetfClick(canGoBack?? false)}
          />
        )
      }}
    >
      <Stack.Screen name="home/index" options={{ title: "Inicio" }} />
      <Stack.Screen name="products/index" options={{ title: "Productos" }} />
      <Stack.Screen name="profile/index" options={{ title: "Perfil" }} />
      <Stack.Screen name="settings/index" options={{ title: "Ajustes" }} />
    </Stack>
  );
};

export default StackLayout;