import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='bg-gray text-center fs-1'>
            <h3>Page Not Found</h3>
            <Link to='/'>Go  Home</Link>
        </div>
    );
};

export default NotFound;