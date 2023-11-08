import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';

const Mybooking = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [myBookings, setMyBookings] = useState([]);
  
  useEffect(() => {
    if (user && email) {

      axios.get(`http://localhost:5000/mybooking/${email}`, {withCredentials: true})
      .then(res => {
        setMyBookings(res.data)
      })
      
      // fetch(`http://localhost:5000/mybooking/${email}`, {
      //   method: 'GET'
      // })
      // .then(res => res.json())
      // .then(data => {
      //   // console.log(data);
      //   setMyBookings(data);
      // })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }
  }, [user]);


  const handleDelete = _id => {
    fetch(`http://localhost:5000/deletebooking/${_id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      const remaing = myBookings.filter(del => del._id !== _id)
      setMyBookings(remaing)
    })
  }



  return (
    <div className="grid grid-cols-2 ml-28 gap-4 mb-5">
  {myBookings?.length ? (
    myBookings.map(book => (
      <div key={book._id}>
        <div className="card w-96 bg-slate-700">
          <figure><img src={book.image1} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-white">{book.room_description}</h2>
            <div className='flex justify-around gap-10 mt-5'>
            <div className="card-actions justify-start">
              <button className="btn btn-accent ">Buy Now</button>
            </div>
            <div className="card-actions justify-end ">
              <button className="btn btn-primary bg-[#2b3440] hover:bg-[#2b3440]" onClick={() => handleDelete(book._id)}>Delete</button>
            </div>
            </div>
            
            
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className='mt-5 text-center text-2xl'>No Bookings available.</p>
  )}
</div>

  );
};

export default Mybooking;
