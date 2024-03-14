import { useEffect, useState,useMemo } from "react";
import  Card  from "../card/Card";
import getUsers from "../../services/getUsers";
import "./userListStyles.css"


export default function UserInfoList() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    getUsers()
      .then((users) => setUsersList(users.data.map(
        user =>  ({ ...user, favorite: false})
        )))
      .catch((err) => console.log(err));
  }, []);


  const favorites  = useMemo(() =>
  usersList.filter((user) => user.favorite ),
  [usersList])

  console.log({favorites, usersList});

  // Añadir funcion de Añadir a favoritos

  return (
    <>
      {usersList.length > 0 ? (
          <div className="user-info-list-container">
          {usersList.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
