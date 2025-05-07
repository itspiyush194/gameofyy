import React, { useEffect, useState } from "react";
import { puzzleGames } from "../../API/API";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Puzzle = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const games = await puzzleGames();
      setData(games);
    } catch (error) {
      console.log("Error! unable to fetch data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="py-4 px-2">
      <div className=" text-md mb-4 text-center animate-zoom-in-out origin-center text-orange-400">
        Swipe to explore →
      </div>
     <Swiper
  spaceBetween={10} 
  freeMode={true}
  pagination={{ clickable: true }}
  modules={[FreeMode, Pagination]}
  className="w-full"
  breakpoints={{
    0: {
      slidesPerView: 1,
      spaceBetween: 16, // Ensures spacing on mobile
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  }}
>

        {data.map((e, index) => (
          <SwiperSlide key={index}>
            <div className="h-[450px] w-full max-w-[300px] mx-auto bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1c] to-[#2a2a2a] shadow-lg hover:shadow-orange-500/30 transition duration-300 transform hover:-translate-y-2 border border-gray-700 overflow-hidden">
              {/* Image */}
              <div className="relative h-[60%]">
                <img
                  src={e.thumbnail}
                  alt={e.game_name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-sm font-semibold px-2 py-1">
                  {e.game_name}
                </div>
              </div>

              {/* Description + Button */}
              <div className="p-3 flex flex-col justify-between h-[40%]">
                <div className="text-gray-300 text-sm h-[100px]  line-clamp-3 ">
                  {e.description}
                </div>
                <a
                  href={e.game_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-600 text-white py-2 px-4 text-sm font-semibold uppercase text-center hover:bg-orange-500 transition-colors duration-300 mt-3"
                >
                  Play Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Puzzle;


