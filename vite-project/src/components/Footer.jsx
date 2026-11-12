import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='border-t p-4'>
        <div className='container mx-auto p-4 text-center flex flex-col gap-4 lg:flex-row lg:justify-between '>
            <p>© All Rights Reserved 2026.</p>
            <div className='flex items-center gap-4 justify-center text-2xl'>
                <a href='' className='hover:text-primary-light'> <FaFacebookSquare /> </a>
                <a href='' className='hover:text-primary-light'> <FaInstagram /> </a>
                <a href='' className='hover:text-primary-light'> <FaLinkedin /> </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
