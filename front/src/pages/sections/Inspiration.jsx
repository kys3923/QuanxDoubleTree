import { LocationInspirationImages } from '../../data/images'

const Inspiration = (props) => {
  return (
    <section className="sm:px-8">
      <div className="p-4">
        <h1 className="font-Arvo text-xl text-[#104C97]">Location inspiration</h1>
        <p className="text-sm">Find a hotel that's right for you and get the most from your next stay.</p>
      </div>
      <div
        className='flex flex-row flex-nowrap overflow-x-auto gap-4 sm:grid sm:grid-cols-3'
      >
        {LocationInspirationImages && LocationInspirationImages.map((image, i) => {
          return <div
            key={i + 500}
            className='w-[80%] sm:w-full flex-shrink-0'
          >
            <div 
              style={{ backgroundImage: `url('${image.url}')`}}
              className='w-full aspect-[4/3] bg-cover bg-center'
            />
            <div className='flex flex-col gap-4 my-2'>
              <h3 className='font-bold'>{image.name}</h3>
              <p className='text-sm'>{image.text}</p>
              <p className='underline text-[#CF4802] hover:cursor-pointer'>{image.buttonText}</p>
            </div>
          </div>
        })}
      </div>
    </section>
  );
}
export default Inspiration;