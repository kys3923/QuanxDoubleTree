import { useState } from 'react'
import { CookiesImages } from '../../data/images';

const Cookies = (props) => {

  const [ currentSection, setCurrentSection ] = useState('DoubleTree cookies')

  const buttonStyles = (state, section) => {
    if(state === section) {
      return 'font-Arvo tracking-tight text-sm md:text-lg border-b-8 border-[#CF4802] py-2 hover:cursor-pointer'
    } else {
      return 'font-Arvo tracking-tight text-sm md:text-lg border-b-8 border-white py-2 hover:cursor-pointer'
    }
  }

  const buttonClickHandler = (e, section) => {
    if(currentSection === section) {
      return
    }
    setCurrentSection(section)
  }

  const sectionDistributor = () => {
    let currentImage = CookiesImages.find((image) => image.name === currentSection)
    console.log(currentImage)
    return <div>
      <div 
        style={{backgroundImage: `url('${currentImage.url}')`}}
        className='w-full bg-cover bg-center aspect-[4/3]'
      />
      <div className='flex justify-center my-4'>
        <div className='w-[80%] flex flex-col gap-2'>
          <p className="font-Arvo text-xl text-[#104C97]">{currentImage.title}</p>
          <p className="text-sm">{currentImage.text}</p>
          <div className='pt-2'>
            <button className="bg-[#CF4802] px-4 py-2 rounded-md text-white text-sm">{currentImage.buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  }

  return (
    <section className="sm:px-8 py-4">
      <div className='grid grid-cols-3 gap-2'>
        {CookiesImages && CookiesImages.map((image, i) => {
          return <button
            key={i+600}
            className={buttonStyles(currentSection, image.name)}
            onClick={(e) => buttonClickHandler(e, image.name)}
          >
            {image.name}
          </button>
        })}
      </div>
      <div>
        {CookiesImages && sectionDistributor()}
      </div>  
    </section>
  );
}
export default Cookies;