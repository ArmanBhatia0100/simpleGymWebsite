function App() {
  return (
    <>
      <div className="bg-[url('public/Desktop-banner.jpg')] bg-cover min-h-screen container">
        <div className="fixed bg-zinc-900 bg-opacity-75 min-w-full min-h-full overlay">
          <header>

         

{/*  Navbar */}
            <nav class="">
              <div class="flex flex-wrap justify-between items-center mx-auto p-4 max-w-screen-xl">
                  <span class="font-semibold text-2xl dark:text-white whitespace-nowrap self-center">
                    GYM
                  </span>
        
                <div class="flex space-x-3 md:space-x-0 rtl:space-x-reverse md:order-2">
                  <button
                    type="button"
                    class="bg-blue-700 hover:bg-blue-800 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:bg-blue-600 px-4 py-2 rounded-lg font-medium text-center text-sm dark:focus:ring-blue-800"
                  >
                    Get started
                  </button>
                  <button
                    data-collapse-toggle="navbar-cta"
                    type="button"
                    class="inline-flex justify-center items-center md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg w-10 h-10 text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
                    aria-controls="navbar-cta"
                    aria-expanded="false"
                  >
                    <span class="sr-only">Open main menu</span>
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  class="md:flex justify-between items-center md:order-1 hidden w-full md:w-auto"
                  id="navbar-cta"
                >
                  <ul class="flex md:flex-row flex-col md:space-x-8 rtl:space-x-reverse border-gray-100 md:border-0 dark:border-gray-700 bg-gray-50 md:bg-white md:dark:bg-gray-900 dark:bg-gray-800 mt-4 md:mt-0 p-4 md:p-0 border rounded-lg font-medium">
                    <li>
                      <a
                        href="#"
                        class="block bg-blue-700 md:bg-transparent px-3 py-2 md:p-0 rounded text-white md:text-blue-700 md:dark:text-blue-500"
                        aria-current="page"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block dark:border-gray-700 md:hover:bg-transparent md:dark:hover:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 md:p-0 rounded text-gray-900 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:text-white dark:text-white"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block dark:border-gray-700 md:hover:bg-transparent md:dark:hover:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 md:p-0 rounded text-gray-900 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:text-white dark:text-white"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block dark:border-gray-700 md:hover:bg-transparent md:dark:hover:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 md:p-0 rounded text-gray-900 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:text-white dark:text-white"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
          <main>
            <div className="container title">
              <h1 className="text-lg">Be</h1>
              <h1>Focused</h1>
            </div>
            <div className="container subPara">
              <p>
                To enjoy the power <br></br>
                and feel the vibe.
              </p>
            </div>
            <button>
              Start the workout
              {/* Add tailwind button */}
            </button>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
