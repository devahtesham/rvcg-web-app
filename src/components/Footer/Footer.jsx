import LOGO_WHITE from "../../assets/img/logo-white.png"
import LOGO_COLOURFUL from "../../assets/img/logo-colourful.png"
import PAYMENT_METHOD from "../../assets/img/payment-icon.png"
import { FOOTER_IMPORTANT_LINKS, FOOTER_QUICK_LINKS } from "../../utils/utils"
import { Link } from "react-router-dom"
import { FaLocationDot, FaYoutube } from "react-icons/fa6"
import { IoLogoLinkedin, IoMail } from "react-icons/io5"
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"
import { AiFillTikTok } from "react-icons/ai"
import { IoIosCall } from "react-icons/io"

export default function Footer() {
  return (
    <footer className="mt-4">
      <div className="container pt-5">
        <div className="row pt-5">
          {/* logo */}
          <div className="col-3">
            <div>
              <div className="logo-white">
                <img src={LOGO_WHITE} alt="logo-white" />
              </div>
            </div>
          </div>

          {/* important links */}
          <div className="col-3">
            <div className="important-links text-white">
              <h5>Important Links</h5>
              <ul className="">
                {
                  FOOTER_IMPORTANT_LINKS.map((link) => (
                    <li className="mb-1">
                      <Link to={link.url}>
                        {link.name}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="important-links text-white">
              <h5>Quick Links</h5>
              <ul className="">
                {
                  FOOTER_QUICK_LINKS.map((link) => (
                    <li className="mb-1">
                      <Link to={link.url}>
                        {link.name}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="important-links text-white">
              <h5>Contact Us</h5>
              <ul className="">
                <li className="d-flex align-items-center gap-2 mb-1"><FaLocationDot /> Arizona, USA</li>
                <li className="d-flex align-items-center gap-2 mb-1"> <IoMail /> info@rvcgfirst.com</li>
                <li className="d-flex align-items-center gap-2 mb-4"> <IoIosCall  /> +1 (602) 403 4869</li>
                <li className="d-flex align-items-center gap-2">
                  <img src={PAYMENT_METHOD} alt="" className="payment-method-icon" />
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div className="row mt-5 mb-3">
          <div className="social-icon-links text-white d-flex justify-content-center align-items-center gap-4 mt-5">
            <span className="d-flex align-items-center gap-3"><FaFacebookSquare size={26} />Facebook</span>
            <span className="d-flex align-items-center gap-3"><AiFillTikTok size={26} />TikTok</span>
            <span className="d-flex align-items-center gap-3"><IoLogoLinkedin size={26} />Linkedin</span>
            <span className="d-flex align-items-center gap-3"><FaInstagramSquare size={26}/>Instagram</span>
            <span className="d-flex align-items-center gap-3"><FaYoutube size={26} />Youtube</span>
          </div>
        </div>
        <div className="row">
          <div className="logo-colourful d-flex justify-content-center mt-5 mb-3">
            <img src={LOGO_COLOURFUL} alt=""  />
          </div>
          <p className="text-white text-center my-3">&copy; RVCG First - All rights reserved. Designed by Digtize</p>
        </div>
      </div>
    </footer>
  )
}