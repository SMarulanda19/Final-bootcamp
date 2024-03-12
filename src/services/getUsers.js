import axios from "axios";

const getUsers = async () => {
  const response = await axios.get("https://reqres.in/api/users?page=1");
  return response.data;
};
export default getUsers;
