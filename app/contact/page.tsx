

const page = () => {

  
  return (
    <>
      <div className="bg-white flex justify-center">
        <div className="form bg-[#f0f0f0f0] w-1/2 rounded-3xl  my-10 shadow-xl">
          <form className="flex flex-col items-center justify-center">
            <p className="text-3xl font-bold text-black pt-3">
              Get in touch with us
            </p>
            <div className="flex flex-col items-center justify-center">
              <input
                className=" w-1/2 md:w-96 h-12 mt-10 mb-5 pl-5 rounded-md"
                type="text"
                placeholder="Name"
              />
              <input
                className=" w-1/2 md:w-96 h-12 mb-5 pl-5 rounded-md"
                type="text"
                placeholder="Email"
              />
              <input
                className=" w-1/2 md:w-96 h-12 mb-5 pl-5 rounded-md"
                type="text"
                placeholder="Phone"
              />
              <textarea
                className=" w-1/2 md:w-96 h-32 mb-5 pl-5 rounded-md"
                placeholder="Message"
              />
              <button
                className="md:w-96 h-12 mb-5 pl-5 rounded-md bg-[#000000] text-white"
                type="submit"
                
              >
                Submit
              </button>
            </div>
          </form>
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
