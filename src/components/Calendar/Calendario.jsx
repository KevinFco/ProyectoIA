import React, { useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useFetchData } from '../hooks/useFetchData';
import './Calendar.css'; // Importar el archivo CSS de estilos personalizados

const Calendario = ({ eventos }) => {
  const calendarRef = useRef(null);
  const {data:events} = useFetchData();

  const eventsList = [
    events.map((event) =>({
      title: event.name,
      start: "2024-09-20 09:00:00",
      end: "2024-09-20 09:00:00",
    }))
  ];

  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.addEventSource(eventos);
    }
  }, [eventos]);


  const renderDayHeader = ({ date }) => {
    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const dayInitial = weekdays[date.getDay()];
    return (
      <div className="  ">
        {dayInitial}
      </div>
    );
  };

  return (
<div className="container m-auto  overflow-hidden  xl:w-[90vh] lg:w-[80vh] md:w-[80vh] sm:w-[100vh]  xxs:p-8 md:p-4 xl:p-4" >
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={eventsList}
        editable={true}
        selectable={true}
        height="450px" // Ajustar altura del calendario
        aspectRatio={400 / 1270} // Ajustar proporción del calendario
        dayHeaderContent={renderDayHeader}
        headerToolbar={{
          left: 'prev',
          center: 'title',
          right: 'next'
        }}

      />
    </div>
  );
};

export default Calendario;