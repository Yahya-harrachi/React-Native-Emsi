import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import NativeStack from "./NativeStack";
const Drawer = createDrawerNavigator();
export default function AppDrawer() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: true }}>
            <Drawer.Screen name="Mes tâches" component={HomeScreen} />
            <Drawer.Screen name="Profil" component={ProfileScreen} />
            <Drawer.Screen name="Native" component={NativeStack} />
        </Drawer.Navigator>
    );
}