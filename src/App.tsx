import { AddUser } from "./components/AddUser";
import { UserList } from "./components/UserList";
import './App.css'
import { useState } from "react";
import { IUser } from "./types";
import { UserContext } from "./context";

export default function App() {

  const [users, setUsers] = useState<IUser[]>([
    
    { id: 101, name: "Levon", age: 22, salary: 20000 },
    { id: 102, name: "Narek", age: 23, salary: 30000 },
    { id: 103, name: "Aram", age: 24, salary: 40000 },
    { id: 104, name: "Hovo", age: 25, salary: 50000 }
  ])

  const removeUser = (id: number): void => {
    setUsers(users.filter(user => user.id != id))
  }


  const handleAddUser = (user: IUser): void => {
    setUsers([...users, user])
  }

  return <>

    <UserContext.Provider value={{ users, removeUser, handleAddUser }}>
      <AddUser />

      <UserList />

    </UserContext.Provider>

  </>
}