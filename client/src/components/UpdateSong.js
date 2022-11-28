import { useNavigate, useParams } from "react-router-dom";
import { updateSong } from "../services/songService";
import FormSong from "./FormSong"
import Swal from "sweetalert2";

const UpdateSong = () => {

    const { songId } = useParams()

    const navigate = useNavigate();

    const onSubmit = async ({ name, duration }) => {
        try {
            const resp = await updateSong(songId, { name, duration });
            if(resp.status === 200){
                Swal.fire({
                    title: '<strong>Song Updated Succesfully</strong>',
                    icon: 'success',
                    showCloseButton: true,
                    focusConfirm: false,
                    timer: 2000
                  })
                  setTimeout(() => {
                    navigate('/')
                  }, 2000);
                  
            }
        } catch (error) {
            throw error;
        }

    };

    return(
        <FormSong FormText='Edit Song' ButtonText='Save Changes' onSubmit={onSubmit} /> 
    )
}

export default UpdateSong;