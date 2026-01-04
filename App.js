import { ThemeProvider } from "./Context/ThemeContext";
import { AuthProvider } from "./Context/AuthContext";
import AppStack from "./Navigation/AppStack";
import { SafeAreaProvider } from "react-native-safe-area-context"; export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <AppStack />
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}