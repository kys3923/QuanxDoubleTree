import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MdCancel } from 'react-icons/md'

const Modal = ({title, url, name, text, buttonText, func, state}) => {
  return (
    <Transition.Root show={state} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={func}>
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
                    <p className='font-bold'>{name}</p>
                    <button onClick={() => func(false)} className='absolute top-2 right-2 flex justify-center items-center'><MdCancel className='w-5 h-5'/></button>
                  </div>
                  {/* image */}
                  <div 
                    className='w-full h-60 bg-cover bg-center my-4 sm:h-auto sm:aspect-video'
                    style={{backgroundImage: `url('${url}')`}}
                  />
                  <div className='sm:flex sm:flex-row sm:justify-center'>
                    <div className="mt-3 text-left sm:mt-5 sm:max-w-[80%]">
                      <Dialog.Title as="h3" className="text-lg font-Arvo leading-6 text-[#104C97] mb-2">
                        {title}
                      </Dialog.Title>
                      <p className='text-sm'>{text}</p>
                    </div>
                  </div>
                </div>
                {buttonText !== '' &&
                  <div className="mt-5 sm:mt-6 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-[#104C97] px-5 py-2 text-sm text-white shadow-sm hover:bg-[rgb(11,52,103)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      
                    >
                      {buttonText}
                    </button>
                  </div>
                }
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
export default Modal;