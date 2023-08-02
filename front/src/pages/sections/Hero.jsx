import { HeroImages } from "../../data/images";
import { useState } from 'react'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const Hero = (props) => {

  const [ currentSlide, setCurrentSlide ] = useState(0)

  const slideButtonHandler = (e, type) => {
    if(type==='right') {
      if(currentSlide === 3) {
        setCurrentSlide(0)
      } else {
        setCurrentSlide(currentSlide +1)
      }
    }
    if(type==='left') {
      if(currentSlide === 0) {
        setCurrentSlide(3)
      } else {
        setCurrentSlide(currentSlide -1)
      }
    }
  }


  return (
    <section className="flex flex-col h-full">
      {HeroImages && <div
        className="flex flex-col h-full sm:px-8"
      >
        <div
          style={{backgroundImage: `url('${HeroImages[currentSlide].url}')`}}
          className="relative w-full h-64 sm:h-full bg-cover bg-center flex flex-row justify-center sm:rounded-xl"
        >
          {/* top right corner */}
          <div className="absolute top-[10px] right-[10px]">
            {/* <div className="w-full" /> */}
            <div className="text-xs bg-black/60 text-white text-right p-1.5 px-2">
              <p className="truncate">{HeroImages[currentSlide].boxText}</p>
            </div>
          </div>
          {/* middle buttons */}
          <div className="h-full w-full flex flex-row justify-between items-center">
            <button onClick={(e) => slideButtonHandler(e, 'left') } className="bg-black/60 py-4 text-white"><MdKeyboardArrowLeft className="w-7 h-7" /></button>
            <button onClick={(e) => slideButtonHandler(e, 'right') } className="bg-black/60 py-4 text-white"><MdKeyboardArrowRight className="w-7 h-7" /></button>
          </div>
          {/* bottom right corner */}
          <div className="absolute bottom-0 right-0 bg-black/60 text-white text-xs p-1.5 px-2 sm:rounded-br-lg">
            <p>{currentSlide + 1} of {HeroImages.length}</p>
          </div>
        </div>
        {/* bottom text box */}
        <div className="flex flex-col text-center p-8">
          <p className="mb-2 font-Arvo text-xl tracking-tight">{HeroImages[currentSlide].title}</p>
          <p className="text-sm">{HeroImages[currentSlide].text}</p>
          <div className="flex justify-center mt-4">
            <button className="bg-[#CF4802] px-4 py-2 rounded-md text-white text-sm">{HeroImages[currentSlide].buttonText}</button>
          </div>
        </div>
      </div>
      }
    </section>
  );
}
export default Hero;