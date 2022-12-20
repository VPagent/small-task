import  axios  from "axios";

const BASE_URL = 'https://api.unsplash.com/photos/?client_id=9vtiAbknxCQVhhf6F_YHyroGQBi5TGDSZhUdTaTxgfQ'

export const fetchItems = async () => {
const response = await axios.get(BASE_URL)
    return response.data
}