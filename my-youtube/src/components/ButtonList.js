import React from 'react'

const ButtonList = () => {
  const buttonListArr = ["All","Music","Bollywood music", "Sitcoms", "Live", "Comedy", "React routers", "C++", "Game shows"];
  return (
    <ul className='flex'>
      {
        buttonListArr.map((item,index) => <li key={index} className='p-2 m-2 text-center w-13 bg-gray-300 rounded-lg'>{item}</li>)
      }
    </ul>
  )
}

export default ButtonList