import { useContext } from "react"
import { useNavigate, generatePath } from "react-router-dom"
import { AppContext } from "../context/AppContext"

const AlbumDetails = ({ id, name, musician, year, url, songs, onDelete, onEdit }) => {

    const navigate = useNavigate()

    const { setAlbumId, setSongs } = useContext(AppContext);


    function handleDelete(id) {
        onDelete(id)
    }

    function handleEdit(id) {
        onEdit(id)
    }

    const handleClick = (e, id) => {
        e.preventDefault()
        setSongs(songs)
        navigate(generatePath('/album/:id/songs',{ id }))
        
    }

    const handleAddSongs = () => {
        setAlbumId(id);
        navigate('/song')

    }



    return (
        <div className="ui card">
            <div className="content">
                <h4 className="ui">Album's Name: </h4>
                <div>{name}</div> 
                <hr/> 
                <h4 className="ui">Musician: </h4>
                <div>{musician}</div>
                <hr/> 
                <h4 className="ui">Release's Year: </h4>
                <div>{year}</div>
            </div>
            <div className="extra content">
                <h3><a href="" onClick={(e) => handleClick(e, id)}><i aria-hidden="true" className="music icon"></i>List Songs</a></h3>
            </div>
            <div className="image">
                <img src={url} alt={name} style={{ marginBottom: '10px'}}/>
            </div>
            <button className="ui blue button" onClick={() => handleAddSongs(id)}>Add Song</button>
            <button className="ui positive button"  onClick={() => handleEdit(id)}>Edit</button>
            <button className="ui negative button"  onClick={() => handleDelete(id)} >Delete</button>            
        </div>
    )
}

export default AlbumDetails; 