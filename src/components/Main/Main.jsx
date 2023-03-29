import React from 'react';
import Cards from '../Cards/Cards';
import Sidecart from '../Sidecart/Sidecart';

const Main = () => {
    return (
        <div className='flex p-5 mx-auto justify-center gap-5'>
            <Cards/>
            <Sidecart/>
        </div>
    );
};

export default Main;