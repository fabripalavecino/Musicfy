import SongDetails from "./SongDetails";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const ListSongs = () => {


    const { songs } = useContext(AppContext);

    const onDelete = () => {}

    const onEdit = () => {}


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