import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";

// Definindo os tipos das props corretamente
interface AdBannerProps {
  backgroundColor?: string;
  textColor?: string;
  height?: ViewStyle['height']; // Permite número, string ou undefined
  width?: ViewStyle['width'];   // Permite número, string ou undefined
  adText?: string;
  borderRadius?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  style?: ViewStyle;
  children?: React.ReactNode;
}

const AdBanner: React.FC<AdBannerProps> = ({
  backgroundColor = "#0044FF",
  textColor = "#FFF",
  height = 180,   // Pode ser um número (180 px) ou uma string ("%")
  width = "90%",  // Exemplo de string (90% da largura do container)
  adText = "Anúncio",
  borderRadius = 10,
  marginVertical = -5,
  marginHorizontal = 0,
  style,
  children,
}) => {
  // Definindo o estilo inline com tipos corretos
  const inlineStyles: ViewStyle = {
    backgroundColor,
    height,
    width,
    borderRadius,
    marginVertical,
    marginHorizontal,
    alignSelf: "center",
  };

  return (
    <View style={[styles.banner, inlineStyles, style]}>
      {children || (
        <Text style={[styles.text, { color: textColor }]}>{adText}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AdBanner;
