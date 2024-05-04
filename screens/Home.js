import { Text, View } from "react-native";
import * as styles from "../assets/styles/styles.js";



export default function Home() {
  {{
    console.log("STYLEEEEEEEES")
    console.log(styles)
  }}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

    </View>
  );
}


