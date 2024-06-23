import Image from "next/image";

export default function Blog() {
  return (
    <div className="flex flex-col items-center">
      <div className="m-6 h-[200px] w-[1200px] text-center rounded-lg border-2 shadow-lg shadow-indigo-500/40 bg-gray-100 hover:bg-gray-200 p-3">  
        <div className="flex flex-wrap">
          <img
            alt="test" 
            src="https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-1/376039220_6957587040966837_3270528419543465325_n.jpg?stp=dst-jpg_p160x160&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFUhp2tRZmyWur0uyccx7un9w3m4vaKpmr3Debi9oqmanr_gxzVJX9GM8kTOup5Lpjwoaoy_CU2YsfEO1YgvEB1&_nc_ohc=CQaN3JiHZQEQ7kNvgHm8l6E&_nc_ht=scontent-bkk1-2.xx&oh=00_AYCpT5g0b3qxVyGikqYoi_sBGS9QoHhbs75D2AKQPSXitg&oe=667C5342" 
            className="rounded-full h-12 w-12"
          />
          <div className="flex flex-col pl-5 text-left">
            <p className="text-lg font-extrabold">John Kung</p>
            <p>Jun 20</p>
          </div>
        </div>
        <div className="pl-20">
          <div className="text-black text-4xl font-extrabold align-baseline text-left">I want to sleep right now</div>
          <div className="text-yellow-600 text-lg">
            <div className="flex flex-wrap">
              <p className="mr-3">#Begin</p>
              <p className="mr-3">#New</p>
              <p className="mr-3">#Tutorials</p>
            </div>
          </div>
          <div className="flex space-x-3.5 justify-between mt-3 p-2">
            <div className="flex">
              <p className="mr-4">4 reactions</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
              </svg>
              <p>4 Comments</p>
            </div>
            <div className="flex">
              <p className="mr-2">4 mins read</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="m-6 h-[200px] w-[1200px] text-center rounded-lg border-2 shadow-lg shadow-indigo-500/40 bg-gray-100 hover:bg-gray-200 p-3">  
        <div className="flex flex-wrap">
          <img
            alt="test" 
            src="https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-1/376039220_6957587040966837_3270528419543465325_n.jpg?stp=dst-jpg_p160x160&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFUhp2tRZmyWur0uyccx7un9w3m4vaKpmr3Debi9oqmanr_gxzVJX9GM8kTOup5Lpjwoaoy_CU2YsfEO1YgvEB1&_nc_ohc=CQaN3JiHZQEQ7kNvgHm8l6E&_nc_ht=scontent-bkk1-2.xx&oh=00_AYCpT5g0b3qxVyGikqYoi_sBGS9QoHhbs75D2AKQPSXitg&oe=667C5342" 
            className="rounded-full h-12 w-12"
          />
          <div className="flex flex-col pl-5 text-left">
            <p className="text-lg font-extrabold">John Kung</p>
            <p>Jun 20</p>
          </div>
        </div>
        <div className="pl-20">
          <div className="text-black text-4xl font-extrabold align-baseline text-left">I want to sleep right now</div>
          <div className="text-yellow-600 text-lg">
            <div className="flex flex-wrap">
              <p className="mr-3">#Begin</p>
              <p className="mr-3">#New</p>
              <p className="mr-3">#Tutorials</p>
            </div>
          </div>
          <div className="flex space-x-3.5 justify-between mt-3 p-2">
            <div className="flex">
              <p className="mr-4">4 reactions</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
              </svg>
              <p>4 Comments</p>
            </div>
            <div className="flex">
              <p className="mr-2">4 mins read</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="m-6 h-[200px] w-[1200px] text-center rounded-lg border-2 shadow-lg shadow-indigo-500/40 bg-gray-100 hover:bg-gray-200 p-3">  
        <div className="flex flex-wrap">
          <img
            alt="test" 
            src="https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-1/376039220_6957587040966837_3270528419543465325_n.jpg?stp=dst-jpg_p160x160&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFUhp2tRZmyWur0uyccx7un9w3m4vaKpmr3Debi9oqmanr_gxzVJX9GM8kTOup5Lpjwoaoy_CU2YsfEO1YgvEB1&_nc_ohc=CQaN3JiHZQEQ7kNvgHm8l6E&_nc_ht=scontent-bkk1-2.xx&oh=00_AYCpT5g0b3qxVyGikqYoi_sBGS9QoHhbs75D2AKQPSXitg&oe=667C5342" 
            className="rounded-full h-12 w-12"
          />
          <div className="flex flex-col pl-5 text-left">
            <p className="text-lg font-extrabold">John Kung</p>
            <p>Jun 20</p>
          </div>
        </div>
        <div className="pl-20">
          <div className="text-black text-4xl font-extrabold align-baseline text-left">I want to sleep right now</div>
          <div className="text-yellow-600 text-lg">
            <div className="flex flex-wrap">
              <p className="mr-3">#Begin</p>
              <p className="mr-3">#New</p>
              <p className="mr-3">#Tutorials</p>
            </div>
          </div>
          <div className="flex space-x-3.5 justify-between mt-3 p-2">
            <div className="flex">
              <p className="mr-4">4 reactions</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
              </svg>
              <p>4 Comments</p>
            </div>
            <div className="flex">
              <p className="mr-2">4 mins read</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
