import {
	Alert,
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../Constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/Ionicons";

const AllNotes = () => {
	const [notes, setNotes] = useState([]); // Declare state for notes

	const fetchNotes = async () => {
		try {
			const value = await AsyncStorage.getItem("notes");
			if (value !== null) {
				setNotes(JSON.parse(value)); // Update state with existing notes
			}
		} catch (e) {
			console.log(e);
		}
	};

	const deleteNote = async (id) => {
		try {
			const updatedNotes = notes.filter((note) => note.id !== id); // Filter out the note to be deleted
			await AsyncStorage.setItem("notes", JSON.stringify(updatedNotes)); // Update AsyncStorage
			setNotes(updatedNotes); // Update state
			Alert.alert("Note deleted successfully!"); // Show confirmation message
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchNotes();
	}, [notes]);

	return (
		<View style={styles.container}>
			<FlatList
				data={notes}
				contentContainerStyle={{ alignItems: "center" }}
				renderItem={({ item }) => (
					<View style={styles.noteItem}>
						<Text style={styles.itemText}>{item.text}</Text>
						<TouchableOpacity
							style={styles.itemContainer}
							onPress={() => {
								deleteNote(item.id); // Show note text when pressed
							}}
						>
							<Icon name="close" size={30} color={Colors.white} />
						</TouchableOpacity>
					</View>
				)}
				keyExtractor={(item) => item.id} // Use ID as key
			/>
		</View>
	);
};

export default AllNotes;

const styles = StyleSheet.create({
	itemContainer: {
		width: "auto",
		height: "auto",
	},
	itemText: {
		color: Colors.white,
		width: "85%",
		fontSize: 18,
		fontWeight: "bold",
	},
	container: {
		flex: 1,
	},
	noteItem: {
		width: "90%",
		height: "auto",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: Colors.navy,
		borderRadius: 8,
		padding: 24,
		marginTop: 12,
		marginBottom: 2,
	},
});
