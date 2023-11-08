import React from 'react';
import { Link } from 'react-router-dom';

const Roomcard = ({room}) => {

    const{price_per_night,room_description, image1, _id} = room;

    return (
        <div>
        
        <div className=" " data-aos="flip-right">
        <Link to={`/rooms/${_id}`}>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={image1} 
           
            className="w-full h-48 object-cover object-center"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{room_description}</h2>
            <div className="mt-4 mb-4">
              <span className="text-gray-600">Price:</span>
              <span className="text-xl font-bold text-blue-500">
                ${price_per_night}
              </span>
            </div>
            <button className="bg-[#2b3440] hover:bg-[#0f1a29] text-white font-bold py-2 px-4 rounded">
              Book Now
            </button>
          </div>
        </div>

</Link>

</div>
    
    
    </div>
    );
};

export default Roomcard;