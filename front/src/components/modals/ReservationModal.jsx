import { useState, Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MdCancel, MdCheckCircle } from 'react-icons/md'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ReservationModal = ({state, setState, reservationData}) => {

  const [ foundUser, setFoundUser ] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    let isMounted = true
    let userId = {
      user: sessionStorage.userId
    }
    
    const requestUserData = async () => {
      try {
        if(userId && isMounted) {
          let request = await axios.put(`${process.env.REACT_APP_SERVER_URL}/auth/getUser`, userId)
          if(request.data.success) {
            setFoundUser(request.data.user)
          }
        }
      } catch (error) {
        console.log(error)
      }
    }

    requestUserData()
    return () => {
      isMounted = false
    }
  },[])

  const keyStyle = 'text-xs text-gray-400'
  const infoStyle = 'col-span-2 text-xs'
  const listStyle = 'grid grid-cols-3 items-center gap-2 px-8'
  const listStyle2 = 'grid grid-cols-3 items-center gap-2 px-8'
  const listStyle3 = 'flex flex-row items-center gap-2'

  const submitReservation = () => {
    let submitData = {
      user: sessionStorage.userId,
      reservationData: reservationData
    }

    const requestToAPI = async () => {
      try {
        let request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/reservation/register`, submitData)
        if(request.data.success) {
          setState(false)
          navigate('/reservation/success', {state: request.data.reservation})
        }
      } catch (error) {
        console.log(error)
      }
    }
    requestToAPI()
  }

  const specialRateDistributor = (data) => {
    if (!data.AAARate && !data.AARPRate && !data.GovRate && !data.SeniorRate && !data.travelAgents && !data.usePoints && data.CorpAcc === '' && data.GroupCode === '' && data.Promo === '') {
      return null
    }
    return <div className='flex flex-col gap-2 py-2'>
      <p className='w-full text-center text-lg font-Arvo border-b border-gray-400 py-2 text-[rgb(11,52,103)]'>Special Rates</p>
      {data.usePoints && <div className={listStyle3}><p className={listStyle3}><MdCheckCircle className='text-[rgb(11,52,103)]'/> Use Points</p></div>}
      {data.travelAgents && <div className={listStyle3}><p className={listStyle3}><MdCheckCircle className='text-[rgb(11,52,103)]' /> Travel Agents</p></div>}
      {data.AAARate && <div className={listStyle3} ><p className={listStyle3}><MdCheckCircle className='text-[rgb(11,52,103)]' /> AAA Rate</p></div>}
      {data.AARPRate && <div className={listStyle3}><p className={listStyle3}><MdCheckCircle className='text-[rgb(11,52,103)]' /> AARP Rate</p></div>}
      {data.SeniorRate && <div className={listStyle3}><p className={listStyle3}><MdCheckCircle className='text-[rgb(11,52,103)]' /> Senior Rate</p></div>}
      {data.GovRate && <div className={listStyle3}><p className={listStyle3}><MdCheckCircle className='text-[rgb(11,52,103)]' /> Government / Military Rate</p></div>}
      {data.Promo !== '' && <div className={listStyle3}><p>Promotion Code :</p><p>{data.Promo}</p></div>}
      {data.GroupCode !== '' && <div className={listStyle3}><p>Group Code :</p><p>{data.GroupCode}</p></div>}
      {data.CorpAcc !== '' && <div className={listStyle3}><p>Corporate Account :</p><p>{data.CorpAcc}</p></div>}
    </div>
  }
  
  return (
    <Transition.Root show={state} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setState}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 text-left shadow-xl transition-all sm:my-8 w-full sm:w-[650px] p-6 pb-12">
                <div>
                  <div className='relative flex flex-row justify-center border-b border-gray-400 py-2 items-center'>
                    <p className='font-bold'>Reservation Confirmation</p>
                    <button onClick={() => setState(false)} className='absolute top-2 right-2 flex justify-center items-center'><MdCancel className='w-5 h-5'/></button>
                  </div>
                  {/* content */}
                  {foundUser &&
                    <div className='flex flex-col gap-2'>
                      <div className='px-8'>
                        <p className='w-full text-center text-lg font-Arvo border-b border-gray-400 py-2 mt-2 text-[rgb(11,52,103)]'>Reservation Infomation</p>
                      </div>
                      <div className={listStyle}>
                        <p className={keyStyle}>Name:</p>
                        <p className={infoStyle}>{foundUser.name}</p>
                      </div>
                      <div className={listStyle}>
                        <p className={keyStyle}>Email:</p>
                        <p className={infoStyle}>{foundUser.email}</p>
                      </div>
                      <div className={listStyle}>
                        <p className={keyStyle}>Contact Number:</p>
                        <p className={infoStyle}>{foundUser.contact}</p>
                      </div>
                      {foundUser.address !== '' &&
                        <div className={listStyle}>
                          <p className={keyStyle}>Address:</p>
                          <p className={infoStyle}>{foundUser.address}</p>
                        </div>
                      }
                      {/* reservation Data */}
                      <div className={listStyle}>
                        <p className={keyStyle}>Hotel:</p>
                        <p className={infoStyle}>{reservationData.location}</p>
                      </div>
                      <div className={listStyle}>
                        <p className={keyStyle}>Reservation Dates:</p>
                        <p className={infoStyle}>{reservationData.reservationDates.checkIn} ~ {reservationData.reservationDates.checkOut}</p>
                      </div>
                      <div className={listStyle2}>
                        <p className={keyStyle}>Reservated Room:</p>
                        <div className='w-full col-span-2'>
                        {reservationData.rooms.map((room, i) => {
                          return <div
                            key={i+2000}
                            className='grid grid-cols-3 w-full text-xs pb-1'
                          >
                            <p>Room {room.id}</p>
                            <p>Adults: {room.adults}</p>
                            <p>Kids: {room.kids}</p>
                          </div>
                        })}
                        </div>
                      </div>
                      <div className='px-8 text-xs'>
                        {specialRateDistributor(reservationData.specialRates)}
                      </div>
                    </div> 
                  }

                  <div className='border-t border-gray-400 mt-2 pt-2 flex justify-center gap-4'>
                    <button onClick={submitReservation} className='justify-center rounded-md bg-[#104C97] px-5 py-2 text-sm text-white shadow-sm hover:bg-[rgb(11,52,103)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex flex-row items-center gap-2'>Make Reservation</button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
export default ReservationModal;