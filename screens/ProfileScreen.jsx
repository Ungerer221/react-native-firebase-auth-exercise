import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React from 'react'

const ProfileScreen = () => {

    // TODO: handle logout
    const handleLogout = () => {}

    return (
        <SafeAreaView>
            <View style={{padding:20}}>
                <Text>Profile</Text>

                {/* TODO: Show logged in user info */}
                <Text>Email here</Text>
                <Text>Username here</Text>

                <Button 
                    title="Sign Out"
                    color="green"
                    onPress={handleLogout} />
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen