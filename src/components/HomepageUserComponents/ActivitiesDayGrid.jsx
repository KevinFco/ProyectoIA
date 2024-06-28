import React, { useEffect, useState } from 'react';
import { useFetchData } from "../hooks/useFetchData.js";
import { Loading } from "../ui/Loading.jsx";
import Events from "../Events/Events.jsx";
import '../../index.css';

const ActivitiesDayGrid = () => {
  const { data, isLoading } = useFetchData();
  const [completedToday, setCompletedToday] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const completedEvents = data.filter(item => item.status_name === 'Inactive');
      setCompletedToday(completedEvents);
    } else {
      setCompletedToday([]);
    }
  }, [data]);

  return (
    <div className="bg-white p-4 rounded-md">
      <h2 className="text-xl text-[#1F5B6C] font-medium mx-2 mb-4">Activities finished today</h2>
      <div className="bg-white p-2 rounded-full flex gap-4 items-center">
        <h2 className="text-[#1F5B6C] text-xl ml-1">{completedToday.length}/{data ? data.length : 0} completed</h2>
      </div>
         
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 gap-6">
          {isLoading ? <Loading /> : (
            completedToday.map((item) => (
              <Events
                key={item.id}
                id={item.id}
                name={item.name} 
                scheduled_at={item.scheduled_at}
                priority={item.priority}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesDayGrid;
