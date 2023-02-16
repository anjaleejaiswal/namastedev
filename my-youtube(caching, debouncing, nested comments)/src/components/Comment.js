import React from 'react';
import { user_profile } from '../Constant';


const Comment = ({data}) => {
    const {name , text, replies} = data
  return (
    <div className='flex shadow-sm bg-gray-200 p-2 rounded-lg my-2'>
        <img 
            src={user_profile} 
            alt="user_profile_icon" 
            className='w-8 h-8'
        />
        <div className='px-4'>
            <h1>{name}</h1>
            <h1>{text}</h1>
        </div>
    </div>
  )
}

export default Comment