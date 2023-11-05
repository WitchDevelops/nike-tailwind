import { shoe8 } from "../assets/images";
import { Button } from '../components';
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We Provide You With
          <span className='text-blue-500 block'> Superior quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing your with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
        Our unwavering commitment to precision and excellence guarantees your complete satisfaction.
        </p>
        <div className="mt-11">
          <Button label='View details' />
        </div>
        
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img 
          src={shoe8}
          alt="premium shoe"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality