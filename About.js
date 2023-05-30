import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Our Car Riding App</Text>
      <Text style={styles.description}>
        Welcome to our car riding app! We are a team of passionate developers
        dedicated to providing a seamless and convenient carpooling experience.
      </Text>
      <Text style={styles.description}>
        Our mission is to connect drivers and passengers, making commuting
        easier and more eco-friendly. By sharing rides, we aim to reduce traffic
        congestion and contribute to a greener environment.
      </Text>
      <Text style={styles.description}>
        With our app, you can easily find available rides or offer your own. We
        prioritize safety and strive to create a trustworthy community by
        implementing driver verification and passenger ratings.
      </Text>
      <Text style={styles.description}>
        If you have any questions or feedback, please don't hesitate to reach
        out to us. We are here to make your carpooling experience enjoyable and
        efficient!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
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
});

export default About;
