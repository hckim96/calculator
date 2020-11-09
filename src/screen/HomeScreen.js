import React, { useState } from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {HomeHeader} from '../components/HomeHeader.js';
import {ProfileCard} from '../components/ProfileCard.js';
let NumOfDays = 30;
// 0 ~ 2 : 408100 , 3 ~ 8 : 441700, 9 ~ 14 : 488200, 15 ~ : 540900  2, 6, 6, 나머지 개월
let money = 441700;

let additionalPerDays = 8500;
let additionalMoney = additionalPerDays * (20 + 10.0 / 7);

let now = new Date();
let dischargeDay = new Date('November 3, 2021 15:00:00');
let beginDay = new Date('January 29, 2020 15:00:00');

const leftDays = parseInt((dischargeDay - now) / (1000 * 60 * 60 * 24));
const passedDays = Math.ceil((now - beginDay) / (1000 * 60 * 60 * 24));
const total = parseInt((dischargeDay - beginDay) / (1000 * 60 * 60 * 24));


const dday = [
  {
    dayName: '전체 복무일',
    dayNumber: total,
  },
  {
    dayName: '현재 복무일',
    dayNumber: passedDays,
  },
  {
    dayName: '남은 복무일',
    dayNumber: leftDays,
  },
  {
    dayName: '다음 진급일',
    dayNumber: 162,
  },
];

export const HomeScreen = ({navigation}) => {
  const [difference, setDifference] = useState();
  const BASE_PAY = [408100, 441700, 488200, 540900];
  let transportationExpenses = 2800;
  let foodExpenses = 6000;
  let dischargeDay = new Date('November 3, 2021 15:00:00');
  let beginDay = new Date('January 29, 2020 15:00:00');
  let militaryClass = getMilitaryClass();
  // let workingDays = getWorkingDay();
  let now = new Date();
  function getWorkingDay(monthIndex) {
    let total =  new Date(2020, monthIndex + 1, 1) - new Date(2020, monthIndex, 1);
    total = total / (1000 * 60 * 60 * 24);

    let day = new Date(2020, monthIndex, 1); // 0 for sunday 6 for saturday

    let ret = parseInt((total / 7)) * 5;
    
    for (let i = 1; i < total % 7; i++) {
      if ((day + i) % 7 != 0 &&  (day + i) % 7 != 6) {
        ret++;
      }
    }
    return ret;
  }

  function getMilitaryClass() {
    let now = new Date();
    let nowMonth;
    if (now.getFullYear() === beginDay.getFullYear()) {
      nowMonth = now.getMonth();
    } else {
      nowMonth = now.getMonth() + 12;
    }
    let difference = nowMonth - beginDay.getMonth();
    if (difference < 2) {
      return 0;
    } else if (difference < 8) {
      return 1;
    } else if (difference < 14) {
      return 2;
    } else {
      return 3;
    }
  }

  function getTotalPay() {

    // should check military class 
    // to get month parameter
    
    let workingDays = getWorkingDay(now.getMonth());
    let totalPay = BASE_PAY[militaryClass] + workingDays * (foodExpenses + transportationExpenses);
    return `${parseInt(totalPay / 1000)},${
      parseInt(totalPay) % 1000 == 0 ? "000" : parseInt(totalPay) % 1000
    }`
    
  }
  return (
    <View style={{flexDirection: 'column', flex: 1}}>
      <HomeHeader navigation={navigation}></HomeHeader>

      <View
        style={{
          paddingHorizontal: 30,
          paddingVertical: 40,
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'stretch',
        }}>

        <ProfileCard name = "ㅁㄴㅇ" militaryClass = {militaryClass}></ProfileCard>

        <View
          style={{
            flex: 1,
            // backgroundColor: "gray",
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>D - {leftDays}</Text>
          <Text style={{fontSize: 55, fontWeight: 'bold'}}>
            {`${parseInt((money + additionalMoney) / 1000)},${
              parseInt(money + additionalMoney) % 1000
            }`}
          </Text>
          <Text>
            {getTotalPay()}
          </Text>
          <Text>
            {getWorkingDay(now.getMonth())}
          </Text>
        </View>
        <View style={{bottom: 0}}>
          <FlatList
            data={dday}
            keyExtractor={(item) => item.dayName}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: 5,
                    borderBottomWidth: 1,
                    borderBottomColor: 'gray',
                  }}>
                  <Text
                    style={{
                      flex: 1,
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}>
                    {item.dayName}
                  </Text>
                  <Text
                    style={{
                      flex: 1,
                      textAlign: 'right',
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}>
                    {item.dayNumber}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};
