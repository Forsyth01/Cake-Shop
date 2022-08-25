import image from '../Images/pngfind.com-cake-png-588273.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Shoppingcart from './VanillaCake';
import Hotdeals from './Hotdeals';
import Cakelist from './Cakeslist';
import Parfait from './Parfait';
import Parfaitlist from './Parfaitlist';

const Home = () => {
    
    return ( 
        <div className="bg-white py-2 px-10 shadow-md w-[100%]">
            {/* <div className="mb-3">
                <h1 className="brow font-bold text-4xl">Hot Deals</h1>
                <p className="italics mb-3">lorem ipsum</p>
                </div> */}

                <div className="md:flex gap-3 space-y-5 md:space-y-0 my-5 justify-center">
                 {/* <Hotdeals/> */}
                 </div>

            <div className="cakes my-10">
                <Shoppingcart/>
    
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3  grid-cols-2  md:space-y-0">
                <Cakelist/>
                <Cakelist/>
                <Cakelist/>
                <Cakelist/>
    
                </div>
                <div className="flex justify-end m-auto w-[100%] my-2 ">
            <ArrowForwardIcon  className='text-sm'/>
            </div>
                </div>
                <div className="parfait my-10">
               <Parfait/>
            <div className="grid md:grid-cols-2 items-center lg:grid-cols-4 gap-3 sm:grid-cols-2  md:space-y-0">
                <Parfaitlist/>
                <Parfaitlist/>
                <Parfaitlist/>
                <Parfaitlist/>
        
                </div>
                <div className="flex justify-end m-auto w-[100%] my-2">
            <ArrowForwardIcon  className='text-sm'/>
            </div>
            </div>
                <div className="parfait my-10">
               <Parfait/>
            <div className="grid md:grid-cols-2 items-center lg:grid-cols-4 gap-3 sm:grid-cols-2  md:space-y-0">
                <Parfaitlist/>
                <Parfaitlist/>
                <Parfaitlist/>
                <Parfaitlist/>

                </div>
                <div className="flex justify-end m-auto w-[100%] my-2">
            <ArrowForwardIcon  className='text-sm'/>
            </div>
            </div>

        </div>
     );
}
 
export default Home;