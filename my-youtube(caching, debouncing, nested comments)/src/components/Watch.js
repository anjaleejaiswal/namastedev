import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeSideBarMenu } from '../utils/sideBarSlice';
import CommentContainer from './CommentContainer';


const Watch = () => {
    const[searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeSideBarMenu());
    },[]);
    
  return (
    <div className='flex-col'>
      <div className='p-2 m-2'>
          <iframe 
              width="1000" 
              height="500" 
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
          </iframe>
      </div>
      <CommentContainer />
    </div>
  )
}

export default Watch