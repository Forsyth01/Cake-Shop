import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import Login from '../Log/Login';
import {
    Tooltip
    
  } from "@material-tailwind/react";
  import {AiOutlineHome} from 'react-icons/ai'

const Navbar = () => {
    return (  
        <nav className="hidden md:block navbar sticky top-0 ">
            {/* <div className="flex flex-col top-0 absolute sticky items-center bg-white md:h-[100vh] md:py-5 rounded-t-xl justify"> */}
            <div className="bg-white rounded-xl shadow-md py-3 absolute sticky top-0 ">
                <div className="px-5 md:text-center">
                    <h1 className="text-amber-800 text-sm font-bold italic">.....</h1>
                    <Tooltip content="Profile" placement="right" className='bg-orange-800'>
                   <Link to = "#"><AccountCircleIcon className='my-2 cursor-pointer'/></Link> 
                     </Tooltip>
                    <div className="md:flex md:flex-col gap-5 md:my-10 justify-center">
                        <Tooltip content="Home" placement="right" className='bg-orange-800'>
                        <Link to = "#">  <HomeIcon className='text-sm'/></Link>
                        </Tooltip>
                    <Link to = "#"> <ShoppingCartIcon className='text-sm'/></Link>
                        <SettingsIcon className='text-sm'/>
                        {/* <NotificationsIcon className='text-sm'/> */}
                        {/* <SearchIcon className='text-sm'/> */}
                        {/* <MailOutlineIcon className='text-sm'/> */}
                        {/* <EmailIcon  className='text-sm'/> */}
                        {/* <ArrowForwardIcon  className='text-sm'/> */}
                        
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;