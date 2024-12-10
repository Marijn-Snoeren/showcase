'use client';

export default function Project1() {
  return (
    <div className="flex h-screen snap-start">
      <div className="bg-white flex-1 flex flex-col justify-between py-4 z-10">
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1722580629887-86861f85734e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Small Centered Image"
            className="w-1/3 aspect-9/14 object-cover"
          />
        </div>

        <div className="flex justify-between text-2xl font-semibold uppercase px-8">
          <span>Project</span>
          <span>01</span>
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1722580629887-86861f85734e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Full Height Image"
         className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}