import React from 'react';

const Loader = () => {

    return (
        <>
        <div className='bg-white h-screen w-screen z-50'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div id="loader relative">
  <div id="shadow"></div>
  <div id="box"></div>
<p className='absolute top-0 left-3/4 transform -translate-x-1/2 -translate-y-1/2'>Loadding...</p>
</div>
            </div>
        </div>
        </>
    )
}

export default Loader;