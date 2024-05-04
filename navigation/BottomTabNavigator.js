// Learn more about createBottomTabNavigator:
// https://reactnavigation.org/docs/bottom-tab-navigator
import Ionicons from "@expo/vector-icons/Ionicons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useColorScheme } from "react-native";

import Colors from "../constants/Colors";
import Home from "../screens/Home";
import Projetos from "../screens/Projetos";
import Sobre from "../screens/Sobre";
import Habilidades from "../screens/Habilidades";
import Contato from "../screens/Contato";

const BottomTab = createBottomTabNavigator();

import IonIcon from '@reacticons/ionicons';

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          // tabBarIcon: ({ color }) => (
          //   <IonIcon name="home"/>
          // ),
        }}
      />
      <BottomTab.Screen
        name="Projetos"
        component={Projetos}
        options={{
          headerShown: false,
          // tabBarIcon: ({ color }) => (
          //   <TabBarIcon name="ios-code" color={color} />
          // ),
        }}
      />
      <BottomTab.Screen
        name="Sobre"
        component={Sobre}
        options={{
          headerShown: false,
          // tabBarIcon: ({ color }) => (
          //   <TabBarIcon name="ios-code" color={color} />
          // ),
        }}
      />
      <BottomTab.Screen
        name="Habilidades"
        component={Habilidades}
        options={{
          headerShown: false,
          // tabBarIcon: ({ color }) => (
          //   <TabBarIcon name="ios-code" color={color} />
          // ),
        }}
      />
      <BottomTab.Screen
        name="Contato"
        component={Contato}
        options={{
          headerShown: false,
          // tabBarIcon: ({ color }) => (
          //   <TabBarIcon name="ios-code" color={color} />
          // ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}