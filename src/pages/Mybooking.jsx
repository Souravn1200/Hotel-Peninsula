import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import Pagetitle from '../components/Pagetitle';

const Mybooking = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [myBookings, setMyBookings] = useState([]);
  console.log(myBookings);
  useEffect(() => {


      axios.get(`http://localhost:5000/mybooking?email=${email}`,{withCredentials: true})
      .then(res => {
        setMyBookings(res.data)
        console.log(res.data);
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
   
  }, [user, email]);


  const handleDelete = _id => {

    swal({
      title: "Are you sure?",
      text: "Our reservations are hard to get!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {

      if(willDelete){
        fetch(`http://localhost:5000/deletebooking/${_id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            swal("Poof! Order has been deleted!", {
              icon: "success",
            });
          }
          const remaing = myBookings.filter(del => del._id !== _id)
          setMyBookings(remaing)
        })
      }

    })

   
  }



  return (
   <div>
     <div> <Pagetitle title={'My Booking'}></Pagetitle> </div>
    <div className="grid grid-cols-2 ml-28 gap-4 mb-5">
       
  {myBookings?.length ? (
    myBookings.map(book => (
      <div key={book._id}>
        <div className="card w-96 bg-slate-700">
          <figure className='mt-8'><img  src={book.image1} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-white">{book.room_description}</h2>
            <p className='text-white'>Booking date: {book.date}</p>
        <p className='text-white'>Price: {book.price_per_night}$</p>

            <div className='flex justify-around gap-10 mt-5'>
            <div className="card-actions justify-start">

       

          <Link to={`/update/${book._id}`}> <button className="btn btn-accent ">Update Date</button> </Link>

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
    <p className="mt-5 text-center text-2xl mx-auto w-[900px] font-serif ml-32">No Bookings available.</p>

  )}
</div>
   </div>

  );
};

export default Mybooking;
