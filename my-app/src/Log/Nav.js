import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
  import{Link} from "react-router-dom"
 
const Nav = ()=> {

  return (
    <Menu>
    <MenuHandler>
     <h1>Login</h1>
    </MenuHandler>
    <Link to = "/login"><MenuItem> Login</MenuItem></Link>
    <Link to = "/register"><MenuItem> Register</MenuItem></Link>
    <MenuList>
      {/* <MenuItem>Logout</MenuItem> */}
    </MenuList>
  </Menu>
  );
}
export default Nav;