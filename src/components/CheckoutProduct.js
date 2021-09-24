import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../slices/cartSlice";

function CheckoutProduct({ id, title, price, rating, description, category, image, hasPrime }) {
    
    const dispatch = useDispatch();

    const addItemToCart = () => {
        const product = {id, title, price, rating, description, category, image, hasPrime};
        
        // Push the product to the Redux store
        dispatch(addToCart(product));
    }

    const removeItemFromCart = () => {
        // Remove the product from the Redux store
        dispatch(removeFromCart({ id }));
    }
    
    return (
        <div className='grid grid-cols-5'>
            <Image 
                src={image}
                height={200}
                width={200}
                objectFit="contain"
            />

        {/* Middle */}
            <div className='col-span-3 mx-5'>
                <p className='font-bold'>{title}</p>
                <div className='flex'>
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>

                <p className='text-sm my-2 line-clamp-3'>{description}</p>

                <Currency quantity={price} currency='USD' />

                {hasPrime && (
                    <div className='flex items-center space-x-2'>
                        <img 
                           loading="lazy"
                           className="w-12" 
                           src="https://links.papareact.com/fdw" 
                           alt="" 
                        />
                        <p className='text-sm text-gray-500'>FREE Next-day Delivery</p>
                    </div>
                )}
            </div>
        {/*Add / Remove Buttons*/}
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
               <button className="button" onClick={addItemToCart}>Add Another</button>
               <button className="button" onClick={removeItemFromCart}>Remove from Cart</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
