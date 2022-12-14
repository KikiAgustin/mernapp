import axios from 'axios'

export async function getFeaturedGame(){
    try {
        const ROOT_API = process.env.NEXT_PUBLIC_API;
        const API_VERSION = 'api/v1';
        const URL = 'players/landingpage';

        const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`)
        const axiosResponse = response.data;
        
        return axiosResponse.data;
    } catch (err) {
        console.log(err)
    }

}

export async function getDetailVoucher(){
    return null;
}