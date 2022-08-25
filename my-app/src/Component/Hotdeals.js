import image from '../Images/pngfind.com-cake-png-588273.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Shoppingcart from './VanillaCake';
import Addtocartbtn from '../Button/Addtocartbtn';
import { useEffect, useState } from 'react';
import { getScopedCssBaselineUtilityClass } from '@mui/material';
import {db} from '../firebase'
import {collection, getDocs} from "firebase/firestore"

const Hotdeals = () => {
    const [products, setProducts] = useState([]);
    const colRef = collection(db, 'Products')
    // console.log(colRef)
    
    useEffect(()=>{

        const getproducts = async ()=>{
            const data = await getDocs(colRef);
            setProducts(data.docs.map((doc)=> ({...doc.data(), id:doc.id})))
            console.log(data)
        };
        getproducts();
 
    },[])

    return ( 
        <div className="hotdeals md:flex space-y-3 md:space-y-0  items-center justify-center gap-3 text-center ">
            {products.map((product)=>{
                return (
       
            <div className="">
                <div className="bg-gray-50 p-3 w-[100%]">
                    <img src={image} alt="" className="h-[30vh] m-auto object-fit" />
                    <h1 className="font-bold my-3">{product.name}</h1>
                    <div className="flex justify-between">
                        <div className="price">
                            <p className="text-xl">${product.price}</p>
                        </div>
                        <div className="flex gap-5">
                            {/* <RemoveIcon className='bg-red-500 rounded text-white'/>
                            1
                            <AddIcon className='bg-red-500 rounded text-white'/> */}
                            <Addtocartbtn/>
                        </div>
                    </div>
                </div>
                </div>  
                )
            })}
        </div>
     );
}
 
export default Hotdeals;