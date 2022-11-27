import { axiosInstance } from "../apis/AxiosInstance";

export const getAllAlbums = async () => {
    try {
        const response = await axiosInstance.get('/album')
        return response;
    } catch (error) {
        throw error;
    }
}


export const getAlbum = async (id) => {
    try {
        const response = await axiosInstance.get(`/album/${id}`)
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const createNewAlbum = async (name, musician, year, urlImage) => {
    try {
        const response = await axiosInstance.post('/album', {
            name,
            musician,
            year,
            urlImage
        })
        return response;
    } catch (error) {
        throw error;
    }
}

export const editAlbum = async (id, { name, musician, year, urlImage }) => {
    try {
        const response = await axiosInstance.patch(`/album/${id}`, {
            name,
            musician,
            year,
            urlImage
    })

    return response;
        
    } catch (error) {
        throw error;
    }
}

export const deleteAlbum = async (id) => {
    try {
        const response = await axiosInstance.delete(`/album/${id}`)
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const findSongs = async (id) => {
    try {
        const response = await axiosInstance(`/album/${id}/songs`)
        return response;
    } catch (error) {
        throw error;
    }
}