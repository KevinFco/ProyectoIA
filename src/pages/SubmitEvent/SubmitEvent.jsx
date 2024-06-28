import '../../index.css';
import Btn from '../../components/btn/Btn';

const SubmitEvent = () => {

    return(
        <form className="grid  m-auto bg-white gap-4 rounded-md p-8 w-[75vw]">
            <div className="flex flex-wrap gap-4">
                <div className="grid gap-4">
                    <h1 className="mainFont font-semibold text-[48px]">Listening Test</h1>
                    <textarea  className="w-[40vw] h-[30vh] mt-4 mb-8 text-black font-medium p-2  rounded-md  border focus:outline-none border-black xxs:self-center" name="eventDescription" id="1" cols="30" rows="2">Lorem ipsum dolor sit amet consectetur. Cursus nisl nascetur iaculis libero fringilla neque. Aliquet tincidunt ut tempus posuere. Dictumst dui duis ante 
                        tempor a nibh ipsum auctor faucibus. In egestas tempus amet eget mattis venenatis.</textarea>
                    
                </div>
                <div className="grid gap-4 grid-cols-1">
                    <div className="flex gap-2 h-10 mt-28">
                        <p className="flex text-center items-center"><img className="h-9 w-9 opacity-50" src="src/assets/images/calendarIconBlack.svg" alt="Calendar"/>March 15</p>
                        <p className="flex text-center items-center"><img className="h-9 w-9 opacity-50" src="src/assets/images/clock.svg" alt="Clock"/>16:00</p>
                    </div>
                    <h2 className="text-[32px]">High Priority</h2>
                </div>
            </div>
            <div className="flex flex-wrap justify-between">
                <Btn doOnclick={"document.getElementById('selectedFile').click()"} styles={" font-bold rounded-md  p-2 pl-5 pr-5 bg-[#FFDA58] text-white"} content={"Add File"}/>
                <input className="hidden" type="file" name="archivoSeleccionado" id="selectedFile"/>
                <input className="font-bold rounded-md  p-2 pl-5 pr-5 bg-[#FBB01C] text-white" type="submit" value="Submit"/>
            </div>
          </form>
    )
}

export default SubmitEvent