
import logo from '../../public/images/logo.png.webp'
import { BsYoutube ,BsGithub , BsReddit,BsLinkedin,BsFacebook } from 'react-icons/Bs'
function Footer() {
  return (
    <div className='container mx-auto py-[40px]'>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-center">
          <div className="col">
          <img src={logo} className='mb-4'/>
          <span>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit sed do eiusmod <br /> tempor incididunt ut labore.</span>
          <div className="flex items-center gap-4 mt-3">
            <span className="social">
              <BsYoutube />
            </span>
            <span className="social">
              <BsGithub />
            </span>
            <span className="social">
              <BsLinkedin />
            </span>
            <span className="social">
              <BsFacebook />
            </span>
            <span className="social">
              <BsReddit />
            </span>
          </div>
          </div>
          <div className="col">
            <h3 className='text-[20px] font-semibold'>Quick Links</h3>
            <ul>
              <li>About</li>
              <li>Offers & Discounts</li>
              <li>Get Coupon</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col">
            <h3 className='text-[20px] font-semibold'>New Products</h3>
            <ul>
              <li>Woman Cloth</li>
              <li>Fashion Accessories</li>
              <li>Man Accessories</li>
              <li>Rubber made Toys</li>
            </ul>
          </div>
          <div className="col">
            <h3 className='text-[20px] font-semibold'>Support</h3>
            <ul>
              <li>Frequently Asked Questions</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Report a Payment Issue</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Footer