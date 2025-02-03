import logo from '../assets/logo.png'
import loginIcon from '../assets/login-icon.svg'
import cartIcon from '../assets/cart-icon.svg'

const Navbar = () => {
  return (
    <header className='flex justify-between items-center py-[30px] pl-14 pr-24'>
      <div className='flex items-baseline'>
        <img src={logo} alt="Logo" className="w-[50px] h-8"/>
        <h1 className='font-montserrat font-bold text-[34px]'>Furniro</h1>
      </div>

      <nav>
        <ul className='flex gap-[75px]'>
          <li><a href="#" className='text-base font-medium font-poppins'>Home</a></li>
          <li><a href="#" className='text-base font-medium font-poppins'>Shop</a></li>
          <li><a href="#" className='text-base font-medium font-poppins'>About</a></li>
          <li><a href="#" className='text-base font-medium font-poppins'>Contact</a></li>
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