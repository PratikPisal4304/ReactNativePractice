import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../context/ThemeContext";

const HomeScreen = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const data = [
    { id: "1", title: "React Native Basics" },
    { id: "2", title: "Expo Framework" },
    { id: "3", title: "Navigation in React Native" },
    { id: "4", title: "API Integration" },
    { id: "5", title: "State Management" },
    { id: "6", title: "Using Firebase in React Native" },
    { id: "7", title: "Authentication & Security" },
    { id: "8", title: "Animations in React Native" },
    { id: "9", title: "Optimizing Performance" },
    { id: "10", title: "Building UI Components" },
    { id: "11", title: "Working with Databases" },
    { id: "12", title: "Using Redux & Context API" },
    { id: "13", title: "Deploying Your App" },
    { id: "14", title: "Advanced Hooks & Custom Hooks" },
  ];

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: isDarkMode ? "#121212" : "#F5FCFF" }]}
      edges={["top"]}
    >
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} backgroundColor={isDarkMode ? "#121212" : "#F5FCFF"} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={() => (
          <>
            <Text style={[styles.header, { color: isDarkMode ? "#FFF" : "#000" }]}>
              "Master React Native with Us!"
            </Text>
            <Text style={[styles.subText, { color: isDarkMode ? "#CCC" : "#555" }]}>
              Scroll to explore topics
            </Text>
          </>
        )}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: isDarkMode ? "#1E1E1E" : "#FFF" }]}>
            <Text style={[styles.cardText, { color: isDarkMode ? "#FFF" : "#333" }]}>{item.title}</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <TouchableOpacity
            style={[styles.button, { backgroundColor: isDarkMode ? "#444" : "#007BFF" }]}
            onPress={() => alert("Explore More!")}
          >
            <Text style={[styles.buttonText, { color: isDarkMode ? "#FFF" : "#FFF" }]}>
              Explore More
            </Text>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    marginTop: 20,
  },
  subText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginHorizontal: 15,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 15,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
