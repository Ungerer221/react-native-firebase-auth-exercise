import LoginScreen from "../LoginScreen";
import RegisterScreen from "../RegisterScreen";
import ProfileScreen from "../ProfileScreen";

import { useEffect, useState } from 'react';

// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";


export const Stack = createNativeStackNavigator();

export function MyStack() {

    let initialScreen = 'Login'
    // dont have to set the initial route name as if it cannot fin gthe login page is will switch to the home page

    const [loggedIn, SetLoggedIn] = useState(false);

    useEffect(() => {
        // var currentUser = auth.currentUser
        // console.log("current User" + (currentUser?.email))

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                SetLoggedIn(true)
                console.log("userloggeded in..." + user.email)
            } else {
                SetLoggedIn(false)
                console.log("no user logged in...")
            }
        })
        // remember this terurn so that it doesnt get executed multiple times more loop safe
        return unsubscribe
    })

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="initialScreen">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    );
}