import { StyleSheet , Text, View } from "react-native";
import * as styles from "../assets/styles/styles.js";

export default function Habilidades() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habilidades</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

    </View>
  );
}
