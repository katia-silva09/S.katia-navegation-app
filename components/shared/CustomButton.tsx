import { Pressable, PressableProps, Text } from "react-native";

interface Props extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";
  variant?: "contained" | "text-only";
  className?: string; // Permitimos inyectar clases externas
}

const CustomButton = ({
  children,
  color = "primary",
  onPress,
  onLongPress,
  variant = "contained",
  className,
}: Props) => {
  
  // Diccionario para colores de fondo
  const btnColor = {
    primary: `bg-primary`,
    secondary: `bg-secondary`,
    tertiary: `bg-tertiary`,
  }[color];

  // Diccionario para colores de texto (para la variante text-only)
  const textColor = {
    primary: `text-primary`,
    secondary: `text-secondary`,
    tertiary: `text-tertiary`,
  }[color];

  // Renderizado condicional: Variante de solo texto
  if (variant === "text-only") {
    return (
      <Pressable
        className={`p-3 ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Text className={`text-center ${textColor} font-work-medium`}>
          {children}
        </Text>
      </Pressable>
    );
  }

  // Renderizado por defecto: Variante contenida (con fondo)
  return (
    <Pressable
      // Inyectamos la clase externa al final para que sobrescriba si es necesario
      className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text className="text-white text-center font-work-medium">
        {children}
      </Text>
    </Pressable>
  );
};

export default CustomButton;