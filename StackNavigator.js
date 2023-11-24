import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from "./screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Entypo, Ionicons } from '@expo/vector-icons'; // Corrected Ionicons import

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
       <Tab.Navigator>
          <Tab.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={{
              tabBarLabel: "Home", 
              headerShown: false, 
              tabBarLabelStyle: { color: "white" },
              tabBarIcon: ({ focused }) => (
                <Entypo name="Home" size={24} color={focused ? "black" : "grey"} />
              )
            }} 
          />
          <Tab.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{
              tabBarLabel: "Profile", 
              headerShown: false, 
              tabBarLabelStyle: { color: "white" },
              tabBarIcon: ({ focused }) => (
                <Ionicons name={focused ? "person" : "person-outline"} size={24} color={focused ? "black" : "grey"} />
              )
            }}
          />
       </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
