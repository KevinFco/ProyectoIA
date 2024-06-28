import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear, faGrin, faMeh, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSadTear as farSadTear, faGrin as farGrin, faMeh as farMeh } from '@fortawesome/free-regular-svg-icons'; // Importa iconos regulares correspondientes
import { useFetchData } from './hooks/useFetchData'; // Ajusta la ruta según la ubicación de tu archivo useFetchData
import { NavLink } from 'react-router-dom';

const Header = () => {
    const { data: events, isLoading } = useFetchData();
    const [completedTasks, setCompletedTasks] = useState(0);

    useEffect(() => {
        if (events && events.length > 0) {
            const completedEvents = events.filter(event => event.status_name === 'Inactive').length; // Aquí asumo que 'Inactive' significa completado, ajusta según tu lógica

            setCompletedTasks(completedEvents);
        } else {
            setCompletedTasks(0);
        }
    }, [events]);

    // Calcular la proporción de eventos completados
    const totalEvents = events ? events.length : 0;
    const completionRatio = totalEvents > 0 ? completedTasks / totalEvents : 0;

    // Determinar qué iconos deben ser sólidos y cuáles regulares
    let sadIcon = completionRatio <= 0.33 ? faSadTear : completionRatio <= 0.66 ? farSadTear : farSadTear;
    let mehIcon = completionRatio <= 0.33 ? farMeh : completionRatio <= 0.66 ? faMeh : farMeh;
    let grinIcon = completionRatio <= 0.33 ? farGrin : completionRatio <= 0.66 ? farGrin : faGrin;

    //busqueda(searchbar)
    const [searchEvent, setSearchEvent] = useState('')
    const [filteredEvents, setFilteredEvents] = useState([])

    const isEmpty = (value) => {
        if (value == ''){
             return true
        } else {
            return false
        }
    }

    const handleInputChange = (e) => { 
        const searchTerm = e.target.value;
        setSearchEvent(searchTerm)

        const filteredEvent = events.filter((event) =>
            event.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
  
        setFilteredEvents(filteredEvent);
    }

    return (
        <header className="pt-10 w-[100vw] lg:px-48 xs:px-10 mb-4 flex flex-col lg:flex-row gap-10 items-center justify-between xxs:ml-2 xxs:items-start">
            <div className="z-10 relative rounded-md flex items-center">
                <input
                    type="text"
                    value={searchEvent}
                    onChange={handleInputChange}
                    placeholder="Search..."
                    className="w-[445px] xxs:w-[245px] rounded-full px-4 py-2 border focus:outline-none border-black pr-10"
                />
                <ul className={ isEmpty(searchEvent) ? 'hidden' : 'absolute left-5 top-10 bg-white z-[-10] pt-4 pb-4 pl-2 pr-2 rounded-md'}>
                    { isEmpty(searchEvent) ? <li></li> || filteredEvents.length === 0 : filteredEvents.map(event => <li
                        className='w-full font-bold text-[#1F5B6C] pt-2 pb-2 pl-4 pr-4 rounded-md hover:bg-[#1F5B6C] hover:text-white' 
                        key={event.id}>
                            <NavLink to={`/event/${event.id}`} className="no-underline">{event.name}
                            </NavLink>
                    </li>)}
                 </ul>
                <button className="absolute right-0 mr-3" type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <div className="bg-white p-2 rounded-full flex gap-9 xxs:w-[320px] xxs:self-center xxs:gap-4 w-96 items-center">
                <h2 className="text-[#1F5B6C] text-xl ml-1">Task overload:</h2>
                <FontAwesomeIcon icon={sadIcon} className={`w-8 h-8 text-[#1F5B6C] ${completionRatio <= 0.33 ? 'fas' : 'far'}`} />
                <FontAwesomeIcon icon={mehIcon} className={`w-8 h-8 text-[#1F5B6C] ${completionRatio <= 0.33 ? 'fas' : 'far'}`} />
                <FontAwesomeIcon icon={grinIcon} className={`w-8 h-8 text-[#1F5B6C] ${completionRatio <= 0.33 ? 'fas' : 'far'}`} />
            </div>
            <div className="bg-white p-2 rounded-full flex gap-9 xxs:w-[320px] xxs:self-center xxs:gap-4 w-96 items-center">
                <h2 className="text-[#1F5B6C] text-xl ml-1">Task Streak:</h2>
                <h2 className="text-black text-xl">{completedTasks} task completed</h2>
            </div>
        </header>
    );
};

export default Header;
