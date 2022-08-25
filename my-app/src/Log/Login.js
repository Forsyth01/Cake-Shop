import { Link,useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { Input } from "@material-tailwind/react";



const Login = () => {
    const navigate = useNavigate()
    const auth = getAuth();
    // const provider = new GoogleAuthProvider()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function handleSubmit(e){
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then((res)=>{
            
        })
        .then(()=>{
            alert('Logged In')
            navigate('/')
        })
        .catch((err) =>{
            
            setError(err.message)
        });
    }

    return ( 
        <div className="login">
            {/* <Header/> */}
              
        <div className="m-auto w-[50%] border border-[2px] border-gray-800 p-5 my-10">
        <Link to = "/"> back</Link>
       
        <form className="  " onSubmit={handleSubmit}>
            <div className="text-center">LOGIN</div>
            <div className="">
            {/* <label >Name</label>
            <input 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email" 
            className=" w-[100%] "/> */}
            <Input variant="standard" label="Name" className="my-5"/>

            {/* <div className="my-3">
            <label >Password</label>
            <input 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type="password" 
            className="w-[100%] "/>
            </div> */}
             <div className=" w-full items-end gap-4">
      
            <Input variant="standard" label="Email" />

            </div>
            </div>

            {/* <button className="bg-gray-300 py-3 hover:bg-gray-200 hover:scale-[102%] px-4 rounded-xl " type="submit">Login</button> */}
            
            <p>{error}</p>
        </form>
        </div>
    </div>
     );
}
 
export default Login;
