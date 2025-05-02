import React from 'react';

const Loader = () => {
    return (
        <div className='w-full h-[80vh] flex items-center justify-center'>
            <span className="loading loading-ring loading-xl"></span>
        </div>
    );
};

export default Loader;