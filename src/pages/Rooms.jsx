import React, { useEffect, useState } from 'react';
import Roomcard from '../components/Roomcard';
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
        <div>
            <div className='ml-5'>
          <button className='' onClick={handleHighToLow}>Height To Lowest</button>
          <button className='btn btn-primary ' onClick={handleLowToHigh}>Lowest To Height</button>
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