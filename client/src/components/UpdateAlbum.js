import { editAlbum } from "../services/albumService"
import FormAlbum from "./FormAlbum";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";

const UpdateAlbum = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const onSubmit = async ({ name, musician, year, urlImage }) => {
        try {
            const resp = await editAlbum(id, { name, musician, year: Number(year), urlImage}) 
            if(resp.status === 200){
            Swal.fire({
                title: '<strong>Album Updated Succesfully</strong>',
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
        <FormAlbum onSubmit={onSubmit} buttonText='Save Changes' formTitle='Edit Album' />
    )
}

export default UpdateAlbum;