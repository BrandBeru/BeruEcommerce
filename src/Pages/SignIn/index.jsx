import { useContext } from "react";
import { Layout } from "../../Components/Layout"
import { Context } from "../../Context";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
    const {signIn,setUser,user:globalUser,setToken,getUserData,logIn} = useContext(Context)
    const navigate = useNavigate()
    let user = {
        name: "",
        email: "",
        password: "",
        avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867"
    }
    const handleSignIn = async (event) => {
        event.preventDefault()
        if(signIn(user)){
            await getUserData(user).then(du => setUser(du))
            await logIn(user).then(data => {
                setToken(data)
            })
            setTimeout(() => {
                navigate('/my-account',{replace:true})
            },1000)
        }

    }
    const inputStyle = "p-3 w-full rounded-lg bg-transparent border-2 border-green-600 focus:outline-none focus:placeholder:text-green-300 focus:text-green-300 focus:bg-green-900 duration-300 hover:border-green-900 placeholder:text-green-300";
    return (
        <Layout>
            <form className="flex flex-col w-2/4 rounded-lg items-center" onSubmit={event => handleSignIn(event)}>
                <h1 className="text-2xl font-medium">Sign in</h1>
                <div className="flex flex-col p-10 gap-5 items-center">
                    <div className="flex gap-5">
                        <input required={true} onChange={value => user.name = value.target.value} className={inputStyle} placeholder="Name:" />
                        <input className={inputStyle} placeholder="Last Name:" />
                    </div>
                    <input required={true} onChange={value => user.email = value.target.value} className={inputStyle} type="email" placeholder="Email:" />
                    <input required={true} onChange={value => user.password = value.target.value} className={inputStyle} type="password" placeholder="Password:" />
                    <button 
                        className="p-3 bg-green-900 rounded-lg w-full hover:bg-green-600 duration-300"
                    >Sign in</button>
                </div>
                <div className="flex gap-1">
                    <span className="text-white">¿Ya tienes cuenta?</span>
                    <span><Link to={"/login"}>
                             Iniciar sesion aqui
                        </Link></span>
                </div>
            </form>
        </Layout>
    )
}

export { SignIn }