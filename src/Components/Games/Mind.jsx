import React, { useEffect, useState } from 'react'
import { mindGames } from "../../API/API";
import { useNavigate} from 'react-router-dom'
const Mind= () => {
  const [data, setdata] = useState([])
  const navigate = useNavigate()
        const fetchData = async()=>{
            const games = await mindGames()
            setdata(games)
        }
        useEffect(() => {
          fetchData()
        }, [])
        const backHandeling = ()=>{
          navigate('/home')
      }
  return (
   <>
   <div className='h-auto w-full bg-black text-white p-8'>
   <div className='flex justify-between items-center'>
            <h1 className="border-l-4 border-orange-500 text-xl md:text-2xl pl-4 py-2 font-orbitron">
            Mind
          </h1>
          <button className='bg-orange-500 px-3 py-1' onClick={backHandeling}>Back</button>
          </div>
          <div id='cardsec' className=' flex flex-wrap items-center justify-center gap-10 mt-10'>
            {data.map((e)=>{
              return  <div className="h-[450px] w-full max-w-[300px]  bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1c] to-[#2a2a2a] shadow-lg hover:shadow-orange-500/30 transition duration-300 transform hover:-translate-y-2 border border-gray-700 overflow-hidden">
                {/* Image */}
                <div className="relative h-[60%]">
                  <img
                    src={e.thumbnail}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-sm font-semibold px-2 py-1">
                    {e.game_name}
                  </div>
                </div>
  
                {/* Description + Button */}
                <div className="p-3 flex flex-col justify-between h-[40%]">
                  <div className="text-gray-300 text-sm h-[100px] line-clamp-3">
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
            })}
          
          </div>
    </div>
   </>
  )
}

export default Mind
