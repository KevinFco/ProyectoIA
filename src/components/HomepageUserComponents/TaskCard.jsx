import React from 'react';

const TaskCard = ({ title, image, percentage }) => {
    return (
        <div className="bg-[#FBB01C] rounded-md w-[70%]  flex flex-col items-center p-2">
            <div className="flex flex-row gap-2">
                <img className="w-8 h-8" src={image} alt={title}  />
                <h2 className="text-lg text-white font-medium text-center">{title}</h2>
            </div>
            <h2 className="text-2xl text-white font-bold m-3 text-center">{percentage}</h2>
        </div>
    );
}

export default TaskCard;
