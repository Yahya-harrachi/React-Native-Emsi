import { NavigationContainer } from "@react-navigation/native";
import AuthProvider, { AuthContext } from "./Context/AuthContext";
import AppDrawer from "./Navigation/AppDrawer";
import LoginScreen from "./Screens/LoginScreen";
import { useContext } from "react";


function RootNavigator() {
  const { user } = useContext(AuthContext);
  return user ? <AppDrawer /> : <LoginScreen />;
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}