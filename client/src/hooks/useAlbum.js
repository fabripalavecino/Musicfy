import { useEffect, useState } from "react"
import {  getAlbum } from "../services/albumService"

// export const useGetAlbums = () => {
//     const [albums, setAlbums] = useState()

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await getAllAlbums();
//                 setAlbums(data);
//             } catch (error) {
//                 throw error;
//             }
//         }
//         fetchData();
//     })

//     return { albums }
// }

export const useGetOneAlbum = (id) => {
    const [album, setAlbum] = useState();


    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getAlbum(id);
            setAlbum(data)
        }
        fetchData();
    },[id])

    return { album }
}

// export const useCreateAlbum = (name, musician, year, urlImage) => {
//     useEffect(() => {
//         const fetchData = async () => {
//             const { data } = await createAlbum(name, musician, year, urlImage);
//         }
//         fetchData()
//     })
// }