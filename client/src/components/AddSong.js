import { useState, useRef, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { createSong } from "../services/songService";


const initialValues = {
    name: '',
    duration: 0.0
}

const AddSong = () => {

    const [values, setValues] = useState(initialValues);

    const { albumId } = useContext(AppContext);

    const ref = useRef();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const resp = await createSong(values.name, values.duration, albumId)
            if(resp.status === 201) {
                alert('exito')
            }
    
        } catch (error) {
            throw error;
        }
    }

    return(
        <div>
            <h2>Add Song To Album</h2>
            <form ref={ref} className="ui form" style={{ marginBottom: '10px' }} onSubmit={handleSubmit}>
                <div className="field">
                    <label>Enter Name</label>
                    <input value={values.name} onChange={handleInputChange} name='name' />
                </div>
                <div className="field">
                    <label>Enter Duration</label>
                    <input value={values.duration} onChange={handleInputChange} name='duration' />
                </div>
                <button type="submit" className="ui button primary">Add Song</button> 
            </form>
        </div>
    )
}

export default AddSong;