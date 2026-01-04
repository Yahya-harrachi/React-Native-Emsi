import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NativeFeaturesScreen from "../Screens/NativeFeatureScreen";
import CameraScreen from "../Screens/CameraScreen";
import LocationScreen from "../Screens/LocationScreen";
import ContactsScreen from "../Screens/ContactScreen";
import NotificationsScreen from "../Screens/NotificationScreen";
const Stack = createNativeStackNavigator();
export default function NativeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Fonctionnalités" component={NativeFeaturesScreen} />
            <Stack.Screen name="Caméra" component={CameraScreen} />
            <Stack.Screen name="Localisation" component={LocationScreen} />
            <Stack.Screen name="Contacts" component={ContactsScreen} />
            <Stack.Screen name="Notifications" component={NotificationsScreen} />
        </Stack.Navigator>
    );
}