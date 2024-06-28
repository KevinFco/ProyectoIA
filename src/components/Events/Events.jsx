import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-regular-svg-icons';

const Events = ({ id, name, category, scheduled_at, priority, status }) => {
    return (
        <NavLink to={`/event/${id}`} className="no-underline">
            <div className="flex gap-2 bg-[#F8F9FB] rounded-md p-2 pl-4 pr-4 content-center items-center">
                <motion.div
                    initial={{ y: -35, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="flex gap-2 items-center w-full"
                >
                    <div className="bg-[#FBB01C] rounded-full w-10 h-10 xxs:w-5 xxs:h-5"></div>
                    <div className="grid">
                        <h3 className="font-bold mainFont">{name}</h3>
                        <div className="flex opacity-50 justify-between text-[12px] gap-2">
                            <p className="flex text-center items-center">
                                <FontAwesomeIcon icon={faCalendarAlt} className="h-5 w-5 m-2 opacity-50" />
                                {scheduled_at}
                            </p>
                            <p className="flex text-center items-center">
                                <FontAwesomeIcon icon={faClock} className="h-5 w-5 m-2 opacity-50" />
                                {priority}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </NavLink>
    );
};

export default Events;
