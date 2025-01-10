import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";
function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 px-6 py-8 h-[400px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Help Centre */}
        <div>
          <h3 className="font-bold text-lg mb-4">Help Centre</h3>
          <ul className="space-y-2">
            <li>How to Shop</li>
            <li>Source a Product</li>
            <li>Size Guide</li>
            <li>Track Your Order</li>
            <li>Shop Worldwide</li>
            <li>Gift Cards</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Diversity</li>
            <li>Global Shipping</li>
            <li>Careers</li>
            <li>Become An Affiliate</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold text-lg mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Community</li>
            <li>Success Stories</li>
            <li>Accessibility</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Stakeholders</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Partners</li>
            <li>Press Centre</li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-8 text-center md:text-left">
        <h3 className="font-bold text-lg mb-2">
          Sign Up for Email Deals & Cashback
        </h3>
        <div className="flex justify-center md:justify-start items-center mt-2">
          <input
            type="email"
            placeholder="Enter email address"
            className="border border-gray-400 p-2 rounded-l w-full max-w-xs"
          />
          <button className="bg-green-900 text-white px-4 py-2 rounded-r">
            Submit
          </button>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center md:justify-end space-x-4 mt-[-30px]">
        <FaLinkedin
          size={24}
          className="text-gray-700 hover:text-green-900 cursor-pointer"
        />
        <FaXTwitter
          size={24}
          className="text-gray-700 hover:text-green-900 cursor-pointer"
        />
        <FaTiktok
          size={24}
          className="text-gray-700 hover:text-green-900 cursor-pointer"
        />
        <IoLogoFacebook
          size={24}
          className="text-gray-700 hover:text-green-900 cursor-pointer"
        />
        <CiInstagram
          size={24}
          className="text-gray-700 hover:text-green-900 cursor-pointer"
        />
      </div>
    </footer>
  );
}

export default Footer;
