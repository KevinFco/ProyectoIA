import "../../index.css";
import React from "react";

const HealthForm = () => {
  const sleepOptions = [
    { value: '8-10', label: '8-10 hours' },
    { value: '5-8', label: '5-8 hours' },
    { value: '2-5', label: '2-5 hours' }
  ];

  const physicalActivityOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
  ];

  const illnessOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
  ];

  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-6 text-white  justify-center ">
      <div className="flex flex-row gap-4 items-center">
        <label htmlFor="sleepHours" className="block font-semibold">Sleep:</label>
        <select className="text-black font-medium rounded-md p-2 border focus:outline-none" id="sleepHours">
          {sleepOptions.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-row gap-4 items-center">
        <label htmlFor="physicalActivity" className="block font-semibold">Physical Activity:</label>
        <select className="text-black font-medium rounded-md p-2 border focus:outline-none" id="physicalActivity">
          {physicalActivityOptions.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-row gap-4 items-center">
        <label htmlFor="illness" className="block font-semibold">Illness:</label>
        <select className="text-black bg-white font-medium rounded-md p-2 border focus:outline-none" id="illness">
          {illnessOptions.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default HealthForm;
