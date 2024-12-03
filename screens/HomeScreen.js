import React from "react";
import {
	Alert,
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import Colors from "../Constants/Colors";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.buttonContainer}
				onPress={() => navigation.navigate("AddNote")}
			>
				<Text style={styles.buttonText}>Add Note</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.buttonContainer}
				onPress={() => navigation.navigate("AllNotes")}
			>
				<Text style={styles.buttonText}>View All Notes</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		marginTop: 40,
	},
	buttonContainer: {
		width: Dimensions.get("window").width - 100,
		height: "25%",
		backgroundColor: Colors.blueLight,
		marginVertical: 30,
		alignItems: "center",
		justifyContent: "center",
		elevation: 4,
		borderRadius: 8,
	},
	buttonText: {
		color: Colors.blue,
		fontSize: 35,
		fontWeight: "bold",
	},
});

export default HomeScreen;
