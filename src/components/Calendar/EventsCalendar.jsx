
import { motion } from 'framer-motion';
import Events from '../Events/Events.jsx';
import { useFetchData } from "../hooks/useFetchData.js";
import { Loading } from "../ui/Loading.jsx";

const EventsCalendar = () => {
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

    return(
        
        <>
        
        <motion.section
        
        initial={{y:-35, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{delay:.25}}
       
        id='container' className="flex flex-wrap m-auto w-[70vw] p-10 mt-5  rounded-md bg-white gap-2 content-center justify-between">
        
           
            {isLoading ? <Loading /> : createEvents(data)}
          
        </motion.section>
        </>
    )
}

export default EventsCalendar