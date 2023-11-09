import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const RoomDetails = () => {

    const { user } = useContext(AuthContext);
    const [date, setDate] = useState(null);
    const email = user?.email;
    const { _id, room_description, price_per_night, room_size, availability, special_offers, image1, image2, image3 } = useLoaderData();





    const handleMyBooking = () => {

        const booking = { room_description, price_per_night, room_size, availability, special_offers, image1, image2, image3, email, date }


        fetch('http://localhost:5000/mybooking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {


                fetch(`http://localhost:5000/rooms/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ ...booking })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('patch prob', data);
                    })


                console.log(data);
            })



    }


    return (
        <div className='flex gap-24 justify-center h-screen mb-8'>



            <div className=''>

                <div className='flex gap-8'>
                    <img src={image1} className='h-[220px] w-[300px]' alt="" />
                    <img src={image2} className='h-[220px] w-[300px]' alt="" />
                </div>

                <div>
                    <img src={image3} className='h-[320px] w-[640px] mt-5' alt="" />
                </div>

            </div>

            <div className='font-serif mt-10'>
                <h2 className='mb-3 text-2xl font-bold capitalize text-center'>
                    {room_description}
                </h2>
                <h2 className='mb-3 text-xl text-gray-800 border-l-4 border-blue-500 pl-2'>
                    <span className='font-bold'> Price :</span>   {price_per_night}$
                </h2>
                <h2 className='mb-3 text-xl  text-gray-800 border-l-4 border-blue-500 pl-2 capitalize'>
                    <span className='font-bold'> Space :</span> {room_size}
                </h2>
                <h2 className='mb-3 text-xl  text-gray-800 border-l-4 border-blue-500 pl-2'>
                    <span className='font-bold'> Availability :</span> {availability}
                </h2>

                <h3 className='mt-10 text-2xl font-bold text-center'>Special Offers</h3>

                {special_offers?.length ? (
                    special_offers.map(offer => (
                        <div key={offer._id} className="w-96 bg-base-100 mt-6">

                            <div className="">
                                <h2 className="card-title">{offer.offer_name}</h2>
                                <p className='mt-2'>{offer.offer_description}</p>
                                <p className='mt-2'>Valid Until: {offer.valid_until}</p>

                            </div>
                        </div>
                    ))
                ) : (
                    <p className='mt-5 text-center text-2xl'>No offers available.</p>
                )}

                Select Date: {

                    <input className='mt-5 mb-8' type="date" name="date" id="" onChange={(e) => setDate(e.target.value)} />
                }

<br />

                {date && <>
                    <button className="bg-[#2b3440] hover:bg-[#0f1a29] text-white font-bold py-2 px-4 rounded w-full" onClick={() => document.getElementById('my_modal_3').showModal()}>Booking Summery</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">

                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>

                            <img src={image1} alt="" />
                            <h3 className="font-bold text-lg">{room_description}</h3>
                            <p className="py-4">{price_per_night}</p>
                        </div>
                    </dialog>
                </>}


                {date ? <div className="card-actions justify-center mt-4">
                    <button className=" bg-[#2b3440] hover:bg-[#0f1a29] text-white font-bold py-2 px-4 rounded w-full " onClick={handleMyBooking}>{availability === "available" ? "Book Now" : "Not available"}</button>
                </div> : <button className='bg-[#2b3440] hover:bg-[#0f1a29] text-white font-bold py-2 px-4 rounded'>Please Select Date</button> }

            </div>

        </div>
    );
};

export default RoomDetails;