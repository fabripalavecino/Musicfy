const SongDetails = ({ id, name, duration, onEdit, onDelete }) => {

    function handleEdit(id){
        onEdit(id)
    }

    function handleDelete(id) {
        onDelete(id)
    }


    return (
        <div className="ui card">
            <div className="content">
                <h3 className="ui header">Name: {name}</h3>
                <h3>Duration: {duration} minutes</h3>
            </div>
            <button className="ui positive button"  onClick={() => handleEdit(id)}>Edit</button>
            <button className="ui negative button"  onClick={() => handleDelete(id)} >Delete</button> 
        </div>
    )
}

export default SongDetails;