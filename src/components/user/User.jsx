import React from 'react';
import '../../index.css';


const User = (props) => {
 
    return(
    
         <div className=' flex flex-col justify-center items-center mb-2'>
             <img className="rounded-full w-40 h-40 " src="src/assets/images/profileExample.jpg" alt="Photo profile" />
            <p className="text-[#1F5B6C] text-xl font-bold  mb-2">@user001</p>
         </div>
           

         
    )


}

export default User