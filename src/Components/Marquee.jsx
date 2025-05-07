import React from "react";

const Marquee = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <marquee behavior="scroll" direction="left" scrollamount="6">
          <ul className="flex gap-8 text-white text-lg font-orbitron uppercase  to-black py-2 px-4 whitespace-nowrap">
            <li>Game Portal</li>
            <li>Video Games</li>
            <li>Gamers</li>
            <li>Game Theme</li>
            <li>Match</li>
            <li>Esports</li>
            <li>Live Streams</li>
            <li>Leaderboards</li>
          </ul>
        </marquee>
      </div>
    </>
  );
};

export default Marquee;
