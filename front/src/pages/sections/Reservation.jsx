import { useEffect, useState } from 'react'
import { MdCalendarMonth } from 'react-icons/md'
import RoomModal from '../../components/modals/RoomModal'
import SpecialRates from '../../components/modals/SpecialModal'
import ReservationModal from '../../components/modals/ReservationModal'
import AlertModal from '../../components/modals/AlertModal'

const Reservation = (props) => {

  const [ location, setLocation ] = useState('')
  const [ checkInDate, setCheckInDate ] = useState('')
  const [ checkOutDate, setCheckOutDate ] = useState('')
  const [ reservatedRoom, setReservatedRoom ] = useState([{
    id: 1,
    adults: 1,
    kids: 0
  }])
  const [ isRoomModal, setIdRoomModal ] = useState(false)
  const [ isSpecialModal, setIsSpecialModal ] = useState(false)
  const [ isResvModal, setIsResvModal ] = useState(false)
  const [ triggerUseEffect, setTriggerUseEffect ] = useState(false)
  const [ specialRates, setSpecialRates ] = useState({
    usePoints: false,
    travelAgents: false,
    AAARate: false,
    AARPRate: false,
    SeniorRate: false,
    GovRate: false,
    Promo: '',
    GroupCode: '',
    CorpAcc: ''
  })

  const tempTextChangeHandler = (e) => {
    setLocation(e.target.value)
  }

  const totalGuestCalc = () => {
    let totalNumber = 0
    reservatedRoom.forEach((room) => {
      let guest
      if(room.adults >= 1) {
        guest = room.adults + room.kids
      }
      totalNumber += guest 
    })
    return totalNumber
  }

  const ReservationModalHandler = () => {
    if(checkInDate === '') {
      return <AlertModal text='Please provide check-in date.' />
    }
    if(checkOutDate === '') {
      return <AlertModal text='Please provide check-out date.' />
    }
    if(location === '') {
      return <AlertModal text='Please provide location.' />
    }
    if(!sessionStorage.userId) {
      return <AlertModal text='Please login to make a reservation.' />
    }
    let reservationData = {
      location: location,
      reservationDates: {
        checkIn: checkInDate,
        checkOut: checkOutDate
      },
      rooms: reservatedRoom,
      specialRates: specialRates
    }
    return <ReservationModal state={isResvModal} setState={setIsResvModal} reservationData={reservationData} />
  }

  useEffect(() => {
    console.log('triggered')
  },[triggerUseEffect])

  return (
    <section className='text-sm py-4 flex flex-col gap-2'>
      <div>
        <div className='flex flex-row gap-1'>
          <p>Where to?</p>
          <p className='text-gray-400'>(Required)</p>
        </div>
        <input type='text' onChange={tempTextChangeHandler} placeholder="City, state, locatioin, or airport" className='w-full border border-gray-400 p-2'/>
      </div>
      <div className='flex flex-col gap-2 lg:flex-row'>
        <div>

          <div className='flex flex-row gap-1'>
            <p>When?</p>
            <p className='text-gray-400'>(Optional)</p>
          </div>
          <div className='grid grid-cols-2'>
            <div className='flex flex-row gap-1 hover:cursor-pointer border-r border-gray-400 px-2'>
              <p><MdCalendarMonth className='w-10 h-10 text-[#CF4802]' /></p>
              <div className='lg:w-48'>
                <p>Check-in</p>
                <input type='date' value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} className='text-xs border-none'/>
              </div>
            </div>
            <div className='flex flex-row gap-1 hover:cursor-pointer px-2'>
              <p><MdCalendarMonth className='w-10 h-10 text-[#CF4802]' /></p>
              <div className='lg:w-48'>
                <p>Check-out</p>
                <input type='date' value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} className='text-xs border-none'/>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2 py-2 md:grid grid-cols-3 md:w-full'>
          <button onClick={(e) => setIdRoomModal(!isRoomModal)} className='px-4 p-2 border rounded-md border-black truncate'>{reservatedRoom.length} Room, {totalGuestCalc()} {totalGuestCalc() == 1 ? 'Guest' : 'Guests'}</button>
          <button onClick={(e) => setIsSpecialModal(!isSpecialModal)} className='py-2 border rounded-md border-black'>Special Rates</button>
          <button onClick={(e) => setIsResvModal(!isResvModal)} className='bg-[#CF4802] py-2 border-[#CF4802] rounded-md text-white'>Make a Reservation</button>
        </div>
      </div>
      {isRoomModal && <RoomModal state={isRoomModal} setState={setIdRoomModal} reservatedRoom={reservatedRoom} setReservatedRoom={setReservatedRoom} triggerUseEffect={triggerUseEffect} setTriggerUseEffect={setTriggerUseEffect}/>}
      {isSpecialModal && <SpecialRates state={isSpecialModal} setState={setIsSpecialModal} specialRates={specialRates} setSpecialRates={setSpecialRates} triggerUseEffect={triggerUseEffect} setTriggerUseEffect={setTriggerUseEffect} />}
      {isResvModal && ReservationModalHandler()}
    </section>
  );
}

export default Reservation;