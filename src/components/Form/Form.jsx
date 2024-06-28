import '../../index.css'
import { motion } from 'framer-motion'

const Form = ({value}) => {

    function readURL(input) {
        if(input.files && input.files[0]){
            let reader = new FileReader();

            reader.onload = function(e) {
                let preview = document.getElementById('preview').setAttribute('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    return (
        <>
        <form action="" className="flex gap-4 w-full rounded-md bg-white p-8">
                <div className="grid mainFont gap-4">
                    <div className="flex flex-wrap gap-[5vw]">
                        <div className="grid gap-2 text-[#1F5B6C]">
                            <label htmlFor="event_name">Name of the event</label>
                            <input id="event_name" className=" text-black font-medium  w-[281px] rounded-md p-2  border focus:outline-none border-black" name="event_name" type="text"/>
                        </div>
                        <div  className="grid gap-2 text-[#1F5B6C]">
                            <label htmlFor="eventDate">Date</label>
                            <select className=" text-black font-medium rounded-md p-1 pr-12  border focus:outline-none border-black" name="eventDate" id="event_Date">
                                <option value='1' >21/05/2024</option>
                            </select>
                        </div>
                        <div  className="grid gap-2 text-[#1F5B6C]">
                            <label htmlFor="eventHour">Hour</label>
                            <select className=" text-black font-medium rounded-md p-1 pr-12 border focus:outline-none border-black" name="eventHour" id="event_Hour">
                                <option value='1'>16:00</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid gap-2 text-[#1F5B6C]">
                        <label htmlFor="eventDescription">Description</label>
                        <textarea className=" text-black font-medium p-2 w-[47vw] h-16 rounded-md  border focus:outline-none border-black" name="eventDescription" id="1" cols="30" rows="2"></textarea>
                    </div>
                    <div className="flex h-[5rem] gap-[10vw]">
                        <div  className="grid gap-2 text-[#1F5B6C]">
                            <label htmlFor="eventPriority">Status</label>
                            <select className=" text-black font-medium rounded-md p-1 pr-12  border focus:outline-none border-black" name="eventPriority" id="event_Priority">
                                <option value='1' >High Priority</option>
                            </select>
                        </div>
                        <div  className="grid gap-2 text-[#1F5B6C]">
                            <label htmlFor="eventLabel">Label</label>
                            <select className=" text-black font-medium rounded-md p-1 pr-12  border focus:outline-none border-black" name="eventLabel" id="event_Label">
                                <option value='1'>Homework</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4 mainFont text-[#1F5B6C]">
                    <h4>Event Image</h4>
                    <label className="flex border-[2px] border-black mb-6 rounded-md w-[13rem] h-[13rem] cursor-pointer" htmlFor="event_img">
                        <input className="hidden" id="event_img" type="file" name="event_img" onChange={""}/>
                        <div className=" self-center">
                            <img id="preview" src="src/assets/images/calendarImage.svg" alt="Preview"/>
                        </div>
                    </label>
                    <div  className=" grid gap-2 text-[#1F5B6C]">
                        <label htmlFor="eventCategory">Category</label>
                        <select className=" text-black font-medium rounded-md p-1 pr-12  border focus:outline-none border-black" name="eventCategory" id="event_Category">
                            <option value='1'>University</option>
                        </select>
                    </div>
                    <motion.input
                    whileHover={{scale:1.02}}
                    className="ml-[50%] rounded-md  p-1 pl-2 pr-2 bg-[#FFDA58] text-white" 
                    type="submit" 
                    value={value}/>
                </div>
            </form>
        </>
    )
}

export default Form