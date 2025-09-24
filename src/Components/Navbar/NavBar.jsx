import "./NavBar.css";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo على الشمال */}
      <div className="logo">FaJr-Alaqsa</div>

      {/* Social Icons على اليمين */}
      <div className="social">
        <a href="https://www.facebook.com/share/19xvt6YHKF/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
          <FaFacebook className="icon facebook" />
        </a>
        <a href="https://wa.me/+201091944770" target="_blank" rel="noreferrer">
          <FaWhatsapp className="icon whatsapp" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram className="icon instagram" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
