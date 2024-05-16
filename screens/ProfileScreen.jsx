import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React from 'react'

const ProfileScreen = () => {

    // TODO: handle logout
    const handleLogout = () => {}

    return (
        <SafeAreaView>
            <View style={{padding:20}}>
                <Text>Profile</Text>

                <Text>Email here</Text>
                <Text>Username here</Text>

                <Button 
                    title="Sign Out"
                    
                    color="blue"
                    onPress={handleLogout} />
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen