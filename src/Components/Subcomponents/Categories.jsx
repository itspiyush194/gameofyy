import React, { useState } from "react";
import {X} from 'lucide-react'
import { useNavigate } from "react-router-dom";
const Categories = () => {
    const [menu, setmenu] = useState(false)
    const toggleMenu = ()=>{
         setmenu(!menu)
    }
const navigate = useNavigate()
const navigateAction= ()=>{
    navigate('/action')
}
const navigateAdventure= ()=>{
  navigate('/adventure')
}
const navigateFunny= ()=>{
  navigate('/funny')
}
const navigateMind= ()=>{
  navigate('/mind')
}
const navigatePuzzle= ()=>{
  navigate('/puzzle')
}
  return (
  
    <>
      <div>
        <button onClick={toggleMenu} className="w-[200px] h-[40px] flex items-center justify-left text-xl">
            {menu ?<X />: <h1 className="font-orbitron hover:underline text-sm md:text-xl">Game Categories</h1>}
        </button>
       {menu &&(
          <div className="h-[80vh] w-[60%] md:w-[350px] text-black  bg-white md:bg-opacity-40 absolute left-2 top-[90px] rounded-lg p-10 ">
             <ul>
                <li className="text-xl p-4 rounded-md  hover:bg-orange-500 hover:bg-opacity-70 hover:cursor-pointer" onClick={navigateAction}>Action</li>
                <li className="text-xl p-4 rounded-md  hover:bg-orange-500 hover:bg-opacity-70 hover:cursor-pointer" onClick={navigateAdventure}>Adventure</li>
                <li className="text-xl p-4 rounded-md  hover:bg-orange-500 hover:bg-opacity-70 hover:cursor-pointer" onClick={navigateFunny}>Funny</li>
                <li className="text-xl p-4 rounded-md  hover:bg-orange-500 hover:bg-opacity-70 hover:cursor-pointer" onClick={navigateMind}>Mind Games</li>
                <li className="text-xl p-4 rounded-md  hover:bg-orange-500 hover:bg-opacity-70 hover:cursor-pointer" onClick={navigatePuzzle}>Puzzle</li>
             </ul>
          </div>
       )}
      </div>
    </>
  );
};

export default Categories;
