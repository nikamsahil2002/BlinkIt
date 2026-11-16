import banner from '../assets/Frame-1437256605-2-2.jpg'
import img1 from '../assets/pharmacy-WEB.avif'
import img2 from '../assets/pet_crystal_WEB-1.avif'
import img3 from '../assets/baby_crystal_WEB-1.avif'

const Banner = () => {
  return (
    <div>
        <div>
          <img src={banner} alt="banner" w-full/>
        </div>
        <div className='flex justify-around gap-5 px-5'>
          <div>
            <img src={img1} alt="banner" w-full/>
          </div>    
          <div>
            <img src={img2} alt="banner" w-full/>
          </div>
          <div>
            <img src={img3} alt="banner" w-full/>
          </div>
        </div>
    </div>
  )
}

export default Banner
