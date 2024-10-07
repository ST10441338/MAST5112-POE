// screens/HomeScreen.tsx
import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useDishes } from '../context/DishContext';

const HomeScreen = ({ navigation }) => {
  const { dishes } = useDishes();

  // Calculate the total number of dishes
  const totalDishes = Object.values(dishes).reduce(
    (sum, courseDishes) => sum + courseDishes.length,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Chef's Menu App</Text>

      {/* Display total number of dishes */}
      <Text style={styles.dishCount}>
        Total Dishes: {totalDishes}
      </Text>

      {/* Buttons for navigation */}
      <Button
        title="Add a Dish"
        onPress={() => navigation.navigate('ChefsLogin')}
        style={styles.button}
      />
      <Button
        title="View Menu"
        onPress={() => navigation.navigate('ViewMenu')}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dishCount: {
    fontSize: 18,
    marginBottom: 30,
  },
  button: {
    marginVertical: 10,
  },
});

export default HomeScreen;
