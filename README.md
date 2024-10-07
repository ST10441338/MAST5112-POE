# **PART 2 OF POE: Creating an application for a private Chef to use a menu for their guests** #

## WRITTEN BY CHAD FANAROFF ##

## ST10441338 ##

## Chef's Menu App ##

This project is a mobile application developed with React Native and TypeScript. It allows chefs to manage a 12-course dinner menu by adding, categorizing, and viewing dishes. It uses React Navigation for screen transitions and the Context API for state management.

** Features **
Add Dishes: Chefs can add dishes under predefined course categories.
View Menu: Dishes are displayed in the menu organized by their respective course.
Dish Count: Home screen dynamically displays the total number of dishes across all courses.
State Management: Uses Context API to share data (dishes) across screens.


File Structure and Detailed Explanation
The project is divided into several key components, each with specific functionality:

1. App.tsx
This is the main entry point of the application, where the NavigationContainer and StackNavigator are defined. This file sets up routing between the three main screens: HomeScreen, ChefsLoginScreen, and ViewMenuScreen.

NavigationContainer: Wraps the entire app to provide navigation capabilities.
DishProvider: Wraps the app with global state management using the Context API.
Stack.Navigator: Defines the stack of screens for navigation. The initialRouteName is set to Home.
2. components/Button.tsx
This is a reusable button component that follows the style of the app.

Props: It accepts two props: title (text on the button) and onPress (function to call when the button is pressed).
Styling: Includes custom styles for the button appearance and text.
This component enhances code reusability across multiple screens by allowing consistent button design.

3. context/DishContext.tsx
This file uses React's Context API to handle the global state of the dishes. It provides functions to add and retrieve dishes across the app.

DishProvider: This component wraps the app and provides context to its children. It maintains the state (dishes) that holds the data for each course.
addDish function: Adds a new dish to the selected course by updating the state.
useDishes hook: A custom hook that allows easy access to the dishes context in any component.
This setup ensures that dish-related data is globally accessible and modifiable from any screen.

4. screens/HomeScreen.tsx
The home screen serves as the app's main dashboard. It provides buttons to navigate to the ChefsLoginScreen (to add a new dish) and ViewMenuScreen (to view the current menu). It also dynamically displays the total number of dishes in the menu.

Total Dishes Display: The total number of dishes is calculated and displayed on the home screen using the dishes context.
This screen serves as the main entry point for chefs and offers easy navigation.

5. screens/ChefsLoginScreen.tsx
This screen allows chefs to add new dishes. It provides input fields for the dish name, description, price, and a picker to select the course.

Form Handling: The screen contains input fields that update the name, description, price, and category states.
addDish function: On form submission, the new dish is added to the selected course using the addDish function from the context.
Picker: Allows the user to select one of the predefined course categories.
This screen facilitates adding new dishes to the menu with essential details.

6. screens/ViewMenuScreen.tsx
This screen displays all the dishes in the menu, organized by course.

Course Selection: Users can select a course to view the dishes under that category.
Dish Display: For each selected course, the dishes are listed with their name, description, and price.
Conditional Rendering: If no dishes are available for a selected course, a message is displayed.
This screen allows the chef to view the current state of the menu, categorized by courses.

7. components/Button.tsx
This reusable button component is used across multiple screens. It defines a styled button that accepts props like title (for the button label) and onPress (for the click handler).

Customization: The button's style and text are consistent throughout the app to ensure a uniform look and feel.
Reusability: Using a separate component for buttons avoids redundant code across screens.
