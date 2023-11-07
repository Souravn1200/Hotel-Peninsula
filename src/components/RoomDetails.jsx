import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RoomDetails = () => {

    const {_id, room_description,price_per_night, room_size,availability,special_offers,image1, image2, image3} = useLoaderData();

    return (
        <div className='flex gap-24 justify-center items-center h-screen'>
           <div className='-ml-40'>

                <div className='flex gap-8'>
                    <img src={image1} className='h-[220px] w-[300px]' alt="" />
                    <img src={image2}className='h-[220px] w-[300px]' alt="" />
                </div>

                <div>
                    <img src={image3} className='h-[320px] w-[640px] mt-5' alt="" />
                </div>

           </div>

           <div>
                <h2>{room_description}</h2>
           </div>
        </div>
    );
};

export default RoomDetails;