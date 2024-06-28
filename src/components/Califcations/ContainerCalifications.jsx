import '../../index.css';
import React from 'react';
import Calification from './Calification';
import Progress from '../../assets/images/progress-icon.svg';

const Contenedor = () => {
  return (
    <div className=" w-full max-w-3xl justify-center items-center  bg-white shadow-lg rounded-lg flex flex-col  divide-y divide-gray-[#E6E6E6]">
      <div className="flex gap-36 mt-4">
        <h1 className="font-medium text-xl text-[#1F5B6C]">Tasks</h1>
        <h1 className="font-medium text-xl text-[#1F5B6C]">Grades</h1>
        <h1 className="font-medium text-xl text-[#1F5B6C]">Progress</h1>
      </div>
      <div className="flex flex-col divide-y divide-gray-[#E6E6E6] mt-8 ">
        <Calification name="Tarea 1" icono={Progress} grades="80.00" />
        <Calification name="Tarea 2" icono={Progress} grades="80.00" />
        <Calification name="Tarea 3" icono={Progress} grades="80.00" />
        <Calification name="Tarea 4" icono={Progress} grades="80.00" />
        <Calification name="Tarea 5" icono={Progress} grades="80.00" />
      </div>
    </div>
  );
};

export default Contenedor;

   