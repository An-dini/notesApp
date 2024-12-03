import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../Constants/Colors";

const Header = () => {
	return (
		<View style={styles.headerContainer}>
			<Text style={styles.headerTitle}>Your Sticky Notes</Text>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	headerContainer: {
		width: "100%",
		height: "12%",
		backgroundColor: Colors.navy,
		padding: "12",
	},
	headerTitle: {
		color: Colors.white,
		fontSize: 28,
		fontWeight: "bold",
		marginStart: 12,
		marginTop: 28,
	},
});
