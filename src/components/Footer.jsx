
const Footer = () => {
  return (
    <footer className='bg-primary mt-20 text-slate-300 '>
            <div className='max-w-[90%] lg:max-w-[70%] mx-auto flex items-center justify-between font-jost py-10 gap-10'>
                  <p>Copyright © 2023 - MasterIT Store</p>
                  <ul className="flex items-center gap-4">
                        <li>
                                <a href="">Home</a>
                        </li>
                        <li>
                                <a href="">Contact us</a>
                        </li>
                        <li>
                                <a href="">ABout us</a>
                        </li>
                        <li>
                                <a href="">Term and conditional</a>
                        </li>
                  </ul>
            </div>
    </footer>
  )
}

export default Footer