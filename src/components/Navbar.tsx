import loginIcon from '../assets/login-icon.svg'
import cartIcon from '../assets/cart-icon.svg'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <header className='flex justify-between items-center py-[30px] pl-14 pr-24'>
      <div className='flex items-center'>
        <img src="https://furniro-images.s3.us-east-2.amazonaws.com/homeImages/logo.png" alt="Logo" className="mr-1"/>
        <h1 className='font-montserrat font-bold text-[34px] leading-none'>Furniro</h1>
      </div>

      <nav>
        <ul className='flex gap-[75px]'>
          <li><NavLink to="/" className='text-base font-medium font-poppins'>Home</NavLink></li>
          <li><NavLink to="/shop" className='text-base font-medium font-poppins'>Shop</NavLink></li>
          <li><NavLink to="#" className='text-base font-medium font-poppins'>About</NavLink></li>
          <li><NavLink to="/contact" className='text-base font-medium font-poppins'>Contact</NavLink></li>
        </ul>
      </nav>

      <div className='flex items-center gap-8'>
        <img src={loginIcon} alt="Login" />
        <img src={cartIcon} alt="Cart" />
      </div>
    </header>
  )
}

export default Navbar;