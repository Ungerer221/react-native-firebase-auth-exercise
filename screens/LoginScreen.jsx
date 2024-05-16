import { TextInput, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { handleLogin } from '../services/authService';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   TODO: Login Function
  const login = () => { handleLogin(email, password) }

  // todo : Navigation 
  const Stack = createNativeStackNavigator();

  const [loggedIn, SetLoggedIn] = useState(false);
  const navigate = useNavigation();
  const goTo = (screen) => {
    navigate.navigate(screen)
  }

  useEffect(() => {
    // var currentUser = auth.currentUser
    // console.log("current User" + (currentUser?.email))

    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // SetLoggedIn(true)
            goTo("Profile")
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
    <SafeAreaView >
      <View style={styles.container}>
        <Text>Login</Text>

        <TextInput
          style={styles.inputField}
          placeholder="Your Email"
          onChangeText={newText => setEmail(newText)}
          defaultValue={email}
        />

        <TextInput
          style={styles.inputField}
          placeholder="Your Password"
          onChangeText={newText => setPassword(newText)}
          defaultValue={password}
        />

        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Login Button</Text>
        </TouchableOpacity>

        {/* TODO: Add Register Navigation */}
        <TouchableOpacity
          style={styles.signUpNavBtn}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>Create an Account</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
  inputField: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 15,
    width: '100%',
    padding: 10,
  },
  button: {
    backgroundColor: "green",
    textAlign: 'center',
    padding: 20,
    marginTop: 30,
    width: '100%',
    borderRadius: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  signUpNavBtn: {
    width: '70%',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  }
})