import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function AppBar({ Titre }){
    
    const { logout } = useContext(AuthContext)

    return (
        
    <View style={styles.container}>
      <Text style={styles.title}>{Titre}</Text>

      <TouchableOpacity onPress={logout}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#007AFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  logout: {
    color: "#fff",
    fontSize: 16,
  },
});

