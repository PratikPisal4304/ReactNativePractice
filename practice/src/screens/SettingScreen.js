import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <Text style={[styles.title, darkMode && styles.darkText]}>Settings</Text>

      {/* Dark Mode Toggle */}
      <View style={styles.row}>
        <Text style={[styles.label, darkMode && styles.darkText]}>Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={() => setDarkMode(!darkMode)}
        />
      </View>

      {/* Notifications Toggle */}
      <View style={styles.row}>
        <Text style={[styles.label, darkMode && styles.darkText]}>Notifications</Text>
        <Switch
          value={notifications}
          onValueChange={() => setNotifications(!notifications)}
        />
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.button} onPress={() => alert('Logged out')}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  darkText: {
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
  },
  button: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#ff4d4d',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SettingsScreen;
