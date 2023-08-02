import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MdCancel } from 'react-icons/md'

const SpecialRates = ({state, setState, specialRates, setSpecialRates, triggerUseEffect, setTriggerUseEffect }) => {

  const { AAARate, AARPRate, CorpAcc, GovRate, GroupCode, Promo, SeniorRate, travelAgents, usePoints } = specialRates

  const ChangeHandler = (e) => {
    setSpecialRates((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const CheckBoxHandler = async (e) => {
    let enteredValue = e.target.name
    let newObj = specialRates

    for await ( let [key, value] of Object.entries(newObj)) {
      if(key === enteredValue) {
        newObj[enteredValue] = !newObj[enteredValue]
      }
    }
    setSpecialRates(newObj)
    setTriggerUseEffect(!triggerUseEffect)
  }

  const inputStyle = 'border border-gray-400 rounded-md w-full px-4 py-1'

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
                    <p className='font-bold'>Special Rates</p>
                    <button onClick={() => setState(false)} className='absolute top-2 right-2 flex justify-center items-center'><MdCancel className='w-5 h-5'/></button>
                  </div>
                  {/* content */}
                  <form className='flex flex-col gap-2 py-4'>
                    <div className='flex flex-row gap-2'>
                      <input type='checkbox' name='usePoints' checked={usePoints} onChange={CheckBoxHandler} />
                      <p>Use Points</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                      <input type='checkbox' name='travelAgents' checked={travelAgents} onChange={CheckBoxHandler} />
                      <p>Travel Agents</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                      <input type='checkbox' name='AAARate' checked={AAARate} onChange={CheckBoxHandler} />
                      <p>AAA Rate</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                      <input type='checkbox' name='AARPRate' checked={AARPRate} onChange={CheckBoxHandler} />
                      <p>AARP Rate</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                      <input type='checkbox' name='SeniorRate' checked={SeniorRate} onChange={CheckBoxHandler} />
                      <p>Senior Rate</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                      <input type='checkbox' name='GovRate' checked={GovRate} onChange={CheckBoxHandler} />
                      <p>Government / Military Rates</p>
                    </div>
                    <div className='flex flex-col'>
                      <p className='text-xs'>Promotion Code</p>
                      <input type='text' name='Promo' value={Promo} onChange={ChangeHandler} className={inputStyle} />
                    </div>
                    <div className='flex flex-col'>
                      <p className='text-xs'>Group Code</p>
                      <input type='text' name='GroupCode' value={GroupCode} onChange={ChangeHandler} className={inputStyle} />
                    </div>
                    <div className='flex flex-col'>
                      <p className='text-xs'>Corporate Account</p>
                      <input type='text' name='CorpAcc' value={CorpAcc} onChange={ChangeHandler} className={inputStyle} />
                    </div>
                  </form>
                  <div className='border-t border-gray-400 mt-2 pt-2 flex justify-center gap-4'>
                    <button onClick={() => setState(false)} className='justify-center rounded-md bg-[#104C97] px-5 py-2 text-sm text-white shadow-sm hover:bg-[rgb(11,52,103)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex flex-row items-center gap-2'>Confirm Special Rates</button>
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
export default SpecialRates;