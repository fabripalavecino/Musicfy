import SongDetails from "./SongDetails";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import Swal from 'sweetalert2';
import { deleteSong } from "../services/songService";

const ListSongs = () => {


    const { songs, setSongs } = useContext(AppContext);


    const onDelete = (id) => {
        Swal.fire({
            title: "Are you sure you want to delet this Song?",
            text: "You will not be able to recover your data!",
            showCancelButton: true,
            confirmButtonColor: "red",
            confirmButtonText: "Delete",
        }).then(deleteSong(id))
        setSongs(songs.filter(song => song.id !== id))
    }

    const onEdit = (id) => {
        
    }


    const renderedSongs = songs.map((song) => {
        return <SongDetails key={song.id} id={song.id} name={song.name} duration={song.duration} onDelete={onDelete} onEdit={onEdit} />
    })

    return(
        <div className="ui relaxed divided list">
            {renderedSongs}
        </div>
    )
}

export default ListSongs;