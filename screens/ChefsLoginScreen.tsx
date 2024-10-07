// screens/ChefsLoginScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Picker, Text } from 'react-native';
import Button from '../components/Button';
import { useDishes } from '../context/DishContext';

const courses = [
  "Hors d'oeuvre", "Amuse-bouche", "Soup", "Appetizer", "Salad",
  "Fish", "First Main Course", "Palate Cleanser", "Second Main Course",
  "Cheese Course", "Dessert", "Mignardise"
];

const ChefsLoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { addDish } = useDishes();
  const [name, setName] = useState('');
  const [category, setCategory] = useState(courses[0]);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    const newDish = { name, description, price };
    addDish(category, newDish);

    // Reset form after submission
    setName('');
    setDescription('');
    setPrice('');
    setCategory(courses[0]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
      />
      <Picker
        selectedValue={category}
        style={styles.picker}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        {courses.map((course, index) => (
          <Picker.Item key={index} label={course} value={course} />
        ))}
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 15,
  },
});

export default ChefsLoginScreen;
