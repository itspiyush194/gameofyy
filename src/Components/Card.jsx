import React, { useEffect, useState } from "react";
import axios from 'axios';

const Card = () => {
    const [data, setdata] = useState([])
    const fetchData = async()=>{
        try{
          const response = await axios('https://backend.playhives.com/game/categorywise')
          const allGames = Object.values(response.data.games).flat(); // ✅ Flatten all games
             setdata(allGames);
        }
        catch(error){
            console.log("unable to fetch data ",error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    
  return (
    <>
    {data.map((e)=>{
                     return <div
                     className="max-w-[300px] h-[400px] bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1c] to-[#2a2a2a] shadow-xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-[15px] flex flex-col justify-between border border-gray-700"
                     key={e.id}
                   >
                     {/* Image Section */}
                     <div className="relative h-[60%]">
                       <img
                         className="w-full h-full object-cover"
                         src={e.thumbnail}
                         alt={e.game_name}
                       />
                       <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-lg font-semibold px-3 py-1">
                         {e.game_name}
                       </div>
                     </div>
                   
                     {/* Description + Button */}
                     <div className="p-4 flex flex-col justify-between h-[40%]">
                       <div className=" p-3 mb-4 text-gray-300 text-sm leading-relaxed tracking-wide h-[100px] overflow-hidden line-clamp-4">
                         {e.description}
                       </div>
                   
                       <a
                         href={e.game_url}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="bg-orange-600 text-white py-2 px-4 text-sm font-semibold uppercase text-center hover:bg-orange-500 transition-colors duration-300"
                       >
                         Play Now
                       </a>
                     </div>
                   </div>
    })}
     

    </>
  );
};

export default Card;
