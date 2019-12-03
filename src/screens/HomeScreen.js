import React from 'react';
import { Text, StyleSheet } from 'react-native';
import ComponentScreen from './ComponentScreen'

const HomeScreen = () => {
  return <Text style={styles.text}>Hello world</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
