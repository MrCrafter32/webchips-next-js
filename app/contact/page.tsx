import { FormContact } from '@/components/ui/formcontact';

const page = () => {

  
  return (
    <>
      <div className="bg-white flex justify-center">
        <div className="form bg-[#f0f0f0f0] w-1/2 rounded-3xl  my-10 shadow-xl">
          <div className="items-center justify-center px-5 py-5">
         <FormContact />
         </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl font-bold text-white pt-3">
          Or you can reach us at
        </p>
        <p className="text-2xl font-bold text-white pt-3">
          
        </p>
      </div>

    </>
  );
};

export default page;
