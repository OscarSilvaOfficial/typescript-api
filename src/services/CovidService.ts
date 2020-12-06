import { api } from './Axios'

export async function covidNews() {
    return await api.get('/summary')
        .then((res) => {
            return res.data
        })
        .catch((error) => {
            return error
        })
}