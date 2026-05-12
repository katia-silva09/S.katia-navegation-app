import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import './global.css'; // No olviden importar el CSS global

const RootLayout = () => {
  // Cargamos las fuentes desde nuestros assets
  const [fontsLoaded] = useFonts({
    'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
    'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
    'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
  });

  // Si las fuentes aún no cargan, retenemos la pantalla
  if (!fontsLoaded) {
    return null; 
  }

  // Una vez cargadas, mostramos el contenido de la aplicación
  return <Slot />;
};

export default RootLayout;