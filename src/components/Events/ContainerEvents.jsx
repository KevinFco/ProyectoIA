// ContainerEvents.jsx
import React from "react";
import { useFetchData } from "../hooks/useFetchData.js";
import { Loading } from "../ui/Loading.jsx";
import Events from "./Events.jsx";
 

import "../../index.css";

export function ContainerEvents() {
  const { data, isLoading } = useFetchData();

  
  const createEvents = (items) => {
    if (!items) {
      return null; 
    }

    return items.map((item) => (
      <Events
        key={item.id}
        id={item.id}
        name={item.name} 
        scheduled_at={item.scheduled_at}
        priority={item.priority}
      />
    ));
  };

  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 m-auto w-[70vw] p-20 rounded-md bg-white gap-4 xxs:p-4 xxs:w-[80vw] content-center justify-between">
      {isLoading ? <Loading /> : createEvents(data)}
    </div>
  );
}

export default ContainerEvents;
