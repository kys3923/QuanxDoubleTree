import { FaTwitterSquare, FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa'


const Footer = (props) => {
  return (
    <footer className="mt-48 border-t border-gray-400 px-8 py-6">
      <div className='flex flex-col md:flex-row'>
      {/* Left Section */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <p>How can we help?</p>
          <div>
            <p className="font-bold text-[#CF4802]">+1-855-610-TREE</p>
            <p className="text-sm">Call us, It's toll-free</p>
          </div>
          <ul className="flex flex-row gap-4 text-[#CF4802]">
            <li><FaTwitterSquare className='w-7 h-7' /></li>
            <li><FaFacebookSquare className='w-7 h-7' /></li>
            <li><FaInstagramSquare className='w-7 h-7' /></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className='flex flex-col sm:flex-row sm:gap-12 underline text-[#CF4802] text-xs py-8 md:py-0'>
          <ul className='flex flex-col gap-2'>
            <li className='hover:cursor-pointer'>Travel Inspiration</li>
            <li className='hover:cursor-pointer'>Pet-Friendly Stays</li>
            <li className='hover:cursor-pointer'>Hilton Gift Card</li>
            <li className='hover:cursor-pointer'>Customer Support</li>
            <li className='hover:cursor-pointer'>Web Accessibility</li>
            <li className='hover:cursor-pointer'>Media</li>
            <li className='hover:cursor-pointer'>Development</li>
            <li className='hover:cursor-pointer'>Careers</li>
            <li className='hover:cursor-pointer'>Site Map</li>
            <li className='hover:cursor-pointer'>Global Privacy Statement</li>
          </ul>
          <ul className='flex flex-col gap-2'>
            <li className='hover:cursor-pointer'>Hilton Hotline</li>
            <li className='hover:cursor-pointer'>Corporate Responsibility</li>
            <li className='hover:cursor-pointer'>Hilton Honors Discount Terms & Conditions</li>
            <li className='hover:cursor-pointer'>Modern Slavery and Human Trafficking</li>
            <li className='hover:cursor-pointer'>Do Not Sell My Personal Information</li>
            <li className='hover:cursor-pointer'>Personal Data Requests</li>
            <li className='hover:cursor-pointer'>Site Usage Agreement</li>
            <li className='hover:cursor-pointer'>Cookies Statement</li>
          </ul>
        </div>

      </div>

      <p className='text-gray-400 text-xs'>©2023 Hilton</p>
    </footer>
  );
}
export default Footer;