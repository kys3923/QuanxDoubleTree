import { useLocation, useNavigate } from 'react-router-dom'
import { MdCheckCircle } from 'react-icons/md' 

const ReservationSuccess = (props) => {
  const location = useLocation()
  const navigate = useNavigate()

  const buttonHandler = (e) => {
    navigate('/')
  }
    console.log(location.state)
  return (
    <section className='w-full'>
      <div className='flex flex-col justify-center items-center py-32 gap-2'>
        <MdCheckCircle className='w-16 h-16 text-green-700'/>
        <p>Reservation has been requested!</p>
      </div>
      <div className='px-8 text-sm text-center text-gray-600'>
        <p>We'll contact you as soon as the requested reservation has been approved!</p>
        <p>Thank you for choosing DoubleTree.</p>
      </div>
      <div className='flex justify-center mt-4'>
        <button onClick={buttonHandler} className="bg-[#CF4802] px-4 py-2 rounded-md text-white text-sm">Home</button>
      </div>
    </section>
  );
}
export default ReservationSuccess;