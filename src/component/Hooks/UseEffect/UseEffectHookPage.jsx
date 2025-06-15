"use client";
import { useEffect, useState } from "react";

const UseEffectHookPage = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);

  if (!users)
    return (
      <p className="flex justify-center items-center h-screen text-2xl font-semibold">
        Loading...
      </p>
    );

  return (
    <div className="space-y-4 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user) => (
        <div key={user.id} className="p-4 border border-gray-300 space-y-2">
          <p className="font-bold text-2xl">{user.name}</p>
          <p className="text-lg">Email : {user.email}</p>
          <p className="text-lg">Phone :{user.phone}</p>
          <p className="text-lg">Website: {user.website}</p>
          <p className="font-bold">Address :</p>
          <p>
            {user.address.suite},{user.address.street},{user.address.city},
            {user.address.zipcode}
          </p>

          <div>
            <p className="font-bold">Company details :</p>
            <ul>
              <li>{user.company.name}</li>
              <li>{user.company.catchPhrase}</li>
              <li>{user.company.bs}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UseEffectHookPage;
