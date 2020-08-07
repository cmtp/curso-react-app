import React, { useState, useEffect } from 'react';

import UserService from '../../services/UserService';
import UserItem from './UserItem';

const Users = () => {
  const [userList, setUserList] = useState([]);
  const [loading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await UserService.getUsers();
      setUserList(response.data);
      // setLoading(false);
    };
    fetchData();
  }, [loading]);

  return (
    <div>
      <div className="container row">
        {userList.map((item) => (
          <UserItem key={item.id} user={item} />
        ))}
      </div>
    </div>
  );
};

export default Users;
