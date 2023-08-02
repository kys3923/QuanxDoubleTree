import { MdAccountCircle } from 'react-icons/md'
import {Images} from '../data/images'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {

  const dummyLinkStyle = 'hover:cursor-pointer hover:text-gray-400'

  const navigate = useNavigate()

  const JoinButtonHandler = (e) => {
    navigate('/register')
  }

  const SignInButtonHandler = (e) => {
    navigate('/login')
  }

  const SignOutButtonHandler = (e) => {
    sessionStorage.clear()
    navigate('/')
  }

  const accountButtonDistributor = () => {
    if(sessionStorage.authToken) {
      return <button onClick={SignOutButtonHandler} className='px-2 flex flex-row truncate items-center gap-1 hover:text-gray-400'>Sign Out<MdAccountCircle className='w-4 h-4' /></button>
    } else {
      return <button onClick={SignInButtonHandler} className='px-2 flex flex-row truncate items-center gap-1 hover:text-gray-400'>Sign In<MdAccountCircle className='w-4 h-4' /></button>
    }
  }

  return (
    <header className='flex flex-row justify-between items-center gap-2 py-2 px-8 sticky top-0 bg-white border-gray-200 border-b z-50'>
      <div>
        {/* Logo Image */}
        {Images && Images.map((image, i) => {
          if(image.name === 'Logo Image') {
            return <a href='/' key={i + 10} ><img src={image.url} width='90px' className='w-[90px] min-w-[70px]' /></a>
          }
        })}
      </div>
      <ul className='w-full flex flex-row gap-4 px-8 text-sm truncate font-semibold'>
        <li className={dummyLinkStyle}>Locations</li>
        <li className={dummyLinkStyle}>Offers</li>
        <li className={dummyLinkStyle}>Meetings & Events</li>
      </ul>
      <div className='flex flex-row flex-nowrap gap-2 text-sm'>
        <button onClick={JoinButtonHandler} className='px-3 border-r hover:text-gray-400'>Join</button>
        {accountButtonDistributor()}
      </div>
    </header>
  );
}
export default Header;