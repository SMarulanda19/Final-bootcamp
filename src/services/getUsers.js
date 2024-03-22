import axios from "axios";


const api = axios.create({
  baseURL: 'https://reqres.in/api',
})


export const getUsers = (page) => {
  return api.get(`users?page=${page}`)
  
}


export const deleteUser = (id) => {
  return api.delete('users', id)
}



// export default getUsers;


