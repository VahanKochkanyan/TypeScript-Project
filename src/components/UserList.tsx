import { useContext } from "react"
import { UserContext } from "../context"


export const UserList = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error("context not found")
    }
    const { users, removeUser } = context

    return <>
        <h3>User List</h3>
            
        {
            users.map(user =>
                <div key={user.id}>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                    <p>{user.age}</p>

                    <button onClick={() => removeUser(user.id)}>Delete</button>
                </div>
            )
        }
    </>

}