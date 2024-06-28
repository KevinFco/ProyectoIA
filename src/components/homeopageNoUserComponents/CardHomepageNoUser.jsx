import React from 'react';

export function CardHomepageNoUser({ description, image }) {
  return (
   <div className="bg-white  rounded-md text-center">
       <h3 className="text-lg text-[#1F5B6C] font-medium mt-4">{description}</h3>
        <img src={image} alt="" className="mx-auto mt-2 max-w-full h-auto mb-4" />
    </div>       
          
  );
}
