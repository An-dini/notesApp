import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
	Alert,
	FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../Constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const AddNote = () => {
	const navigation = useNavigation();

	const [value, setValue] = useState("");
	const [charCount, setCharCount] = useState(0);
	const [notes, setNotes] = useState([]); // State untuk menyimpan catatan

	const storeData = async (note) => {
		try {
			const existingNotes = await AsyncStorage.getItem("notes");
			const notesArray = existingNotes ? JSON.parse(existingNotes) : [];

			// Create a new note with an ID
			const newNote = {
				id: Date.now().toString(), // Generate a unique ID
				text: note,
			};

			// Add the new note
			notesArray.push(newNote);

			// Store the updated notes array
			await AsyncStorage.setItem("notes", JSON.stringify(notesArray));
			setNotes(JSON.parse(value));
			Alert.alert("Note added successfully!");
			setValue(""); // Clear the input after saving
			fetchNotes(); // Update the notes after saving
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		setCharCount(value.length);
	}, [value]);

	return (
		<View style={styles.container}>
			<View>
				<TextInput
					editable
					multiline
					onChangeText={(text) => setValue(text)}
					maxLength={250}
					value={value}
					style={styles.textInput}
					placeholder="Write your note here..."
				/>
				<View
					style={{
						marginHorizontal: 14,
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<Text>{charCount}/250</Text>
					<TouchableOpacity
						style={styles.backBtn}
						onPress={() => {
							if (value.trim()) {
								storeData(value);
								navigation.replace("AllNotes");
							} else {
								Alert.alert("Please enter a note.");
							}
						}}
					>
						<Text style={styles.textBtn}>Add</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default AddNote;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.white,
		justifyContent: "flex-start",
	},
	backBtn: {
		width: 65, // Sesuaikan lebar tombol
		padding: 12,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.blue,
		borderRadius: 8,
		marginVertical: 5,
	},
	textBtn: {
		color: Colors.white,
		fontSize: 18,
		fontWeight: "bold",
	},
	textInput: {
		width: "95%",
		height: "150",
		margin: 12,
		padding: 12,
		borderWidth: 2,
		textAlignVertical: "top",
		fontSize: 18,
		borderColor: Colors.blueLight,
		borderRadius: 8,
	},
	noteItem: {
		marginVertical: 5,
	},
});
