import { useSelector } from "react-redux";
import Image from "next/image";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/cartSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Footer from "../components/Footer";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";

function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const [session] = useSession();

    const compare = ( a, b ) => {
        if ( a.title < b.title ){
          return -1;
        }
        if ( a.title > b.title ){
          return 1;
        }
        return 0;
      }

    console.log(items);

    return (
        <div className='bg-gray-100'>
            <Header />

            <main className='lg:flex max-w-screen-xl mx-auto'>
                  {/* Left */}
                  <div className='flex-grow m-5 shadow-sm'>
                      <Image 
                          src="https://links.papareact.com/ikj"
                          width={1020}
                          height={250}
                          objectFit="contain"
                      />

                      <div className='flex flex-col p-5 space-y-10 bg-white'>
                          <h1 className='font-bold text-xl border-b pb-4'>
                              {items.length === 0 
                              ? `Your Amazon Cart is empty`
                              : `Amazon Shopping Cart`}
                          </h1>

                          {items.map((item, i) => (
                            <CheckoutProduct 
                               key={i}
                               id={item.id}
                               title={item.title}
                               rating={item.rating}
                               price={item.price}
                               description={item.description}
                               category={item.category}
                               image={item.image}
                               hasPrime={item.hasPrime}
                            />
                          )).sort( compare )} 
                      </div>
                  </div>

                  {/* Right */}
                  <div className='flex flex-col bg-white p-12 shadow-md'>
                      {items.length > 0 && (
                          <>
                            <h2 className='whitespace-nowrap'>
                                Subtotal ({items.length} items):{" "}
                                <span className='font-bold'>
                                    <Currency quantity={total} currency='USD' />
                                </span>
                            </h2>

                            <button disabled={!session} className={`button mt-2 ${session ? '' : 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                                {!session ? `Sign in to checkout` : `Proceed to checkout`}
                            </button>
                          </>
                      )}
                  </div>
            </main>

            <Footer />
        </div>
    )
}

export default Checkout
