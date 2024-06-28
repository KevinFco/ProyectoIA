import React from 'react';

import '../../index.css';
import Calendario from '../../components/Calendar/Calendario';
import Header from '../../components/Header';

import EventsCalendar from '../../components/Calendar/EventsCalendar';
import Menu from '../../components/Menu/Menu';
const Calendar = () => {
    return (
        <>
        <Header/>
        <Menu/>
        <div className="flex justify-center items-center z sm:m-10">
        <Calendario />
        </div>
      <EventsCalendar/>
        </>
    );
};

export default Calendar;