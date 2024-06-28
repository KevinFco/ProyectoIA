import React, { useState, useEffect } from 'react';
import TaskCard from './TaskCard';
import { useFetchData } from '../hooks/useFetchData';

const TaskGrid = () => {
    const { data: events, isLoading } = useFetchData();
    const [taskData, setTaskData] = useState([]);

    useEffect(() => {
        if (events && events.length > 0) {
            const totalEvents = events.length;
            const pendingEvents = events.filter(event => event.status_name === 'Active').length; // Filtrar eventos activos
            const finishedEvents = totalEvents - pendingEvents;

            const pendingPercentage = Math.round((pendingEvents / totalEvents) * 100); // Redondear sin decimales
            const finishedPercentage = Math.round((finishedEvents / totalEvents) * 100); // Redondear sin decimales

            setTaskData([
                { title: "Pending Events", image: "./src/assets/images/taskInProgress.svg", percentage: `${pendingPercentage}%` },
                { title: "Finished Events", image: "./src/assets/images/CompletedTasks.svg", percentage: `${finishedPercentage}%` }
            ]);
        } else {
            setTaskData([
                { title: "Pending Events", image: "./src/assets/images/taskInProgress.svg", percentage: "0%" },
                { title: "Finished Events", image: "./src/assets/images/CompletedTasks.svg", percentage: "0%" }
            ]);
        }
    }, [events]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-row w-[70%] xxs:flex-col xxs:w-[90%] gap-5 m-auto justify-center items-center">
            {taskData.map((task, index) => (
                <TaskCard key={index} title={task.title} image={task.image} percentage={task.percentage} />
            ))}
        </div>
    );
}

export default TaskGrid;
