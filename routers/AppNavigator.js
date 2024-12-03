import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddNote from "../screens/AddNote";
import AllNotes from "../screens/AllNotes";
import HomeScreen from "../screens/HomeScreen";
import Colors from "../Constants/Colors";

const Stack = createStackNavigator();

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerStyle: {
						backgroundColor: Colors.navy,
					},
					headerTintColor: Colors.white,
					headerTitleStyle: {
						fontWeight: "bold",
						fontSize: 20,
					},
				}}
			>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{
						title: "Your Sticky Notes",
					}}
				/>
				<Stack.Screen
					name="AddNote"
					component={AddNote}
					options={{
						title: "Add Note",
					}}
				/>
				<Stack.Screen
					name="AllNotes"
					component={AllNotes}
					options={{
						title: "All Notes",
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
