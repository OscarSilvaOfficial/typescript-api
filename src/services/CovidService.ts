import { api } from './Axios'

function covidSummary() {
    return api.get('/summary')
        .then((res) => {
            return res.data
        })
        .catch((error) => {
            return error
        })
}

export default covidSummary 