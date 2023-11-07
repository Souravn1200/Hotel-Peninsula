import React, { useEffect, useState } from 'react';
import Roomcard from '../components/Roomcard';
const Rooms = () => {

    const [rooms, setRooms] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/rooms')
        .then(res => res.json())
        .then(data => setRooms(data))
    }, [])

    return (
        <div>{console.log(rooms.length)}
           <div className='grid lg:grid-cols-4 gap-6 mt-6'>
            {rooms?.length && rooms?.map(room => <Roomcard key={room._id} room={room}></Roomcard>)}
            
        </div>
        </div>
    );
};

export default Rooms;