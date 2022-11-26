import { createContext, useState } from "react"

export const AppContext = createContext()
export const AppProvider = ({ children }) => {
    
    const [albumId, setAlbumId] = useState()
    const [songs, setSongs] = useState([]);

    return(
        <AppContext.Provider value={{
            albumId,
            setAlbumId,
            songs,
            setSongs
        }}>{children}</AppContext.Provider>
    )
}