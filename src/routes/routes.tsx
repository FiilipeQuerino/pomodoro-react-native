import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";

import { HomeScreen } from "../screens/HomeScreen";
import { RegistrationTask } from "../screens/RegistrationTask";
// import { User } from "../screens/User";

import { Feather } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name="Inicio"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: () => {
                            return <Feather name="home" size={25} color="#7ab800" />
                        }
                    }}
                />
                <Screen
                    name="Cadastro de Task"
                    component={RegistrationTask}
                    options={{
                        tabBarIcon: () => {
                            return <Feather name="book-open" size={25} color="#7ab800" />
                        }
                    }}
                />
                {/* <Screen
                    name="Cadastro de Task"
                    // component={User}
                    options={{
                        tabBarIcon: () => {
                            return <Feather name="book-open" size={25} color="#7ab800" />
                        }
                    }}
                /> */}
            </Navigator>
        </NavigationContainer>
    );
}