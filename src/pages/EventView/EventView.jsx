import React from 'react';
import '../../index.css';
import Header from '../../components/Header.jsx';
import Menu from '../../components/Menu/Menu.jsx';
import EventHeader from '../../components/Events/EventHeader';
import EventInfo from '../../components/Events/EventInfo';
import { useFetchEvent } from '../../components/hooks/useFetchEvent';
import { useParams } from 'react-router-dom';
import { Loading } from '../../components/ui/Loading';

const EventView = () => {
    const { id } = useParams();
    const { data: event, isLoading } = useFetchEvent(id);

    if (isLoading) {
        return <Loading />;
    }

    if (!event) {
        return <div>Event not found</div>;
    }

    // Assuming event already contains category_name and status_events_name
    const { name, description, scheduled_at, category_name, status_name } = event;

    return (
        <>
            <Header/>
            <Menu/>
            <section className="flex flex-wrap mt-12 bg-white gap-4 rounded-md p-8 w-[75vw] m-auto">
            <EventHeader 
                isAdmin={false} 
                eventTitle={name} 
                eventDescription={description} 
            />
            <EventInfo 
                day={new Date(scheduled_at).toLocaleDateString()} 
                time={new Date(scheduled_at).toLocaleTimeString()} 
                priority={event.priority}  
                category={category_name}
                status={status_name}
            />
        </section>
        </>
    );
}

export default EventView;
