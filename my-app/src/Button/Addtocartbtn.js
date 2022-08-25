import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
  } from "@material-tailwind/react";


const Addtocartbtn = () => {
    const Addtocart = "Added to cart"
            

    return ( 
        <div className="addtocart">
            <Popover>
            <PopoverHandler>
            <button className=' rounded px-2 py-2 bg-orange-800 text-white  hover:scale-[103%] duration-500 text-sm'>Add to cart</button>
            </PopoverHandler>
            <PopoverContent>
                {Addtocart}
            </PopoverContent>
            </Popover>
                 
                </div>
     );
}
 
export default Addtocartbtn;