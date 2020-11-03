import React from 'react'
import { View, Text, Button } from 'react-native'
export const ProfileScreen = ({navigation}) => {
    return (
        <View style = {{flex:1, alignItems: "center", justifyContent: "center"}}>
            <Text>
            this is ProfileScreen

            </Text>
            <Button title = "button"
                    onPress = {() => {navigation.navigate("Registration")}}>
                
            </Button>
        </View>
    )
}
