// src/screens/ProfileScreen.js
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ProfileScreen = ({ navigation }) => {
  // Example user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "I am a software developer who loves building mobile apps with React Native.",
    profilePicture: "https://www.headshotpro.com/avatar-results/danny-1.webp", // Placeholder image URL
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Picture */}
      <Image
        source={{ uri: user.profilePicture }}
        style={styles.profileImage}
      />

      {/* User Name */}
      <Text style={styles.name}>{user.name}</Text>

      {/* User Email */}
      <Text style={styles.email}>{user.email}</Text>

      {/* Bio Section */}
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>{user.bio}</Text>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("EditProfile")} // Navigate to EditProfile screen
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={() => alert("Logged out!")} // Replace with actual logout logic
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F5FCFF",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  bioContainer: {
    width: "100%",
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 20,
  },
  bioText: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
  },
  button: {
    width: "80%",
    padding: 15,
    backgroundColor: "#007BFF",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: "#FF3B30",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
