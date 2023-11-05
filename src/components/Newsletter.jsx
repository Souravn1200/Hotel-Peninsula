import React from 'react';

function Newsletter() {
  return (
    
    <div className='bg-blue-950 p-10 mt-10'>
         <h1 className="text-2xl mb-2 text-center text-white mt-2 font-serif">Newsletter</h1>
         <h1 className="text-md mb-6 text-center text-white mt-1 font-serif">Please Subscribe Us to get the news about the hotel </h1>
 <div className=" flex items-center justify-center ">
      <form className="bg-blue-100 p-8 rounded shadow-md w-80">
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Enter your email address
          </label>
          <input
            type="text"
            id="email"
            placeholder="username@site.com"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Subscribe</button>
      </form>
    </div>
    </div>
   
  );
}

export default Newsletter;
