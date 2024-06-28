import React from 'react';
import '../../index.css';
import User from '../../components/user/User.jsx';
import FormProfile from '../../components/profileContainer/FormProfile.jsx';
import Progress from '../../components/profileContainer/ProgressBar.jsx';

const ProfileContainer = () => {


    return (
   
    <div className='flex flex-col justify-center items-center sm:flex-row xl:flex-row lg:flex-row mx-2 gap-16 mt-10' >
    <div className=" bg-white h-[45rem] p-10  rounded-xl " >
       <User/>
      <FormProfile/>
    </div>
    <div className=" bg-white w-2/2 h-[45rem] p-10 rounded-xl " >
    <div className='mb-40' >
      <label className='text-[#1F5B6C] '>Task Complete!</label>
      <Progress color="#1F5B6C"  progress="80" />
    </div>
    <div className=' '>
      <label className='text-[#FBB01C] font-medium text-[1rem] '  >How did you sleep today?</label>
      <img className="w-6 h-8 mt-1 " src="src/assets/images/SadFace.svg" alt="sad face"/>
      <Progress color="#FBB01C" progress="100" />
      <img className="w-6 h-8 mt-1"src="src/assets/images/neutralface.svg " alt="neutral face"/>
      <Progress color="#FBB01C" progress="70" />
      <img className="w-6 h-8 mt-1" src="src/assets/images/happyFace.svg" alt="happy face"/>
      <Progress color="#FBB01C" progress="50" />   
       
    </div>
    
   </div>
  
   </div>
     


    )

}

export default ProfileContainer
