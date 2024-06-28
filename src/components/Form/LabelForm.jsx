import '../../index.css';
import React from 'react';
     function LabelForm(props)  
{

return (
    <label htmlFor={props.content}  className="text-[#000000] mainFont font-medium"  >  {props.children }  {/* */}  </label>

   
)


}
export default LabelForm