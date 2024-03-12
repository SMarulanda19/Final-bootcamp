import { useEffect, useState } from "react";
import  Card  from "../card/Card";
import getUsers from "../../services/getUsers";

export default function UserInfoList() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    getUsers()
      .then((users) => setUsersList(users.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {usersList.length > 0 ? (
        <div>
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
