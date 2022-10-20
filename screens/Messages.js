import React from 'react';
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Profile from '../assets/image_7.jpg';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Messages() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.instuction}>
        Hitaarth Tanna
      </Text>
      <TouchableOpacity
        onPress={() => ('Hello, world!')}
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, color: 'Black' }}>New message</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'Topleft',
    justifyContent: 'Topleft',
  },
  
  instuction:{
  color: 'Black',
  fontSize: 25,
}
});