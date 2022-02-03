import { useFonts } from "expo-font";
import HomeScreen from './src/screens/HomeScreen';
import { LogBox } from 'react-native';
import MenuScreens from "./src/screens/MenuScreens";
export default function App() {

  const [loaded] = useFonts({
    Bold: require("./src/fonts/NunitoSans-Bold.ttf"),
    Regular: require("./src/fonts/NunitoSans-Regular.ttf"),
    SemiBold:require("./src/fonts/NunitoSans-SemiBold.ttf"),
  
  });
  if (!loaded) {
    LogBox.ignoreLogs(['Warning: ...']);
    LogBox.ignoreAllLogs();
    return false;
  }
  return <HomeScreen />
}

