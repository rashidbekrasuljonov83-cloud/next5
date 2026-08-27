"use client";

import Navbar from "@/components/Navbar";
import UserCard from "@/components/UseCard";
import React, { useEffect, useState } from "react";

export default function about() {
  let [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    async function getUsers() {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw new Error("api muamo");
        }

        let data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="px-2  5 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {users &&
          users.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
      </div>
    </div>
  );
}
