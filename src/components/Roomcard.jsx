import React from 'react';
import { Link } from 'react-router-dom';

const Roomcard = ({room}) => {

    const{price_per_night,room_description, image1, _id} = room;

    return (
        <div >
        
        <div className=" " data-aos="flip-right">
        <Link to={`/rooms/${_id}`}>
<figure><img className="mx-auto h-[200px] w-[300px]" src={image1} alt="Shoes" /></figure>

<div className='flex'>
<h2 className="mx-4 my-4 text-center text-xl">{room_description} </h2>
<h2 className="mx-4 my-4 text-center text-xl">{price_per_night}</h2>
</div>

</Link>

</div>
    
    
    </div>
    );
};

export default Roomcard;