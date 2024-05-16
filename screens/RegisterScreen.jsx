// TODO: Create Register Screen & Register Functionality

import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'


export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>

            <View>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.backButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <Text>RegisterScreen</Text>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding:20,
        gap:10,
        alignItems: 'center',
    },
    backButton: {
        backgroundColor: 'blue',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:24,
    },
    backButtonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
    },
    inputField: {
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 15,
        width: '100%',
        padding: 10,
      },
})