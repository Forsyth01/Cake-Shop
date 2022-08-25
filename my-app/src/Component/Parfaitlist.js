import image from '../Images/pngfind.com-cake-png-588273.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Shoppingcart from './VanillaCake';
import { Button } from '@mui/material';
import Addtocartbtn from '../Button/Addtocartbtn';

const Parfaitlist = () => {
    return ( 
        <div className="parfait">
            <div className=" md:flex space-y-3 md:space-y-0  items-center justify-center gap-3 text-center " >
                <div className="bg-gray-50 p-3 w-[100%]">
                    <img src={image} alt="" className="h-[20vh] m-auto object-fit" />
                    <h1 className="font-bold my-3">Vanilla cake</h1>
                    <div className="flex justify-between items-center">
                        <div className="price">
                            <p className="text-xl">$50</p>
                        </div>
                        <div className="flex gap-5">
                          <Addtocartbtn/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Parfaitlist;