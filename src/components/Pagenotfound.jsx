import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="text-3xl font-semibold text-gray-700 mb-4">Page not found</p>
        <p className="text-lg text-gray-600">
          Sorry, the page you are looking for might be in another castle.
        </p>

        <NavLink to='/' className='my-9 text-blue-700'>Go Back</NavLink>
      </div>
    </div>
    );
};

export default PageNotFound;