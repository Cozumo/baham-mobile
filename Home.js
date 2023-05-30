import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>BAHAM</Text>
        <Text style={styles.subtitle}>Your Reliable Car Riding App</Text>

        <View style={styles.page}>
            <Text style={styles.title}>Our Thoughts Behind This App:</Text>
            <Text style={styles.description}>With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.</Text>
            <Text style={styles.description}>The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.</Text>
            <Text style={styles.description}>Our core service is developing technology that connects drivers and riders on demand.</Text>
        </View>
        
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Book Ride</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666666',
  },
  button: {
    backgroundColor: '#ff5e3a',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginLeft: 170
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
  },
  page: {
    marginTop: 20,
    padding: 25,
  }
});

export default Home;
