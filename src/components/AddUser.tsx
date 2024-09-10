import { useContext, useState } from "react"
import { UserContext } from "../context"
import { NewUser } from "../types"

export const AddUser = () => {

    const [error, setError] = useState("")

    const context = useContext(UserContext)
    
    if (!context) {
        throw new Error("UserContext not found")
    }
    
    const { handleAddUser } = context

    const [user, setUser] = useState<NewUser>({
        name: "",
        age: 0,
        salary: 0
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser(prev => ({
            ...prev,
            [name]: name == "age" || name == "salary" ? Number(value) : value
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!user.name || user.age <= 0 || user.salary <= 0) {
            setError("All fields are required and must be positive")
            return
        }

        const newUser = {
            ...user,
            id: Date.now()
        }

        handleAddUser(newUser)

        setError("")
        setUser({ name: "", age: 0, salary: 0 })
    }

    return <>
        <h3>Users</h3>

        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={user.name}
                onChange={handleChange}
            />

            <input
                type="number"
                name="age"
                placeholder="Age"
                value={user.age ==0 ? "" : user.age}
                onChange={handleChange}
            />

            <input
                type="number"
                name="salary"
                placeholder="Salary"
                value={user.salary == 0 ? "" : user.salary}
                onChange={handleChange}
            />

            <button type="submit">Add</button>

        </form>
    </>
}

