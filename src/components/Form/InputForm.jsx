import '../../index.css';
import React from 'react';
     function InputForm({name})
{

return (
    <input name={name} id={name} type="text" placeholder="Username" className="w-[200px] rounded-full px-4 py-1 border focus:outline-none border-[#000000]"/>   
)


}
export default InputForm