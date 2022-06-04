import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { listUsers } from "../api/userApi";
import LazyImage from "../components/common/lazyLoadImage";

interface IUsers {
  first_name: string;
  email: string;
}

const Users = () => {
  const dispatch = useDispatch();

  const [users, setUsers] = useState<IUsers[]>([]);

  useEffect(() => {
    dispatch(listUsers()).then((resp: any) => {
      setUsers(resp.data);
    });
  }, []);

  return (
    <div className="container">
      <h2>Users</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Image</th>
            <th>First Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length ?
            users.map((user: IUsers) => (
              <tr key={user.email}>
                <td>
                    <LazyImage src="https://images.unsplash.com/photo-1583512603806-077998240c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format" height="100px"/>
                </td>
                <td>{user.first_name}</td>
                <td>{user.email}</td>
              </tr>
            )) : null}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
