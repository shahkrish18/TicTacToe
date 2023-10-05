import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import Game from "./src/Game";

export default function App() {
  return (
    <LinearGradient colors={['#0A79DF','#74B9FF']} style={styles.container} >
      <View style={styles.overlay}>
        <Game />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  overlay:{
    flex:1,
    backgroundColor:'rgba(255,255,255,0.1)',
    justifyContent:'center',
    alignItems:'center'
  }
});
