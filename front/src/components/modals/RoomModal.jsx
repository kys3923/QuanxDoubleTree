import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MdCancel, MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md'

const RoomModal = ({state, setState, reservatedRoom, setReservatedRoom, triggerUseEffect, setTriggerUseEffect}) => {

  const addRoomHanlder = (e) => {
    let lastRoomId = reservatedRoom[reservatedRoom.length -1].id
    let newRoomData = {
      id: lastRoomId +1,
      adults: 1,
      kids: 0
    }

    setReservatedRoom((prev) => [
      ...prev,
      newRoomData
    ])
  }

  const removeRoomHandler = (e, id) => {
    let newArry = reservatedRoom.filter((room) => room.id !== id)
    setReservatedRoom(newArry)
  }

  const removeAdult = (e, id) => {
    let foundRoom = reservatedRoom.find(room => room.id === id)
    if(foundRoom.adults === 1) {
      return
    } else {
      foundRoom.adults = foundRoom.adults - 1
    }
    let updatedRoom = reservatedRoom
    setReservatedRoom(updatedRoom)
    setTriggerUseEffect(!triggerUseEffect)
  }

  const addAdult = (e, id) => {
    let foundRoom = reservatedRoom.find(room => room.id === id)
    if(foundRoom.adults + foundRoom.kids === 8) {
      return
    } else {
      foundRoom.adults = foundRoom.adults + 1
    }
    let updatedRoom = reservatedRoom
    setReservatedRoom(updatedRoom)
    setTriggerUseEffect(!triggerUseEffect)
  }

  const removeKid = (e, id) => {
    let foundRoom = reservatedRoom.find(room => room.id === id)
    if(foundRoom.kids === 0) {
      return
    } else {
      foundRoom.kids = foundRoom.kids - 1
    }
    let updatedRoom = reservatedRoom
    setReservatedRoom(updatedRoom)
    setTriggerUseEffect(!triggerUseEffect)
  }

  const addKid = (e, id) => {
    let foundRoom = reservatedRoom.find(room => room.id === id)
    if(foundRoom.adults + foundRoom.kids === 8) {
      return
    } else {
      foundRoom.kids = foundRoom.kids + 1
    }
    let updatedRoom = reservatedRoom
    setReservatedRoom(updatedRoom)
    setTriggerUseEffect(!triggerUseEffect)
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
                    <p className='font-bold'>Rooms and Guests</p>
                    <button onClick={() => setState(false)} className='absolute top-2 right-2 flex justify-center items-center'><MdCancel className='w-5 h-5'/></button>
                  </div>
                  {/* content */}
                  <div className='grid grid-cols-3 font-bold'>
                    <p>Rooms</p>
                    <p>Adults</p>
                    <p>Kids</p>
                  </div>
                  {reservatedRoom.length > 0 && <div >
                    {reservatedRoom.map((room, i) => {
                      return <div
                        key={room.id + 900}
                        className='grid grid-cols-3' 
                      >
                        <div className='flex flex-row items-center gap-1'>
                          <MdRemoveCircleOutline className='w-5 h-5 hover:cursor-pointer hover:text-gray-400' onClick={(e) => removeRoomHandler(e, room.id)} />
                          <p>Room {room.id}</p>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                          <MdRemoveCircleOutline onClick={(e) => removeAdult(e, room.id)} className='w-4 h-4 hover:cursor-pointer hover:text-gray-400' />
                          <p>{room.adults}</p>
                          <MdAddCircleOutline onClick={(e) => addAdult(e, room.id)} className='w-4 h-4 hover:cursor-pointer hover:text-gray-400' />
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                          <MdRemoveCircleOutline onClick={(e) => removeKid(e, room.id)} className='w-4 h-4 hover:cursor-pointer hover:text-gray-400' />
                          <p>{room.kids}</p>
                          <MdAddCircleOutline onClick={(e) => addKid(e, room.id)} className='w-4 h-4 hover:cursor-pointer hover:text-gray-400' />
                        </div>
                      </div>
                    })}
                  </div>
                  }
                  <div className='border-t border-gray-400 mt-2 pt-2 flex justify-center gap-4'>
                    <button onClick={addRoomHanlder} className='justify-center rounded-md bg-white border border-[#104C97] px-5 py-2 text-sm text-[#104C97] shadow-sm hover:bg-[rgb(11,52,103)] hover:text-white hover:border-[rgb(11,52,103)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex flex-row items-center gap-2'><MdAddCircleOutline className='w-5 h-5' />Add Room</button>
                    <button onClick={() => setState(false)} className='justify-center rounded-md bg-[#104C97] px-5 py-2 text-sm text-white shadow-sm hover:bg-[rgb(11,52,103)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex flex-row items-center gap-2'>Confirm Room and Guest</button>
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
export default RoomModal;