import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import QuizStartingScreen from "./screens/quiz-app/QuizStartingScreen";
import QuizLoadingScreen from "./screens/quiz-app/QuizLoadingScreen";
import QuizScreen from "./screens/quiz-app/QuizScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <TailwindProvider>
              <Stack.Navigator>
                  <Stack.Screen name="Home" component={HomeScreen}/>
                  <Stack.Screen name="QuizStartingScreen" component={QuizStartingScreen}/>
                  <Stack.Screen name="QuizLoadingScreen" component={QuizLoadingScreen}/>
                  <Stack.Screen name="QuizScreen" component={QuizScreen}/>
              </Stack.Navigator>
          </TailwindProvider>
      </NavigationContainer>
  );
}
