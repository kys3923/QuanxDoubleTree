const TutorialModal = ({isModalShow, setIsModalShow}) => {
  
  return (
    <div 
      className="absolute w-screen h-screen bg-black/70 top-0 z-50 flex flex-row justify-center items-center"
    >
      <div
        className="bg-white w-[80%] p-8 shadow-lg"
      >
        <button onClick={(e) => setIsModalShow(false)}> Close Modal</button>
        <p>This is modal</p>
      </div>
    </div>
  );
}
export default TutorialModal;