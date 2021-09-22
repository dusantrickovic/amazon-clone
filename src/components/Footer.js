import Image from 'next/image';

function Footer() {
    return (
        <footer className=' bg-amazon_blue mt-12 text-white'>
            <div className='flex justify-center'>
        <div className=' grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 p-10 mt-10 bg-amazon_blue text-white'>
            <div className='mt-4 xl:mt-0 xl:ml-12'>
                <h3 className='font-bold '>Get to Know Us</h3>
                <p className='link footer-link pt-2'>Careers</p>
                <p className='link footer-link'>Blog</p>
                <p className='link footer-link'>About Amazon</p>
                <p className='link footer-link'>Investor Relations</p>
                <p className='link footer-link'>Amazon Devices</p>
            </div>

            <div className='mt-4 xl:mt-0 xl:ml-12'>
                <h3 className='font-bold '>Make Money with Us</h3>
                <p className='link footer-link pt-2'>Sell products on Amazon</p>
                <p className='link footer-link'>Sell apps on Amazon</p>
                <p className='link footer-link'>Become an Affiliate</p>
                <p className='link footer-link'>Advertise Your Products</p>
                <p className='link footer-link'>Self-Publish with Us</p>
                <p className='link footer-link'>Host an Amazon Hub</p>
                <p className='link footer-link'>&gt; See More Make Money with Us</p>
            </div>

            <div className='mt-4 xl:mt-0 xl:ml-12'>
                <h3 className='font-bold '>Amazon Payment Products</h3>
                <p className='link footer-link pt-2'>Amazon Business Card</p>
                <p className='link footer-link'>Shop with Points</p>
                <p className='link footer-link'>Reload Your Balance</p>
                <p className='link footer-link'>Amazon Currency Converter</p>
            </div>

            <div className='mt-4 xl:mt-0 xl:ml-16'>
                <h3 className='font-bold '>Let Us Help You</h3>
                <p className='link footer-link pt-2'>Amazon and COVID-19</p>
                <p className='link footer-link'>Your Account</p>
                <p className='link footer-link'>Your Orders</p>
                <p className='link footer-link'>Shipping Rates & Policies</p>
                <p className='link footer-link'>Returns & Replacements</p>
                <p className='link footer-link'>Manage Your Content and Devices</p>
                <p className='link footer-link'>Amazon Assistant</p>
                <p className='link footer-link'>Help</p>
            </div>
        </div>
        </div>

{/*
        <hr/>
        <div className='hidden md:mt-3 md:flex-row md:space-x-10 md:text-xs md:flex md:justify-center md:items-center'>
            <div className='flex'>
                <Image 
                    src='https://links.papareact.com/f90'
                    width={100}
                    height={30}
                    objectFit='contain'
                    className='cursor-pointer'
                />
            </div>

            <div className='border border-white rounded-sm p-1 pl-5 pr-10'>
                <button className='bg-transparent'>English</button>
            </div>

            <div className=' border border-white rounded-sm p-1 pl-2 pr-3'>
                <button className='bg-transparent'>$ USD - U.S. Dollar</button>
            </div>

            <div className=' border border-white rounded-sm p-1 pl-5 pr-10'>
                <button className='bg-transparent'>United States</button>
            </div>
</div> */}
    </footer>
    )
}

export default Footer
