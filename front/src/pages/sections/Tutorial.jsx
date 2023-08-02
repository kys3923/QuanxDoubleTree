import TutorialModal from "../../components/modals/TutorialModal";
import { useState } from 'react'

const Tutorial = (props) => {

  const [ isModalShow, setIsModalShow ] = useState(false)

  const buttonHandler = (e) => {
    setIsModalShow(!isModalShow)
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <section
      className="w-full flex justify-center"
    >
      <button onClick={buttonHandler} className="bg-blue-200 text-white px-4 py-2">Show Modal</button>
      {isModalShow && <TutorialModal isModalShow={isModalShow} setIsModalShow={setIsModalShow} />}
    </section>
  );
}
export default Tutorial;