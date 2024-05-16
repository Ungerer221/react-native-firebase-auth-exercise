import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { MyStack } from './screens/navigation';


// TODO: Navigation Container

export default function App() {
  const [loggedIn, SetLoggedIn] = useState(false);

  // useEffect(() => {
  //   // var currentUser = auth.currentUser
  //   // console.log("current User" + (currentUser?.email))

  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       SetLoggedIn(true)
  //       console.log("userloggeded in..." + user.email)
  //     } else {
  //       SetLoggedIn(false)
  //       console.log("no user logged in...")
  //     }
  //   })
  //   // remember this terurn so that it doesnt get executed multiple times more loop safe
  //   return unsubscribe
  // })

  return (
    // <ProfileScreen />
    <>
      <NavigationContainer>
        <MyStack>
          {/* {loggedIn ? (
            <ProfileScreen />
          ) : (
            <LoginScreen />
          )} */}
        </MyStack>
        {/* THIS FOR WHEN the user is not logged in it will take the user to the login screen */}

      </NavigationContainer >
    </>
    // <LoginScreen /> */ }

  );
}

