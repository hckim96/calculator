import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import React from 'react'





export const ProfileCard = () => {
    return (
        <View style = {{flex: 1, display: "flex", flexDirection: "row"}}>
            <View style = {{display: "flex", flex: 1,  justifyContent: "center"}}>
                <Image
                    style = {{width: 100, height: 100, borderRadius: 50, alignSelf: "center"}}
                    source = {require("../../src/assets/images/spitz.png")
                    }>
                </Image>
            </View>
            <View style = {{padding: 10, flex: 2, justifyContent: "center"}}>
                <Text style = {{fontSize: 20, fontWeight: "bold"}}>
                    김현철
                </Text>
                <Text>
                    상병
                </Text>
            </View>
      </View>
    )
}


const styles = StyleSheet.create({
    // style
});

