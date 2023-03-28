import Runway from "../../assets/images/RunWay.png";
import { useState } from "react";

export default function BudgetPage() {
  
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h2 className="text-5xl col text-black font-bold">What's your budget?</h2>
      <input 
        className="bg-white text-black rounded-md w-64 h-10 p-2" 
        type="text" 
        placeholder="£3000"
      />
      <h2 className="text-5xl text-black font-bold">And comfort level?</h2>
      <div id="comfort-level" className="flex flex-col gap-3">
        <div id="base-level" className="flex gap-5 bg-white p-2 rounded-md w-64 h-10 justify-between text-black">
          <button className="">Base</button>
          <div className="flex items-center">
            <span className="mx-auto">Ultra Affordable</span>
          </div>
        </div>
        <div id="base-level" className="flex gap-5 bg-white p-2 rounded-md w-64 h-10 justify-between text-black">
          <button className="">Mid</button>
          <div className="flex items-center">
            <span className="mx-auto">Greater Variety</span>
          </div>
        </div>
        <div id="base-level" className="flex gap-5 bg-white p-2 rounded-md w-64 h-10 justify-between text-black">
          <button className="bg-colourchange">Peak</button>
          <div className="flex items-center">
            <span className="mx-auto">Indulge Yourself</span>
          </div>
        </div>
      </div>
    </div>
  )
}
