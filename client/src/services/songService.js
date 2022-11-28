import { axiosInstance } from "../apis/AxiosInstance";

export const createSong = async (name, duration, album_id)  => {
    try {
        const response = await axiosInstance.post('/song',{
            name,
            duration,
            album_id
        })
        return response;
    } catch (error) {
        throw error;
    }
}

export const deleteSong = async(id) => {
    try {
        const response = await axiosInstance.delete(`/song/${id}`);
        return response;
    } catch (error) {
        throw error;
    }
}

export const updateSong = async(id, { name, duration }) => {
    try {
        const response = await axiosInstance.patch(`/song/${id}`, { name , duration })
        return response;
    } catch (error) {
        throw error;
    }
}