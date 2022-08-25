import { Link } from "react-router-dom";
import Nav from "../Log/Nav";

const Header = () => {
    return ( 
        <header className="bg-orange-800 rounded-b-xl shadow-md  text-gray-100 py-4">
            <div className="m-auto w-[83%]">
                <div className="flex justify-between items-center my-2">
                    <div className="text">
                    <h1 className="heade font-bold text-3xl ">Forsyth Store</h1>
                    <p className="">Welcome user</p>
                    </div>
                    <div className="links flex gap-3 cursor-pointer">
                        {/* <Nav/> */}
                        <Link to = "/login"> Login</Link>
                        <Link to = "/register"> Register</Link>
                    </div>
            </div>
            </div>
        </header>
     );
}
 
export default Header;