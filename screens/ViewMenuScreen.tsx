// screens/ViewMenuScreen.tsx
import React, { useState } from 'react';
import { View, ScrollView, Button, StyleSheet, Text } from 'react-native';
import { useDishes } from '../context/DishContext';

const courses = [
  "Hors d'oeuvre", "Amuse-bouche", "Soup", "Appetizer", "Salad",
  "Fish", "First Main Course", "Palate Cleanser", "Second Main Course",
  "Cheese Course", "Dessert", "Mignardise"
];

const ViewMenuScreen: React.FC = () => {
  const { dishes } = useDishes();
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const handleCourseSelect = (course: string) => {
    setSelectedCourse(course);
  };

  const renderDishes = () => {
    if (!selectedCourse || !dishes[selectedCourse]) {
      return <Text>No dishes available for this course.</Text>;
    }

    return dishes[selectedCourse].map((dish, index) => (
      <View key={index} style={styles.dishContainer}>
        <Text style={styles.dishName}>{dish.name}</Text>
        <Text>{dish.description}</Text>
        <Text style={styles.dishPrice}>{dish.price}</Text>
      </View>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      {!selectedCourse ? (
        courses.map((course, index) => (
          <Button
            key={index}
            title={course}
            onPress={() => handleCourseSelect(course)}
          />
        ))
      ) : (
        <View>
          <Button
            title="Back to Courses"
            onPress={() => setSelectedCourse(null)}
          />
          {renderDishes()}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  dishContainer: {
    marginBottom: 20,
  },
  dishName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  dishPrice: {
    color: 'green',
  },
});

export default ViewMenuScreen;
