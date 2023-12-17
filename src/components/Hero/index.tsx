import React from "react";

export default function Hero() {
  return (
    <div className="hero min-h-fit bg-base-100 py-20">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl">
        <div className="">
          &nbsp;
          {/* <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          /> */}
        </div>
        <div className="w-3/3 justify-center">
          <h1 className="text-5xl font-bold">Hei.. Viktor's back!</h1>
          <p className="py-6">
            Website portfolio sekaligus blog pribadi saya hehe :D
          </p>
          <button className="btn bg-base-200">Coming soon...</button>
        </div>
      </div>
    </div>
  );
}
