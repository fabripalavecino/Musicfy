const AlbumDetails = ({ id, name, musician, year, url, songs, onDelete, onEdit }) => {


    function handleDelete(id) {
        onDelete(id)
    }

    function handleEdit(id) {
        onEdit(id)
    }

    const handleClick = (e) => {
        e.preventDefault();
        
    }



    return (
        <div className="ui card">
            <div className="content">
                <h3 className="ui header">Album's Name: {name} </h3>
                <h3 className="ui header">Musician: {musician}</h3>
                <h3 className="ui header">Year of release: {year}</h3>
            </div>
            <div className="extra content">
                <a href="" onClick={handleClick}><i aria-hidden="true" className="music icon"></i>22 Friends</a>
            </div>
            <div className="image">
                <img src={url} alt={name} style={{ marginBottom: '10px'}}/>
            </div>
            <button className="ui positive button"  onClick={() => handleEdit(id)}>Edit</button>
            <button className="ui negative button"  onClick={() => handleDelete(id)} >Delete</button>            
        </div>
    )
}

export default AlbumDetails; 