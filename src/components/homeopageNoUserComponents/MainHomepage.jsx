
import React from 'react';
import { CardHomepageNoUser } from './CardHomepageNoUser';
import { NavLink } from 'react-router-dom';

const MainHomepage = () => { 
    const promos = [
        { "Description": "Time Management", "Image": "src/assets/images/timeManegment.svg" },
        { "Description": "Calendar", "Image": "src/assets/images/calendarImage.svg" },
        { "Description": "Daily Reminders", "Image": "src/assets/images/notificationImage.svg" },
        { "Description": "Upload Proyects", "Image": "src/assets/images/UploadImage.svg" },
        { "Description": "Academic Records", "Image": "src/assets/images/academicImage.svg" },
        { "Description": "Personal Records", "Image": "src/assets/images/personalRecordImage.svg" },
      ];

  return (
    <div className="flex flex-col p-4 justify-center items-center mt-5">
        
            <div className="bg-[#1F5B6C] p-4 rounded-md grid  lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-center items-center w-[70vw] ">
              <div>
                <h1 className=" text-white uppercase font-light text-5xl m-5 -tracking-[-1rem]">Grove</h1>
                <p className="text-lg text-white font-medium m-6 ">Learn to manage your time to the maximum, Grove allows you to keep your time, your tasks, and your academic record organized. All in the same place.</p>
              </div>
              <img src="src/assets/images/homePage-PrincipalIcon.svg" alt="Grove" className="ml-auto max-w-full h-auto "/>
            </div>
       
      <div className="grid grid-cols-1 gap-2 mx-10 mt-0 w-[70vw]">
            <h2 className="text-center text-2xl text-[#1F5B6C] font-medium m-4">What can you do with grove?</h2>
            <div className="grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-5 w-[70vw]">
            {promos.map((promo, index) => (
                <div key={index} className="bg-white rounded-md text-center">
                <CardHomepageNoUser description={promo.Description} image={promo.Image} />
                </div>
            ))}
            
            </div>
            <div className=" grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 bg-[#FBB01C] p-2 mt-3 rounded-md justify-center gap-2">
                <h3 className="text-black font-normal text-xl  items-center m-auto">Be part of our team</h3>
                
                <NavLink to="/singup" className="bg-white text-black font-Normal text-xl  rounded-md p-3 items-center m-auto justify-center  ">Sign in</NavLink>
                
            </div>
      </div>
    </div>
  );
}
export default MainHomepage