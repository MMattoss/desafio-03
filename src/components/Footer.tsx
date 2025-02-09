import facebookIcon from "../assets/facebook-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import { NavLink } from "react-router";


const Footer = () => {
  return <footer className="w-screen border-t px-24 pt-12 pb-9 flex flex-col justify-center items-center">
    <div className="border-b mb-9 pb-12 flex gap-12">
      {/* Brand and address */}
      <div className="flex flex-col gap-12 mr-[138px]">
        <h1 className="text-black text-2xl font-bold">Furniro.</h1>
        <p className="text-gray-400 text-base font-normal">400 University Drive Suite 200 Coral <br /> Gables, <br />
        FL 33134 USA</p>

        <div className="flex gap-4">
          <div className="w-9 h-9 rounded-full bg-white drop-shadow-lg flex items-center justify-center">
            <img src={facebookIcon} alt="Facebook" />
          </div>
          <div className="w-9 h-9 rounded-full bg-white drop-shadow-lg flex items-center justify-center">
            <img src={instagramIcon} alt="Instagram" />
          </div>
          <div className="w-9 h-9 rounded-full bg-white drop-shadow-lg flex items-center justify-center">
            <img src={twitterIcon} alt="Twitter" />
          </div>
          <div className="w-9 h-9 rounded-full bg-white drop-shadow-lg flex items-center justify-center">
            <img src={linkedinIcon} alt="Linkedin" />
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="mr-36">
        <h3 className="text-gray-400 text-base font-normal mb-14">Links</h3>
        <nav>
          <ul className="flex flex-col gap-11">
            <li className="text-black text-base font-medium">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="text-black text-base font-medium">
              <NavLink to={"/shop"}>Shop</NavLink>
            </li>
            <li className="text-black text-base font-medium">
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li className="text-black text-base font-medium">
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Help */}
      <div className="mr-[72px]">
        <h3 className="text-gray-400 text-base font-normal mb-14">Help</h3>
        <nav>
          <ul className="flex flex-col gap-11">
            <li className="text-black text-base font-medium">
              <NavLink to={"#"}>Payment Options</NavLink>
            </li>
            <li className="text-black text-base font-medium">
              <NavLink to={"#"}>Returns</NavLink>
            </li>
            <li className="text-black text-base font-medium">
              <NavLink to={"#"}>Privacy Policies</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Newsletter */}
      <div>
        <h3 className="text-gray-400 text-base font-normal mb-14">Newsletter</h3>
        <form action="#" className="flex gap-3">
          <input type="text" placeholder="Enter Your Email Address" className="w-full pb-1 text-sm font-normal border-b border-black" />
          <button type="submit" className="border-b border-black text-sm text-black font-medium">SUBSCRIBE</button>
        </form>
      </div>
    </div>
    <p className="text-black text-base font-normal self-start">2023 furino. All rights reverved</p>
  </footer>
}

export default Footer;