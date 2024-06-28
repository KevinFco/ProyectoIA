import { motion } from "framer-motion";
import '../../index.css';
//"p-10 pt-2 pb-2 bg-[#76C6D1] rounded-md text-white"
const Btn = ({styles, content, doOnClick}) => {

    return (

        <motion.button
        initial={{y:-35, opacity:0}}
        animate={{y:0, opacity:1}}
        whileHover={{scale:1.02}}
        onClick={doOnClick}
        className={styles}>{content}</motion.button>
    

    )


}

export default Btn