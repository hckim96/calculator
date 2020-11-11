import React, { useEffect, useRef, useState } from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {HomeHeader} from '../components/HomeHeader.js';
import {ProfileCard} from '../components/ProfileCard.js';
import {MyPercentBar} from '../components/MyPercentBar.js';
import * as Progress from 'react-native-progress';

// 0 ~ 2 : 408100 , 3 ~ 8 : 441700, 9 ~ 14 : 488200, 15 ~ : 540900  2, 6, 6, 나머지 개월

export const HomeScreen = ({navigation}) => {
  const BASE_PAY = [408100, 441700, 488200, 540900];
  const [now, setNow] = useState(new Date());
  let transportationExpenses = 2800;
  let foodExpenses = 6000;
  let beginDay = new Date('January 30, 2020');
  let dischargeDay = new Date(beginDay);
  dischargeDay.setDate(dischargeDay.getDate() + 643);
  
  let militaryClass = getMilitaryClass(new Date(2020, 2));
  const leftDays = parseInt((dischargeDay - now) / (1000 * 60 * 60 * 24)) + 1;
  const passedDays = Math.ceil((now - beginDay) / (1000 * 60 * 60 * 24));
  const total = parseInt((dischargeDay - beginDay) / (1000 * 60 * 60 * 24));

  const [passed_pct, setPassed_pct] = useState(((now - beginDay) / (dischargeDay - beginDay)) * 100);
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
    // {
    //   dayName: '다음 진급일',
    //   dayNumber: 162,
    // },
  ];

  useEffect(() => {
    let id = setInterval(() => {
      setNow(new Date());
    }, 20);

    return () => clearInterval(id)
  }, [])
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
    let militaryClass = getMilitaryClass();
    let workingDays = getWorkingDay(now.getMonth());
    let totalPay = BASE_PAY[militaryClass] + workingDays * (foodExpenses + transportationExpenses);
    return (
      <View >
        <Text style = {{textAlign: "center", fontSize: 20, fontWeight: 'bold'}}>
        {`${parseInt(totalPay / 1000)},${parseInt(totalPay) % 1000 == 0 ? "000" : parseInt(totalPay) % 1000}`}
        </Text>
        <Text style={{fontSize: 15, fontWeight: 'bold', textAlign: "center"}}>
        {`(${BASE_PAY[militaryClass]} + ${workingDays} * ${foodExpenses + transportationExpenses})`}
        </Text>
      </View>
    )
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
            alignItems: 'center',
            justifyContent: 'center',
            
          }}>
          <MyPercentBar date = {now} dischargeDay = {dischargeDay} beginDay = {beginDay}/>
          <Text style = {{fontSize: 35, fontWeight: 'bold'}}>
            {now.toString()}
          </Text>
          
          <Text style={{fontSize: 55, fontWeight: 'bold'}}>
            {getTotalPay()}
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
