import React, { useState, useRef } from "react";

const initialValues = {
    name: '',
    musician: '',
    year: 2010,
    urlImage: ''
}

const FormAlbum = ({ buttonText, formTitle, onSubmit }) => {

    const [values, setValues] = useState(initialValues);

    const ref = useRef();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(values);
        setValues(initialValues);
    }

    return(
        <div>
            <h2>{formTitle}</h2>
            <form ref={ref} className="ui form" style={{ marginBottom: '10px' }} onSubmit={handleSubmit}>
                <div className="field">
                    <label>Enter Album's Name</label>
                    <input value={values.name} onChange={handleInputChange} name='name' />
                </div>
                <div className="field">
                    <label>Enter Musician's or Band Name</label>
                    <input value={values.musician} onChange={handleInputChange} name='musician' />
                </div>
                <div className="field">
                    <label>Enter Year of Release(allowed between 2010-2021)</label>
                    <input value={values.year} onChange={handleInputChange} name='year' />
                </div>
                <div className="field">
                    <label>Enter url for the image of the Album</label>
                    <input value={values.urlImage} onChange={handleInputChange} name='urlImage' />
                </div>
                <button type="submit" className="ui button primary">{buttonText}</button> 
            </form>                   
        </div>
    )
}

export default FormAlbum;