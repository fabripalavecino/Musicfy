import { useContext } from "react";
import { createSong } from "../services/songService";
import FormSong from "./FormSong";
import { AppContext } from "../context/AppContext";
import Swal from 'sweetalert2'

const NewSong = () => {

    const { albumId } = useContext(AppContext);

    const onSubmit = async (values) => {
        try {
            const resp = await createSong(values.name, values.duration, albumId);
            if(resp.status === 201) {
                Swal.fire({
                    title: '<strong>New Song Added Succesfully</strong>',
                    icon: 'success',
                    showCloseButton: true,
                    focusConfirm: false,
                    timer: 2000
                  })
            }
    
        } catch (error) {
            throw error;
        }
    }

    return (
        <FormSong onSubmit={onSubmit} FormText='Add New Song to Album' ButtonText='Save Song'  />
    )
}

export default NewSong;