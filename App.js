import { StatusBar } from "expo-status-bar";
import AppNavigator from "./routers/AppNavigator";

export default function App() {
	return (
		<>
			<AppNavigator />
			<StatusBar style="light" />
		</>
	);
}
