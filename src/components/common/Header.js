import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserDetails } from '../../redux/slice/userDetails';


const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userDetails } = useSelector(state => state.userDetails);

  const handleSignOutUser = () => {
    signOut(auth).then(() => {
      dispatch(updateUserDetails(null))
      navigate('/login');
      // Sign-out successful.
    }).catch((error) => {
      console.log(error)
      // An error happened.
    });
  }
  const isNotLogin = location.pathname !== '/login'
  return (
    <div className='absolute bg-gradient-to-b from-black w-full p-4 z-50'>
      <div className='max-w-screen-xl m-auto flex justify-between'>
        <img className={isNotLogin ? 'ml-4 w-28' : 'w-48 ml-4'}
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        {
          isNotLogin &&
          <>
            <div>
              <ul className='flex justify-between text-white/80 cursor-pointer'>
                <li className='m-2  hover:text-white'>Home</li>
                <li className='m-2  hover:text-white'>Movies</li>
                <li className='m-2  hover:text-white'>My List</li>
              </ul>
            </div>
            <div className='flex justify-between'>
              <span className='p-2'>Dropdown</span>
              <span className='p-2 cursor-pointer' onClick={handleSignOutUser}>Signout</span>
            </div>
          </>
        }

      </div>
    </div>
  )
}

export default Header