import { Link } from "react-router-dom";
import Header from "../Header/Header";
const Cart = () => {
    return ( 
        <div className="cart">
          <Header/>
             <Link to = "/"> back</Link>
        </div>
     );
}
 
export default Cart;