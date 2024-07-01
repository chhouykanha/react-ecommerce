import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-primary mt-20 text-white '>
            <div className='max-w-[90%] lg:max-w-[70%] mx-auto font-jost grid grid-cols-12 py-10 gap-10'>
                <div className='col-span-12  lg:col-span-4'>
                        <h3 className='text-lg mb-3'>About Shop</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, enim?</p>
                </div>

                <div className='col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                        <div>
                                <h4 className='mb-4 font-semibold'>Company</h4>
                                <div className='flex flex-col gap-3 text-gray-400'>
                                <a href=''> About Us</a>
                                <a href=''> Careers</a>
                                <a href=''> Store Locators</a>
                                <a href=''> Contact Us</a>
                                </div>
                        </div>
                        <div>
                                <h4 className='mb-4 font-semibold'>Customer Care</h4>
                                <div className='flex flex-col gap-3 text-gray-400'>
                                    <a href=''>Size Guide</a>
                                    <a href=''>Help & FAQs</a>
                                    <a href=''>Return My Order</a>
                                    <a href=''>Refer A Friend</a>
                                </div>
                        </div>
                        <div>
                                <h4 className='mb-4 font-semibold'>Quick Links</h4>
                                <div className='flex flex-col gap-3 text-gray-400'>
                                    <a href=''>Size Guide</a>
                                    <a href=''>Help & FAQs</a>
                                    <a href=''>Return My Order</a>
                                    <a href=''>Refer A Friend</a>
                                </div>
                        </div>
                        <div>
                                <h4 className='mb-4 font-semibold'>Follow Us</h4>
                                <div className='flex flex-col gap-3 text-gray-400'>
                                    <a href=''>Instagram</a>
                                    <a href=''>Facebook</a>
                                    <a href=''>Pinterest</a>
                                    <a href=''>Tiktok</a>
                                </div>
                        </div>
                </div>
            </div>
    </footer>
  )
}

export default Footer