import React from 'react'
import { View, Text, Button } from 'react-native'
export const HomeHeader = ({navigation}) => {
    return (
        <View style = {{width: "100%", padding: 20, position: "absolute", flexDirection: "row", justifyContent: "space-between"}}>
            <Text></Text>
            <Button
                title = "추가"
                onPress = {() => {
                    navigation.navigate("Registration")
                }} 
            ></Button>
        </View>
    )
}
