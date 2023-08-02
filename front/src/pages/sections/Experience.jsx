import { ExperienceNewImages } from "../../data/images";
import { useState } from 'react'
import Modal from "../../components/modals/modal";

const Experience = (props) => {

  const [ selectedLocation, setSelectedLocation ] = useState()
  const [ isModalOpen, setIsModalOpen ] = useState(false) 

  const imageClickHandler = (e, obj) => {
    setSelectedLocation(obj)
    setIsModalOpen(!isModalOpen)
  }

  return (
    <section className="sm:px-8">
      <div className="p-4">
        <h1 className="font-Arvo text-xl text-[#104C97]">Experience something new</h1>
        <p className="text-sm">Explore these offers for ways to make the most out of your stay.</p>
      </div>
      <div
        className="flex flex-row flex-nowrap overflow-x-auto gap-4 sm:grid sm:grid-cols-3 sm:gap-4"
      >
        {ExperienceNewImages && ExperienceNewImages.map((image, i) => {
          return <div
            key={i+300}
            style={{ backgroundImage: `url('${image.url}')`}}
            className="w-[80%] flex-shrink-0 bg-cover bg-center hover:cursor-pointer sm:w-full aspect-[4/3]"
            onClick={(e) => imageClickHandler(e, image)}
          >
            <p className="transition-all ease-in-out duration-300 text-white w-full h-full text-center bg-black/30 flex flex-row items-end justify-center pb-8 hover:pb-[30%] font-bold uppercase tracking-wide">{image.name}</p>
          </div>
        })}
      </div>
      {isModalOpen && <Modal title={selectedLocation.title} url={selectedLocation.url} name={selectedLocation.name} text={selectedLocation.text} buttonText={selectedLocation.buttonText} func={setIsModalOpen} state={isModalOpen}/>}
    </section>
  );
}
export default Experience;