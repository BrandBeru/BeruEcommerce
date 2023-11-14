import { useContext, useEffect, useState } from "react";
import { Layout } from "../../Components/Layout"
import { Context } from "../../Context";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const { logIn, setUser,setToken,getUserData,isLoggedIn } = useContext(Context)
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    let user = {}
    useEffect(() => {
        if(isLoggedIn()){
            navigate('/');
        }
    },[])
    const handleLogIn = async (event) => {
        event.preventDefault()
        logIn(user).then(data => {
            if(!data.access_token) {
                setError(true);
                setTimeout(() => {
                    setError(false)
                },1500)
                return
            }
            setToken(data)
            getUserData(data).then(du => setUser(du))
            setTimeout(() => {
                navigate('/my-account', { replace: true })
            }, 1000)
        })
    }
    const errorItem = () => {
        return error && (
            <h1 className="text-red-600">Invalid Email or Password</h1>
        )
    }
    const inputStyle = "p-3 w-full rounded-lg bg-transparent border-2 border-green-600 focus:outline-none focus:placeholder:text-green-300 focus:text-green-300 focus:bg-green-900 duration-300 hover:border-green-900 placeholder:text-green-300";
    return (
        <Layout>
            <form className="flex flex-col w-2/4 rounded-lg items-center duration-300" onSubmit={event => handleLogIn(event)}>
                <h1 className="text-2xl font-medium">Log In</h1>
                <div className="flex flex-col p-10 gap-5 items-center w-full max-w-lg">
                    <input required={true} onChange={value => user.email = value.target.value} className={inputStyle} type="email" placeholder="Email:" />
                    <input required={true} onChange={value => user.password = value.target.value} className={inputStyle} type="password" placeholder="Password:" />
                    {errorItem()}
                    <button
                        className="p-3 bg-green-900 rounded-lg w-full hover:bg-green-600 duration-300"
                    >Sign in</button>
                </div>
                <div className="flex gap-1">
                    <span className="text-white">¿Aun no tienes cuenta?</span>
                    <span><Link to={"/signin"}>
                        Crea una aqui
                    </Link></span>
                </div>
            </form>
        </Layout>
    )
}

export { Login }