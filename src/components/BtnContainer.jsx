import '../index.css';
import { motion } from "framer-motion";
import Btn from "./btn/Btn.jsx";


const BtnContainer = () => {

    return (

        <motion.section
        initial={{y:-35, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{delay:.25}}
        className="gird w-[70vw] m-auto p-4 rounded-md bg-white gap-4 content-center mb-8 justify-between">
        <motion.h2
        initial={{y:-35, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{delay:.25}}
        className="text-[#1F5B6C] mainFont text-[24px]">Search by:</motion.h2>
            <div className="flex flex-wrap gap-4 content-center justify-evenly">
                <Btn styles="p-10 pt-2 pb-2 bg-[#1F5B6C] rounded-md text-white" content="Day"/>
                <Btn styles="p-10 pt-2 pb-2 bg-[#1F5B6C] rounded-md text-white" content="Week"/>
                <Btn styles="p-10 pt-2 pb-2 bg-[#1F5B6C] rounded-md text-white" content="Month"/>
            </div>
      </motion.section>

    )

}

export default BtnContainer