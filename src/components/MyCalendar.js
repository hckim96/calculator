import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import React from 'react';
import {View} from 'react-native';
export const MyCalendar = () => {
  return (
    <Calendar
      style={{
        borderWidth: 4,
        borderColor: 'gray',
        height: 350,
      }}></Calendar>
  );
};
