import { StyleSheet , Text, View } from "react-native";
import styles from "../assets/styles/styles";

export default function Projetos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projetos</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

    </View>
  );
}

