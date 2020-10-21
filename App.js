/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const DayList = ({items}) => {
  return (
      <FlatList
        data = {items}
        renderItem = {({item}) => {
          return(
            <View style = {{
              display: "flex",
            }}>
              <Text>
                {item.dayName}
              </Text>
              <Text>
                {item.dayNumber}
              </Text>
            </View>
          )
        }}
        >
      </FlatList>
  )
};

const App: () => React$Node = () => {
  let NumOfDays = 30;
  // 0 ~ 2 : 408100 , 3 ~ 8 : 441700, 9 ~ 14 : 488200, 15 ~ : 540900
  let money = 441700;
  
  let additionalPerDays = 8500;
  let additionalMoney = additionalPerDays * (20 + (10.0/7))
  
  let dischargeDay = new Date('November 3, 2021 15:00:00');
  let now = new Date();
  let beginDay = new Date("January 29, 2020 15:00:00")
  const leftDays = parseInt((dischargeDay - now)/(1000*60*60*24));
  const passedDays = Math.ceil((now - beginDay)/(1000*60*60*24));
  const total = parseInt((dischargeDay - beginDay)/ (1000 * 60 * 60 * 24))
  const dday = [
    {
      dayName: "전체 복무일",
      dayNumber: total,
    },
    {
      dayName: "현재 복무일",
      dayNumber: passedDays,
    },
    {
      dayName: "남은 복무일",
      dayNumber: leftDays,
    },
    {
      dayName: "다음 진급일",
      dayNumber: 162,
    },
    
  ];
  return (
    <View
      style={{
        padding: 30,
        display: "flex",
        flexDirection: "column",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "stretch",
        
      }}>
      <View style = {{flex: 1, display: "flex", flexDirection: "row",}}>
        <View style = {{display: "flex", flex: 1,  justifyContent: "center"}}>
          <Image
            style = {{width: 100, height: 100, borderRadius: 50, alignSelf: "center"}}
            source = {require("./images/spitz.png")
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
      <View style = {{flex: 1, alignItems: "center",}}>

        <Text style = {{fontSize: 15, fontWeight: "bold"}}>
          D - {leftDays}
        </Text>
        <Text style = {{fontSize: 55, fontWeight: "bold"}}>
          {`${parseInt((money + additionalMoney)/1000)},${parseInt(money + additionalMoney)%1000}`}
        </Text>
        </View>
      <View style = {{marginBottom: 30}}>
        <FlatList
          data = {dday}
          keyExtractor = {(item) => item.dayName }
          renderItem = {({item}) => {
            return (
              <View style = {{display: "flex", flexDirection: "row", marginBottom: 5, borderBottomWidth: 1, borderBottomColor: "gray"}}>
                <Text
                    style = {{flex: 1, color: "black", fontWeight: "bold", fontSize: 20}}>
                    {item.dayName}
                </Text>
                <Text
                  style = {{flex: 1, textAlign: "right", fontWeight: "bold", fontSize: 20}}>
                  {item.dayNumber}
                </Text>
              </View>
            )
          }}
        />

      </View>

      </View>


  );
};

const styles = StyleSheet.create({
  
});

export default App;
