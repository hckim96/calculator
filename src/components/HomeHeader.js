import React from 'react'
import { View, Text, Button } from 'react-native'
export const HomeHeader = ({navigation}) => {
    return (
        <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
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
