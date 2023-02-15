import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export const Sidebar = () => {
  const isMenuOpen = useSelector(store=> store.sideBarToogle.isMenuOpen);

  //early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className='shadow-slate-300 shadow-lg px-2'>
      <ul className='p-2 m-2'>
        <li className='mb-2 font-semibold hover:bg-gray-200'><Link to="/">Home</Link></li>
        <li className='mb-2 font-semibold hover:bg-gray-200'>Shorts</li>
        <li className='mb-2 font-semibold hover:bg-gray-200'>Subscriptions</li>
        <li className='mb-2 font-semibold hover:bg-gray-200'>Library</li>
        <li className='mb-2 font-semibold hover:bg-gray-200'>History</li>
      </ul>
    </div>
  )
}

export default Sidebar;
