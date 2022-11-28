import { useState, useRef } from "react";



const initialValues = {
    name: '',
    duration: 0.0
}

const FormSong = ({ FormText, ButtonText, onSubmit }) => {

    const [values, setValues] = useState(initialValues);


    const ref = useRef();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        onSubmit(values);
        setValues(initialValues);
    }

    return(
        <div>
            <h2>{FormText}</h2>
            <form ref={ref} className="ui form" style={{ marginBottom: '10px' }} onSubmit={handleSubmit}>
                <div className="field">
                    <label>Enter Name</label>
                    <input value={values.name} onChange={handleInputChange} name='name' />
                </div>
                <div className="field">
                    <label>Enter Duration</label>
                    <input value={values.duration} onChange={handleInputChange} name='duration' />
                </div>
                <button type="submit" className="ui button primary">{ButtonText}</button> 
            </form>
        </div>
    )
}

export default FormSong;