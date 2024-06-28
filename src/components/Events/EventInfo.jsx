import React from 'react';
import '../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-regular-svg-icons';

const EventInfo = ({ day, time, priority, category, status }) => {
  return (
    <div className="grid gap-4 grid-cols-1">
      <div className="flex gap-2 h-10 mt-28">
        <p className="flex text-center items-center">
          <FontAwesomeIcon icon={faCalendarAlt} className="h-5 w-5 m-2 opacity-50" />
          {day}
        </p>
        <p className="flex text-center items-center">
          <FontAwesomeIcon icon={faClock} className="h-5 w-5 m-2 opacity-50" />
          {time}
        </p>
      </div>
      <div className="flex opacity-50 justify-between text-[12px] gap-2">
        <p className="flex text-center items-center">
          Category: {category}
        </p>
        <p className="flex text-center items-center">
          Status: {status}
        </p>
      </div>
      <h2 className="text-[32px]">{priority}</h2>
    </div>
  );
};

export default EventInfo;
