const nav = () => {
  return (
    

<div className="bg-[#2A2A2A]">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center space-x-1 rtl:space-x-reverse">
       <p className="text-[#FFFFFF] text-3xl">Web</p>
       <p className="text-[#FF7A00] text-3xl">Chips</p>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full  md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-row space-x-8 text-xl text-[#FFFFFF]">
        <li>
          <a href="/">
          <p>Home</p>
          </a>
        </li>
        <li>
          <a href="/services">
          <p>Our Services</p>
          </a>
        </li>
        <li>
          <a href="/portfolio">
          <p>Portfolio</p>
          </a>
        </li>
        <li>
          <a href="/about">
          <p>About</p>
          </a>
        </li>
        <li>
          <a href="/contact">
          <p>Contact</p>
          </a>
        </li>    
      </ul>
    </div>
  </div>
</div>

  )
}

export default nav