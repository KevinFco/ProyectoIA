import React, {useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { ToggleButton } from 'primereact/togglebutton';

const Settings = () => {
    

    const [size, setSize] = useState('');
    const [idioma, setIdioma] = useState('');
    const [checked1, setChecked1] = useState('')

    
    const sizes = [
        {name: 'Small'},
        {name: 'Medium'},
        {name: 'Large'},
       
    ];
    const idiomas = [
        {name: 'Ingles'},
        {name: 'Español'},
        {name: 'Italiano'},
       
    ];
    
   
return(
    

    <div className='w-full'>
        <div className=' mx-3 my-16 flex flex-row items-center gap-2'>
    <h5 className='text-sm mt-2'>Tamaño de Letra</h5>
    <Dropdown  optionLabel="name" value={size} options={sizes} onChange={(e) => setSize(e.value)} placeholder="Select Size"/>
    </div>
    <div className=' mx-3 my-16 flex flex-row items-center gap-2'>
    <h5 className=''>Idioma</h5>
    <Dropdown optionLabel="name" value={idioma} options={idiomas} onChange={(e) => setIdioma(e.value)} placeholder="Select Languaje"/>
    </div>
    <div className='mx-3 my-16 flex flex-row items-center gap-2'>
        <h5 className='text-sm mt-2'>Modo nocturno</h5>
        <ToggleButton checked={checked1} onChange={(e) => setChecked1(e.value)} />
    </div>
    </div>


)

}
export default Settings;