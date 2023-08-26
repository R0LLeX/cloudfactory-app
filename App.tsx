import { AppBottomStackNavigator } from "./src/navigation"
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
      <NavigationContainer>
        <AppBottomStackNavigator />
      </NavigationContainer>
  );
}
