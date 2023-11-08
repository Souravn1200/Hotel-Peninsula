import { key } from 'localforage';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Mytoast from '../components/Mytoast';

const Update = () => {

    const oldData = useLoaderData();
    const {date, _id} = oldData;

    const [showToast, setShowToast] = useState(false);

    const handleShowToast = () => {
        setShowToast(true)

    }

    const handleCloseToast = () => {
        setShowToast(false)
    }
    
    const handleUpdate = e => {

        e.preventDefault();
        const form = e.target;
        const newDate =  form.date.value
        const data =  {newDate}

        fetch(`http://localhost:5000/update/${_id}`, {

            method : 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {console.log(result)})
        
    }

    return (
        <div>
            <form onSubmit={handleUpdate} className="text-center h-[50vh] bg-slate-300 flex flex-col items-center justify-center">
                <p className="mb-5 underline">Update your booking date</p>
                <input name="date"  className="p-5 rounded-xl" type="date" defaultValue={date} />
                <input onClick={handleShowToast} type="submit" className="btn btn-neutral mt-5" value="Update date" />
            </form>

        <div>
        <Mytoast
                message="Update successful"
                showToast={showToast}
                onClose={handleCloseToast}
            />
        </div>
        </div>
    );
};

export default Update;