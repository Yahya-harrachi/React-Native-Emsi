import { NavigationContainer } from "@react-navigation/native";
import AuthProvider, { AuthContext } from "./Context/AuthContext";
import AppDrawer from "./Navigation/AppDrawer";
import LoginScreen from "./Screens/LoginScreen";
import { useContext } from "react";

import { Provider } from "react-redux";
import { store } from "./Store/store";

function RootNavigator() {
  const { user } = useContext(AuthContext);
  return user ? <AppDrawer /> : <LoginScreen />;
}

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </AuthProvider>
    </Provider>
  );
}