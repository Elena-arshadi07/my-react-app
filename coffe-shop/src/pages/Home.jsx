import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="bg-amber-50">

      <div className="bg-amber-700 text-amber-50 h-[400px] flex flex-col items-center justify-center text-center space-y-8">
        
        <h2 className="text-6xl font-bold text-stone-50 text-lg font-semibold">
          ☕ Welcome to Coffee Shop
        </h2>
        <br /><br /><br /><br />

        <p className="text-5x1 text-amber-50 text-lg font-semibold"><br /><br /><br /><br />
          Fresh Coffee • Cozy Place • Sweet Moments
        </p><br /><br /><br />

        
      </div>
      <div className="py-10">

        

      </div>

      <div className="py-14 text-center">

        <h2 className="text-4xl font-bold text-amber-900 text-lg font-semibold">
          Why Choose Us?
        </h2>
        <div className="flex justify-center">
        <p className="mt-6 max-w-2xl mx-auto text-amber-900 text-lg font-semibold leading-8"><br/><br/>
          We serve premium coffee made from carefully selected beans.
          Every cup is prepared with love to give you the best coffee experience.
        </p> 
        </div>
         <br/><br/>
<Link to="/products">
<button className="bg-amber-700 text-white text-amber-900 px-8 py-3 rounded-full hover:bg-amber-900 transition">
          Shop Now
        </button></Link><br/><br/><br/>

      </div>

    </div>
  );
}

export default Home;