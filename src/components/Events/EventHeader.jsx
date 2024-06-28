'../../index.css';
import { motion } from 'framer-motion';

const EventHeader = ({ isAdmin, eventTitle, eventDescription }) => {
  function adminView(isAdmin) {
    if (isAdmin) {
      return (
        <div className="flex gap-8 mt-[6rem]">
          <motion.a whileHover={{ scale: 1.02 }} href="#" className="text-white font-bold text-[24px] p-2 pl-12 pr-12 bg-[#FBB01C] rounded-md mb-12">
            Edit
          </motion.a>
          <motion.a whileHover={{ scale: 1.02 }} href="#" className="text-white font-bold text-[24px] p-2 pl-12 pr-12 bg-[#FBB01C] rounded-md mb-12">
            Delete
          </motion.a>
        </div>
      );
    } else {
      return (
        <motion.a whileHover={{ scale: 1.02 }} href="#" className="text-white font-bold text-[24px] p-2 pl-12 pr-12 bg-[#FBB01C] mr-auto rounded-md mt-[6rem] mb-12">
          Submit
        </motion.a>
      );
    }
  }

  return (
    <div className="grid gap-4">
      <h1 className="mainFont font-semibold xxs:text-[30px] text-[48px]">{eventTitle}</h1>
      <p className="w-[40vw] mt-4 xs:content-center">{eventDescription}</p>
      {adminView(isAdmin)}
    </div>
  );
};

export default EventHeader;