import React, { useEffect, useState } from 'react';
import { useFetchData } from "../hooks/useFetchData.js";
import { Loading } from "../ui/Loading.jsx";
import Events from "../Events/Events.jsx";
import '../../index.css';

const ActivitiesWeekGrid = () => {
  const { data, isLoading } = useFetchData();
  const [completedThisWeek, setCompletedThisWeek] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const today = new Date();
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay());

      const completedEvents = data.filter(item => {
        
        return item.status_name === 'Inactive' && new Date(item.scheduled_at) >= startOfWeek;
      });

      console.log("Completed Events This Week:", completedEvents);

      setCompletedThisWeek(completedEvents);
    } else {
      setCompletedThisWeek([]);
    }
  }, [data]);

  return (
    <div className="bg-white p-4 rounded-md">
      <h2 className="text-xl text-[#1F5B6C] font-medium mx-2 mb-4">Activities finished this week</h2>
      <div className="bg-white p-2 rounded-full flex gap-4 items-center">
        <h2 className="text-[#1F5B6C] text-xl ml-1">{completedThisWeek.length}/{data ? data.length : 0} completed</h2>
      </div>
         
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 gap-6">
          {isLoading ? <Loading /> : (
            completedThisWeek.map((item) => (
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

export default ActivitiesWeekGrid;
