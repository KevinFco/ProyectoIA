import React, { useContext } from "react";
import TaskGrid from "./TaskGrid";
import Calendar from "../Calendar/Calendario";
import Btn from "../btn/Btn";
import HealthForm from "../Form/HealthForm";
import ActivitiesDayGrid from './ActivitiesDayGrid';
import ActivitiesWeekGrid from './ActivitiesWeekGrid';
import { useFetchData } from "../hooks/useFetchData.js";
import { Loading } from "../ui/Loading.jsx";
import Events from "../Events/Events.jsx";
import { GlobalContext } from "../../global/GlobalState.jsx";

const MainContentHomepage = () => {
  const { data, isLoading } = useFetchData();

  const {state} = useContext(GlobalContext)


  const createEvents = (items) => {
    if (!items) {
      return null; 
    }


    return items.map((item) => (
      <Events
        key={item.id}
        id={item.id}
        name={item.name} 
        category={item.category_name} // category_name según la estructura de datos
        status={item.status_name} // status_name según la estructura de datos
        scheduled_at={item.scheduled_at}
        priority={item.priority}
      />
    ));
  };
  return (
    <div className="grid  xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  p-4 m-auto justify-center">
      <div className="flex flex-col  gap-7 mt-8   p-10 ">
        <div>
          <div className="flex flex-col gap-8 ">
            <div className="bg-[#1F5B6C]   flex gap-4 items-center rounded-lg py-4 px-10">
              <h2 className="text-white text-2xl">¡Welcome {state.user ? state.user.name : 'User'}!</h2>
            </div>
            <div className="bg-white py-6 px-4 rounded-md ">
              <h2 className="text-xl text-[#1F5B6C] font-medium m-2 ">
                Performance 
              </h2>
              <div>
                <TaskGrid />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md  ">
          <h2 className="text-xl text-[#1F5B6C] font-medium mx-2 mb-4">
            Pending Events
          </h2>
          <div className="flex flex-col justify-center items-center ">
            <div className=" xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid gap-6 ">
            {isLoading ? <Loading /> : createEvents(data)}
            </div>
            <button className="bg-white text-[#FBB01C] font-bold text-xl rounded-md content-center">
              <img
                className="h-6 w-6 mt-2"
                src="src/assets/images/more.svg"
                alt="More"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col  gap-4 mt-8   py-10 px-2 items-center">
        <div>
        <h2 className=" uppercase font-light text-3xl -tracking-[-1rem] text-center  ">
          Calendar
        </h2>
        <div className="  rounded-md ">
          <Calendar />
        </div>
        </div>
        <div className=" flex flex-col  gap-7 px-10 ">

        
        <div className="bg-[#1F5B6C] p-4  rounded-md grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 gap-4 items-center">
          <div className="col-span-3 w-full">
            <HealthForm />
          </div>
          <div className="flex justify-center col-span-1 w-full">
            <Btn
              styles="p-2 bg-[#FBB01C]  rounded-md text-white font-medium text-lg"
              content="Submit"
            />
          </div>
        </div>
        </div>
      </div>
      <div className=" flex flex-col  gap-7 px-10 mt-1 mb-8">
      <ActivitiesDayGrid />
      </div>
      <div className=" flex flex-col  gap-7 px-10 mt-1 ">
      <ActivitiesWeekGrid />
      </div>
    </div>
  );
};
export default MainContentHomepage;
