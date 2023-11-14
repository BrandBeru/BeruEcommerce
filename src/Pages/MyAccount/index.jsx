import { useContext, useState } from "react"
import { Layout } from "../../Components/Layout"
import { Context } from "../../Context"
import { useNavigate } from "react-router-dom"

function MyAccount() {
    const { user, setUser,setToken } = useContext(Context)
    const [name, setName] = useState(user.name)
    const [email, setemail] = useState(user.email)
    const [pass, setPass] = useState(user.password)
    const navigate = useNavigate()
    const handleSave = (event) => {
        event.preventDefault()
        setUser({
            name,
            email,
            password: pass
        })
    }
    const handleLogOut = (event) => {
        event.preventDefault()
        setUser([])
        setToken([])
        navigate('/', {replace:true})
    }
    const inputStyle = "p-3 w-full rounded-lg bg-transparent border-2 border-green-600 focus:outline-none focus:placeholder:text-green-300 focus:text-green-300 focus:bg-green-900 duration-300 hover:border-green-900 placeholder:text-green-300";
    return (
        <Layout>
            <form autoComplete="off" className="flex flex-col gap-5 p-4 items-center" onSubmit={event => handleSave(event)}>
                <h1 className="text-2xl font-medium">My Account</h1>
                <div className="flex flex-col gap-5  items-center">
                    <span className="font-semibold">{user.role}</span>
                    <img className="w-32 h-32 object-cover rounded-lg" src={user.avatar}></img>
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex items-center gap-3">
                            <input required onChange={event => setName(event.target.value)} className={inputStyle} value={name} type="text" placeholder="Name:" />
                            <input required onChange={event => setemail(event.target.value)} className={inputStyle} value={email} type="email" placeholder="Email:" />
                        </div>
                        <input autoComplete="off" required onChange={event => setPass(event.target.value)} className={inputStyle} value={pass} type="password" placeholder="Password:" />
                    </div>
                    <span className="border-b-2 border-green-900 w-full"></span>
                    <div className="flex gap-5 w-full justify-between">
                        <button type="submit" className="p-3 text-white bg-green-900 rounded-lg w-full hover:bg-green-600 duration-300">Save</button>
                        <button type="" onClick={handleLogOut} className="p-3 text-white bg-red-900 rounded-lg w-full hover:bg-red-600 duration-300">Log Out</button>
                    </div>
                </div>
            </form>
        </Layout>
    )
}

export { MyAccount }