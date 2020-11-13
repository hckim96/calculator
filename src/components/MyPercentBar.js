import { View, Text } from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';

export const MyPercentBar = ({date, beginDay, dischargeDay}) => {
    const calculatePercent = () => {
        return ((((date - beginDay) / (dischargeDay - beginDay))))
    }
    return (
        <View style = {{borderColor: "gray", borderWidth: 4}}>
            <Progress.Bar progress={calculatePercent()} 
                        width={340}
                        color = "black" 
                        animated = {true}
                        borderRadius = {0}
                        height = {10}
                        />
            <Text>
                {`${(((date - beginDay) / (dischargeDay - beginDay)) * 100).toPrecision(10)}%`}
            </Text>
        </View>
    )
}
