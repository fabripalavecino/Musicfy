import React, { useEffect, useState } from 'react';
import { useNavigate, generatePath } from 'react-router-dom';
import { getAllAlbums, deleteAlbum  } from '../services/albumService';
import AlbumDetails from './AlbumDetails';
import Swal from 'sweetalert2';


const List = () => {

    const [albums, setAlbums] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
     const fetchData  = async () => {   
        const response  = await getAllAlbums()
        setAlbums(response.data);
     }  
     fetchData(); 
    },[])


    const onDelete = (id) => {
        Swal.fire({
            title: "Are you sure you want to delet this Album?",
            text: "You will not be able to recover your data!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "red",
            confirmButtonText: "Delete",
            closeOnConfirm: false
        }).then(deleteAlbum(id))
        setAlbums(albums.filter(album => album.id !== id))
    }

    const onEdit = (id) => {
        navigate(generatePath('/album/:id', { id }))

    }


    
    const renderedAlbums = albums.map((album) => {
        return <AlbumDetails onEdit={onEdit} onDelete={onDelete} key={album.id} id={album.id} name={album.name} musician={album.musician} year={album.year} url={album.urlImage} songs={album.songs} />
    })

    return(
        <div className='ui relaxed divided list'>{renderedAlbums}</div>
    )
}

export default List;