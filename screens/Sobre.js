import { StyleSheet , Text, View } from "react-native";
import styles from "../assets/styles/styles";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  
});
