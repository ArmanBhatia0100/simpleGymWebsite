import Navbar from "./Navbar";
const Header = ()=>{
    return <div className="bg-[url('public/Desktop-banner.jpg')] bg-cover min-w-full min-h-screen">
          {/* <div className="bg-zinc-900 bg-opacity-75 min-w-full min-h-screen overlay"></div> */}

         <header>
        {/*  Navbar */}
        <Navbar />
      </header>

      <main className="pl-28">
        <div className="m-0 mt-14 mb-10 p-0 container title">
          <h1 className="p-0 font-bold text-[#EAEAEA] text-[150px] leading-none">
            Be
          </h1>
          <h1 className="font-bold text-[#AF1E1E text-[#AF1E1E] text-[150px] leading-none">
            Focused
          </h1>
        </div>
        <div className="mb-16 container subPara">
          <p className="font-extrabold text-[#EAEAEA] text-2xl leading-10">
            To enjoy the power <br></br>
            and feel the vibe.
          </p>
        </div>
        <button type="button" className="bg-[#EAEAEA] hover:bg-[#AF1E1E] rounded-md w-40 h-16 font-semibold text-lg hover:text-[#EAEAEA]">
          Start the workout
          {/* Add tailwind button */}
        </button>
      </main>   
    </div>
}

export default Header;