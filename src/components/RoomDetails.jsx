import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RoomDetails = () => {

    const {_id, room_description,price_per_night, room_size,availability,special_offers,image1, image2, image3} = useLoaderData();

    return (
        <div className='flex gap-24 justify-center h-screen'>
           <div className=''>

                <div className='flex gap-8'>
                    <img src={image1} className='h-[220px] w-[300px]' alt="" />
                    <img src={image2}className='h-[220px] w-[300px]' alt="" />
                </div>

                <div>
                    <img src={image3} className='h-[320px] w-[640px] mt-5' alt="" />
                </div>

           </div>

           <div className='font-serif mt-10'>
    <h2 className='mb-3 text-2xl font-bold capitalize'>
        {room_description}
    </h2>
    <h2 className='mb-3 text-xl text-gray-800 border-l-4 border-blue-500 pl-2'>
    <span className='font-bold'> Price :</span>   {price_per_night}$
    </h2>
    <h2 className='mb-3 text-xl  text-gray-800 border-l-4 border-blue-500 pl-2 capitalize'>
        <span className='font-bold'> Space :</span> {room_size}
    </h2>
    <h2 className='mb-3 text-xl  text-gray-800 border-l-4 border-blue-500 pl-2'>
    <span className='font-bold'> Availability :</span> {availability} Person
    </h2>
   
</div>

        </div>
    );
};

export default RoomDetails;