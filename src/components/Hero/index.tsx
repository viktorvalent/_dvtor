import React from "react";

export default function Hero() {
  return (
    <div className="hero min-h-fit bg-base-100 py-20">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl">
        <div className="w-1/3">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-2/3">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
