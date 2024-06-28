import React from 'react';
import Events from './Events/Events';
import Btn from './btn/Btn';
import { useFetchEvent } from './hooks/useFetchEvent';

export function Message() {
  const messages = [
    { 
      description: "A new event has been created",
      eventId: 1  // ID del evento asociado
    },
    { 
      description: "An event has been deleted",
      eventId: 2  // ID del evento asociado
    },
    { 
      description: "An event is close to expiration",
      eventId: 3  // ID del evento asociado
    },
  ];

  // Utiliza useFetchEvent para obtener datos del evento
  const { data, isLoading } = useFetchEvent(1); // Puedes ajustar el ID del evento según sea necesario

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 gap-5 mt-10">
        {messages.map((msg, index) => (
          <div key={index} className="bg-white p-4 rounded-md flex flex-col gap-4">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 items-center gap-5">
              <div className="flex flex-col" style={{ width: '350px' }}>
                <h2 className="text-black text-md font-bold mb-4">New notification</h2>
                <h2 className="text-black text-xl">{msg.description}</h2>
              </div>
              {/* Mostrar datos del evento si isLoading es falso */}
              {isLoading ? <p>Loading...</p> : <Events event={data} />}
            </div>
            <Btn styles="pt-1 pb-1 bg-[#1F5B6C] rounded-md text-white" content="Explore"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Message;
