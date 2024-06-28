import '../../index.css';
import Form from './Form.jsx'


const FormContainer = ({formType, inputValue}) => {


    return (
        <>
        <section className="grid mt-8 w-[70vw] m-auto">
            <h2 className="text-[32px] text-[#1F5B6C]">{formType}</h2>
            <Form value={inputValue}/>
        </section>
        </> 
    )
}


export default FormContainer