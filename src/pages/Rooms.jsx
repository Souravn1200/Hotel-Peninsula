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
          <button className='bg-[#2b3440] hover:bg-[#0f1a29] text-white font-bold py-2 px-4 rounded mr-4' onClick={handleHighToLow}>Height To Lowest</button>
          <button className='bg-[#2b3440] hover:bg-[#0f1a29] text-white font-bold py-2 px-4 rounded ' onClick={handleLowToHigh}>Lowest To Height</button>

        </div>
        
        <div className='w-[1200px] mx-auto'>
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
    {rooms?.length > 0 ? (
      rooms.map((room) => (
        <div key={room._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={room.image1} 
           
            className="w-full h-48 object-cover object-center"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{room.room_description}</h2>
            <p className="text-gray- mt-2">{room.description}</p>
            <div className="mt-4 mb-4">
              <span className="text-gray-600">Price:</span>
              <span className="text-xl font-bold text-blue-500">
                ${room.price_per_night}
              </span>
            </div>
            <button className="bg-[#2b3440] hover:bg-[#0f1a29] text-white font-bold py-2 px-4 rounded">
              Book Now
            </button>
          </div>
        </div>
      ))
    ) : (
      <p>No rooms available.</p>
    )}
  </div>
</div>

        </div>
    );
};

export default Rooms;