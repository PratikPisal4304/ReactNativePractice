import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import EditProfileScreen from "./screens/EditProfileScreen"; // New screen

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator for Profile Section
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ProfileMain" 
        component={ProfileScreen} 
        options={{title:"Profile"}} // Hides the header in Profile screen
      />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

// Main Tab Navigator
const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderTopWidth: 0,
            paddingVertical: 10,
            marginHorizontal: "10%",
            height: 65,
            position: "absolute",
            left: 20,
            right: 20,
            bottom: 20,
            borderRadius: 25,
            elevation: 25,
            shadowColor: "#000",
            shadowOpacity: 0.15,
            shadowOffset: { width: 0, height: 8 },
            shadowRadius: 15,
            borderWidth: 1,
            borderColor: "rgba(255, 255, 255, 0.2)",

          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "#8e8e8e", // Grey inactive icon 
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: 12,
            marginTop: 5,
            fontWeight: '500',
          },
          tabBarItemStyle: {
            padding: 4,
          },
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }
            return (
              <Animated.View 
                style={{
                  transform: [{ scale: focused ? 1.2 : 1 }],
                  backgroundColor: focused ? 'rgba(255, 211, 105, 0.1)' : 'transparent',
                  padding: 8,
                  borderRadius: 15,
                  width: 40,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Ionicons 
                  name={iconName} 
                  size={size} 
                  color={color}
                  style={{
                    transform: [{ translateY: focused ? -2 : 0 }]
                  }}
                />
             </Animated.View>
            );
          },
          
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarLabel: ({ focused }) => (
              <Animated.Text
                style={{
                  color: focused ? "blue" : "#8e8e8e",
                  fontSize: 12,
                  fontWeight: focused ? '600' : '400',
                  opacity: focused ? 1 : 0.8,
                }}
              >
                Home
              </Animated.Text>
            ),
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileStack}
          options={{
            tabBarLabel: ({ focused }) => (
              <Animated.Text
                style={{
                  color: focused ? "blue" : "#8e8e8e",
                  fontSize: 12,
                  fontWeight: focused ? '600' : '400',
                  opacity: focused ? 1 : 0.8,
                }}
              >
                Profile
              </Animated.Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
