import React from "react";
import FormAlbum from "./FormAlbum";
import { createNewAlbum } from "../services/albumService";
import Swal from 'sweetalert2'

const CreateAlbum = () => {
    
    const onSubmit = async (values) => {
        try {
            const resp = await createNewAlbum(values.name, values.musician, Number(values.year), values.urlImage)
            if(resp.status === 201){
            Swal.fire({
                title: '<strong>Album Created Succesfully</strong>',
                icon: 'success',
                showCloseButton: true,
                focusConfirm: false,
                timer: 2000
              })
        }
        } catch (error) {
                Swal.fire({
                    title: `<strong>${error.response.data.error === 'Bad Request' ? error.response.data.message : error.response.data.error }</strong>`,
                    icon: 'error',
                    showCloseButton: true,
                    focusConfirm: false,
                    timer: 2000
                  })

        }
        
    }

    return(
        <div>
            <FormAlbum onSubmit={onSubmit} buttonText='Create New Album' formTitle='Create New Album' />
        </div>
    )
}

export default CreateAlbum;