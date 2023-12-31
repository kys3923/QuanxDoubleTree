import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = (props) => {

  const [ submitData, setSubmitData ] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    contact: ''
  })
  const [ message, setMessage ] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    if(sessionStorage.authToken) {
      navigate('/')
    }
  },[])

  const { username, email, password, confirmPassword, address, contact } = submitData

  const ChangeHandler = (e) => {
    setSubmitData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value    
    }))
  }

  const lableStyles = 'text-xs text-gray-600'
  const inputStyles = 'px-4 py-1 text-xs rounded-md w-full'

  const submitHandler = (e) => {
    e.preventDefault()

    if(password.length < 6) {
      return setMessage('Password should be more than 6 characters long')
    }

    if(password !== confirmPassword) {
      return setMessage('Please check password again.')
    }

    if(username === '' || email === '' || password === '' || confirmPassword === '' || contact === '') {
      return setMessage('Please fill required information.')
    }

    const requestToAPI = async () => {
      try {
        const request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/register`, submitData)
        if(request.data.success) {
          sessionStorage.setItem('authToken', request.data.token)
          sessionStorage.setItem('userId', request.data.userId)
          navigate('/')
        }
      } catch (error) {
        console.log(error)
        setMessage(error.response.data.message)
      }
    }

    requestToAPI()
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-[700px]'>
      <div className='min-w-lg border-2 border-[#104C97] bg-[#104C97]/10 flex flex-col items-center p-8 shadow-lg rounded-lg'>
        <div className='pb-4 flex flex-col items-center gap-4 border-b border-[#104C97] w-full'>
          <img src='https://www.hilton.com/modules/assets/svgs/logos/DT.svg' />
          <p className='font-Arvo tracking-wide'>Register Account</p>
        </div>
        {message !== '' && <p className='text-xs text-red-600 pt-4'>{message}</p>}
        <form onSubmit={submitHandler} className='p-8 flex flex-col gap-4'>
          <div>
            <p className={lableStyles}>Name*</p>
            <input type='text' name='username' value={username} onChange={ChangeHandler} className={inputStyles} />
          </div>
          <div>
            <p className={lableStyles}>Email*</p>
            <input type='email' name='email' value={email} onChange={ChangeHandler} className={inputStyles} />
          </div>
          <div>
            <p className={lableStyles}>Password*</p>
            <input type='password' name='password' value={password} onChange={ChangeHandler} className={inputStyles} />
          </div>
          <div>
            <p className={lableStyles}>Confirm Password*</p>
            <input type='password' name='confirmPassword' value={confirmPassword} onChange={ChangeHandler} className={inputStyles} />
          </div>
          <div>
            <p className={lableStyles}>Address</p>
            <input type='text' name='address' value={address} onChange={ChangeHandler} className={inputStyles} />
          </div>
          <div>
            <p className={lableStyles}>Contact Number*</p>
            <input type='text' name='contact' value={contact} onChange={ChangeHandler} className={inputStyles} />
          </div>
          <button type='submit' className='bg-[#CF4802] px-4 py-2 rounded-md text-white text-sm hover:bg-[#CF4802]/60'>Register</button>
        </form>
      </div>
    </div>
  );
}
export default Register;