import React from 'react';



const InfoPage = () => {

    return(
    
     <>
   <div className='flex justify-center items-center'> 
    <div class="flex flex-col justify-center items-center bg-white w-80% sm:[10rem] md:[20rem] lg:[20rem] h-[50rem] p-8 md:p-16 rounded-xl">
        <select class="text-[#1F5B6C] font-bold rounded-md p-2 border border-black" name="" id="">
            <option value='1' selected>No hay estudiantes para seleccionar</option>
        </select>
        <div class="flex flex-col mx-auto ">
            <div class="grid">
                <label class="text-[#1F5B6C] mt-6 font-medium mr-5" for="name">Nombre:</label>
                <label class="text-gray-400 p-1 h-10 w-full md:w-[40rem] font-medium rounded-md border border-black" for="name">Nombre del estudiante</label>
           
                <label class="text-[#1F5B6C] mt-6 font-medium mr-5" for="name">Carne:</label>
                <label class="text-gray-400 p-1 h-10 w-full md:w-[40rem] font-medium rounded-md border border-black" for="name">Carne</label>
           
                <label class="text-[#1F5B6C] mt-6 font-medium mr-5" for="name">Gender:</label>
                <label class="text-gray-400 p-1 h-10 w-full md:w-[40rem] font-medium rounded-md border border-black" for="name">Gender</label>
           
                <label class="text-[#1F5B6C] mt-6 font-medium mr-5" for="name">Hours of sleep:</label>
                <label class="text-gray-400 p-1 h-10 w-full md:w-[40rem] font-medium rounded-md border border-black" for="name">Hours of leep</label>
           
                <label class="text-[#1F5B6C] mt-6 font-medium mr-5" for="name">Physical Activity:</label>
                <label class="text-gray-400 p-1 h-10 w-full md:w-[40rem] font-medium rounded-md border border-black" for="name">Physical Activity</label>
           
                <label class="text-[#1F5B6C] mt-6 font-medium mr-5" for="name">Sickness:</label>
                <label class="text-gray-400 p-1 h-10 w-full md:w-[40rem] font-medium rounded-md border border-black" for="name">Sickness</label>
           

            </div>
        </div>
    </div>
</div>

     
     </>
     
    
    )
    }
    
    export default InfoPage;