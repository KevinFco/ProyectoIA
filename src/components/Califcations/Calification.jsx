import '../../index.css';



const Calification =(props)=>{
    return(
      
        <div className="flex gap-28 mr-6 ">
            <div  className=" text-[#1F5B6C] mt-4">
            <p className="font-light text-md"> Name </p>
            <p className=" font-bold  text-2xl"> {props.name}  </p>
            </div>
            <div  className=" text-[#1F5B6C] mr-8 mt-4 ">
            <p className="font-light text-md">Grades</p>
            <p className=" font-bold text-2xl"> {props.grades}  </p>
            </div>
            <div>
            <img className=" h-[8vh] mt-4 pb-2" src={props.icono} alt="progress" />
            </div>
           
        </div>
      

        
        ) } 
        export default Calification