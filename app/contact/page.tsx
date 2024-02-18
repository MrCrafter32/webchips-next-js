import { FormContact } from '@/components/ui/formcontact';
<<<<<<< HEAD
import React from 'react';
=======
import { Instagram } from 'lucide-react';
>>>>>>> 529f7a8b38edecd254d6b9850a925a3aaff0dbf1

const page = () => {

  
  return (
    <>
      <div className="bg-white flex justify-center">
        <div className="form bg-[#f0f0f0f0] w-1/2 rounded-3xl  my-10 shadow-xl">
          <div className="items-center justify-center px-5 py-5">5
         <FormContact />
         </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl font-bold text-white pt-3">
          Or you can reach us at
        </p>
        <Instagram size={32} /> 
      </div>

    </>
  );
};

export default page;
