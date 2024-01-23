import axios from 'axios'

export const commonAPI = async (httpRequest, url, reqbody ) => {
    const reqConfig = {
        method : httpRequest,
        url,
        data : reqbody,
        headers : {
            "Content-type":"application/json"
        }
    }

    return await axios(reqConfig).then((result) => {
        return result
    })
    .catch((err) => {
        return err
    })
}