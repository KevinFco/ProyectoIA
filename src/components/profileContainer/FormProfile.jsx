import React from 'react';
import '../../index.css';
import { TabView, TabPanel } from 'primereact/tabview';       
import Settings from './SettingsProfile.jsx';


const InfoProfile = () => {
 
    
    

    return(

      
<TabView  >
    <TabPanel   header="Edit Profile" className="font-semibold text-[#1F5B6C] w-30 mr-2 cursor-pointer  border-b hover:border-[#1F5B6C]">
      
    <div className="grid gap-2 min-w-full mt-2 ">
                <label className="text-[#1F5B6C]  font-medium " htmlFor="name">Name</label>
                <input type="text" className="w-64  rounded-3xl  px-4 py-1.5 ring-1 ring-[#1F5B6C]" placeholder="Name" />
                <label className="text-[#1F5B6C] font-medium " htmlFor="name">Username</label>
                <input type="text" className="w-64 rounded-3xl  px-4 py-1.5 ring-1 ring-[#1F5B6C]" placeholder="Username"/>
                <label className="text-[#1F5B6C] font-medium " htmlFor="name">Password</label>
                <input type="text" className="w-64 rounded-3xl  px-4 py-1.5 ring-1 ring-[#1F5B6C]" placeholder="Password"/>
                <label className="text-[#1F5B6C]  font-medium " htmlFor="name">Email</label>
                <input type="text" className="w-64 rounded-3xl px-4 py-1.5 ring-1 ring-[#1F5B6C]" placeholder="Email"/>
                <button className="bg-[#FBB01C] text-white rounded-2xl font-medium w-40 p-2 my-4 hover:bg-white hover:text-[#FBB01C] border-2 border-[#FBB01C] ">Edit</button>
            </div>
 
    </TabPanel>
    
</TabView>
         
     
    )


}

export default InfoProfile