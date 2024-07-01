import Bar from './Bar'
import Slide02 from '../assets/images/slide_02.jpg'
import { FaRegHeart, FaRegUser } from 'react-icons/fa6'
import { FiShoppingBag } from 'react-icons/fi'
import { NavLink, useLocation } from 'react-router-dom'
import { IoMenu } from 'react-icons/io5'
import { useState } from 'react'
import MobileNavbar from './MobileNavbar'
const Navbar = () => {
 const {pathname} = useLocation()
 const [isShowMobileNavbar, setIsShowMobileNavbar] = useState(false);
  const styleImage = {
      backgroundImage : `url(${Slide02})`
  }
  const handleCloseMobileNavbar = (t) => {
        setIsShowMobileNavbar(t)
  }

  return (
    <>
        <Bar />

        <MobileNavbar isOpen={isShowMobileNavbar} onCloseNavbar={handleCloseMobileNavbar}/>

        { pathname === '/' && (
            <header 
                style={styleImage} 
                className="min-h-screen font-jost bg-no-repeat bg-center bg-cover  lg:bg-contain  bg-secondary"
            >
                <div className='max-w-[90%] lg:max-w-[70%] mx-auto relative flex items-center min-h-screen'>
                        <div className='absolute top-0 left-0 w-full flex justify-between items-center py-4'>
                            <div className='flex justify-normal space-x-5 items-center'>
                                <button onClick={() => {setIsShowMobileNavbar(true)}} type='button' className='text-2xl block lg:hidden'>
                                     <IoMenu  />
                                </button>
                                <h3 className='font-semibold text-xl'>KH</h3>
                                <nav className='hidden lg:flex gap-5 items-center'>
                                    <NavLink to='/' className='text-base hover:underline decoration-yellow-600 aria-[current=page]:underline'>Home</NavLink>
                                    <NavLink to="/products" className='text-base hover:underline decoration-yellow-600 aria-[current=page]:underline' >Products</NavLink>
                                    <NavLink to="/contact" className='text-base hover:underline decoration-yellow-600 aria-[current=page]:underline'>Contact</NavLink>
                                    <NavLink to="/about" className='text-base hover:underline decoration-yellow-600 aria-[current=page]:underline'>About</NavLink>
                                </nav>   
                            </div>

                            <div className='flex space-x-4 items-center text-lg'>
                                <span  className='text-primary hover:text-yellow-600 cursor-pointer'>
                                        <FaRegHeart />
                                </span>
                                <span className='text-primary hover:text-yellow-600 cursor-pointer'>
                                        <FaRegUser />
                                </span>
                                <span className='text-primary relative hover:text-yellow-600 cursor-pointer'>
                                       <FiShoppingBag  />
                                       <small className='bg-primary -top-3 -right-2 w-5 h-5 text-white grid place-items-center rounded-full absolute text-xs'>0</small> 
                                </span>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3'>
                             <h3 className='text-xl font-semibold'>New Collection</h3>
                             <h1 className='text-6xl font-bold'>Luxury Without <br/> Labels</h1>
                             <p className='text-base'>Explore new-in product and best sellers</p>
                             <button className='bg-primary font-semibold text-sm text-white px-10 py-3 rounded-lg w-fit'>View Collection</button>
                        </div>
                </div>
            </header>
        )}

        {
            pathname !== '/' && (
               <header className='bg-white font-jost shadow-sm w-full'>
                <div className='max-w-[90%] lg:max-w-[70%] mx-auto '>
                        <div className='flex justify-between items-center py-4'>
                            <div className='flex space-x-5 items-center'>
                            <button onClick={() => {setIsShowMobileNavbar(true)}} type='button' className='text-2xl block lg:hidden'>
                                     <IoMenu  />
                                </button>

                                <h3 className='font-semibold text-xl'>KH</h3>
                                <nav className='hidden lg:flex gap-5 items-center ml-10'>
                                    <NavLink to="/" className='text-base hover:underline decoration-yellow-600 aria-[current=page]:underline'>Home</NavLink>
                                    <NavLink to="/products" className='text-base hover:underline decoration-yellow-600 aria-[current=page]:underline' href="">Products</NavLink>
                                    <NavLink to="/contact" className='text-base hover:underline decoration-yellow-600 aria-[current=page]:underline' href="">Contact</NavLink>
                                    <NavLink to="/about" className='text-base hover:underline decoration-yellow-600 aria-[current=page]:underline' href="">About</NavLink>
                                </nav>   
                            </div>

                            <div className='flex space-x-4 items-center text-lg'>
                                <span  className='text-primary hover:text-yellow-600 cursor-pointer'>
                                        <FaRegHeart />
                                </span>
                                <span className='text-primary hover:text-yellow-600 cursor-pointer'>
                                        <FaRegUser />
                                </span>
                                <span className='text-primary relative hover:text-yellow-600 cursor-pointer'>
                                        <FiShoppingBag  />
                                       <small className='bg-primary -top-3 -right-2 w-5 h-5 text-white grid place-items-center rounded-full absolute text-xs'>0</small> 

                                </span>
                            </div>
                        </div>
                </div>
               </header>
            )
        }
    </>
  )
}

export default Navbar