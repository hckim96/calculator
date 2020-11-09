import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import React from 'react'




const nameOfClass = ["이등병", "일병", "상병", "병장"];

export const ProfileCard = ({name , militaryClass}) => {
    return (
        <View style = {{paddingVertical: 10, display: "flex", flexDirection: "row"}}>
            <View style = {{display: "flex", flex: 1,  justifyContent: "center"}}>
                <Image
                    style = {{width: 100, height: 100, borderRadius: 50, alignSelf: "center"}}
                    source = {require("../../src/assets/images/dummyProfilePicture.jpg")
                    }>
                </Image>
            </View>
            <View style = {{padding: 10, flex: 2, justifyContent: "center"}}>
                <Text style = {{fontSize: 20, fontWeight: "bold"}}>
                    {name}
                </Text>
                <Text>
                    {nameOfClass[militaryClass]}
                </Text>
            </View>
      </View>
    )
}


const styles = StyleSheet.create({
    // style
});

