import React, { useEffect, useState } from 'react';
import Roomcard from '../components/Roomcard';
import Pagetitle from '../components/Pagetitle';
const Rooms = () => {

    const [rooms, setRooms] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/rooms')
        .then(res => res.json())
        .then(data => setRooms(data))
    }, [])

   
    
  const handleHighToLow = () => {

        fetch('http://localhost:5000/hightolow')
        .then(res => res.json())
        .then(data => setRooms(data))
  
  }

  const handleLowToHigh = () => {

    fetch('http://localhost:5000/lowtohigh')
    .then(res => res.json())
    .then(data => setRooms(data))

}

    return (
        <div className='mx-auto w-[1200px]'>
             <Pagetitle title={'Romms'}></Pagetitle>
            <div className='ml-5'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4' onClick={handleHighToLow}>Height To Lowest</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ' onClick={handleLowToHigh}>Lowest To Height</button>

        </div>
        
        <div>{console.log(rooms.length)}
           <div className='grid lg:grid-cols-4 gap-6 mt-6'>
            {rooms?.length && rooms?.map(room => <Roomcard key={room._id} room={room}></Roomcard>)}
            
        </div>
        </div>
        </div>
    );
};

export default Rooms;