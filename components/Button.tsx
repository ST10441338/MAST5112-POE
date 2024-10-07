// components/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
}

const Button: React.FC<ButtonProps> = ({ onPress, title }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Button;
