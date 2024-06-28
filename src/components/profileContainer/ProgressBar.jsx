import React from 'react';
import '../../index.css';
import ProgressBar from '@ramonak/react-progress-bar';


const ProgresBar = (props) => {
 
    return(
        <ProgressBar className='mt-2'
        completed={props.progress}
        bgColor={props.color}
        width='40'
        labelColor="#ffffff"
        transitionDuration="500"
        maxCompleted={100}
        />
    )


}

export default ProgresBar