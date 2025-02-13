import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AdBanner = ({
    backgroundColor = "#0044FF",
    textColor = "#FFF",
    height = 180,
    width = "90%",
    adText = "Anúncio",
    borderRadius = 10,
    marginVertical = -5, // Reduzido para aproximar do conteúdo acima
    marginHorizontal = 0,
    style,
    children,
  }) => {
    return (
      <View
        style={[
          styles.banner,
          {
            backgroundColor,
            height,
            width,
            borderRadius,
            marginVertical,
            marginHorizontal,
            alignSelf: "center",
          },
          style,
        ]}
      >
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