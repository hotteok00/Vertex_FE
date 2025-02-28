import axios from "axios";
import baseURL from "../URL";
const URL = baseURL+"/video/thumbnail"

export default async function getThumbnailAPI(thumbData) {
  const res = axios.get(URL, {
    params: thumbData,
    responseType: 'blob',
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
    .then((res) => {
      return res
    })
    .catch((e) => {
      console.error(e)
      return null
    })
  return res
}