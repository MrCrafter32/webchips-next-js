import React from 'react';
import Image from 'next/image';



const WebDev= () => {
    return (
        <div className="flex flex-col lg:flex-row ">
            <div className='flex flex-col bg-[#ffffff] justify-center text-center items-center px-6  rounded-xl mt-16 mx-10  '>
                <Image src='/webdevicon.svg' width={200} height={200} alt='webdev' className=' -mt-16' />
                <h1 className='text-[#ff7a00] text-2xl  font-extrabold'>Website <br/> Development</h1>
                <p className='text-[#000000] text-xl mt-8 mb-28'>Build your online presence <br /> with a website customized <br /> for your needs</p>
            </div>
            <div className='flex flex-col bg-[#ffffff] justify-center text-center items-center tm px-6 rounded-xl mt-16 mx-10'>
                <Image src='/webmaintain.svg' width={200} height={200} alt='webdev' className=' -mt-9 ' />
                <h1 className='text-[#ff7a00] text-2xl  font-extrabold '>Website <br/> Development</h1>
                <p className='text-[#000000] text-xl mt-8 mb-28'>Build your online presence <br /> with a website customized <br /> for your needs</p>
            </div>
            <div className='flex flex-col bg-[#ffffff] justify-center text-center items-center tm px-6 rounded-xl mt-16 mx-10'>
                <Image src='/emailmark.svg' width={200} height={200} alt='webdev' className=' -mt-14' />
                <h1 className='text-[#ff7a00] text-2xl  font-extrabold'>Website <br/> Development</h1>
                <p className='text-[#000000] text-xl mt-8 mb-28'>Build your online presence <br /> with a website customized <br /> for your needs</p>
            </div>
            <div className='flex flex-col bg-[#ffffff] justify-center text-center items-center tm px-6 rounded-xl mt-16 mx-10 '>
                <Image src='/webdevicon.svg' width={200} height={200} alt='webdev' className=' -mt-16' />
                <h1 className='text-[#ff7a00] text-2xl  font-extrabold'>Website <br/> Development</h1>
                <p className='text-[#000000] text-xl mt-8 mb-28'>Build your online presence <br /> with a website customized <br /> for your needs</p>
            </div>
        </div>
    );
};

export default WebDev;
