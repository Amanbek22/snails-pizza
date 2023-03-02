import axios from "axios";


const http = axios.create({
    baseURL: 'https://605b21f027f0050017c063b9.mockapi.io/api/v3/'
})

const Api = {
    getPizzas: () => http.get('pizza'),
    createProduct: (data) => http.post('pizza', data),
    deletePizza: (id) => http.delete(`pizza/${id}`)
}

export default Api;