import { useState, useEffect } from "react";
import { locations } from "../../data/locationData.js";

export default function ResultsPage() {
  const budget = parseInt(localStorage.getItem("budget"));

  const [stayDuration, setStayDuration] = useState({ selected: 0 });

  const handleSliderChange = (event, location) => {
    setStayDuration((prevState) => ({
      ...prevState,
      [location]: {
        ...prevState[location],
        selected: parseInt(event.target.value)
      }
    }));
  };

  return (
    <>
      <h1>Trips that fit!</h1>
      <h2 className="font-custom text-white">Your budget is: {budget}</h2>
      <div className="flex flex-wrap justify-center">
        {Object.entries(locations).map(([location, data]) => (
          <div key={location} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
            <div className="card lg:card-side bg-base-100 shadow-xl rounded-t-lg">
              <div className="relative">
                <figure className="rounded-tl-lg rounded-tr-lg overflow-hidden">
                  <img src={data.url} alt={location} className="object-cover w-full" />
                </figure>
                <div className="absolute top-0 left-0 p-4">
                  <h2
                    className="card-title f text-white font-custom"
                    style={{
                      position: "absolute",
                      width: "122px",
                      height: "29px",
                      left: "12px",
                      top: "8px",
                      fontWeight: 1000,
                      fontSize: "20px",
                      lineHeight: "29px",
                      color: "#FFFFFF",
                      textShadow: "4px 4px 4px #000000",
                      WebkitTextStroke: "1px #000000"
                    }}
                  >
                    {location}
                  </h2>
                </div>
                {stayDuration[location] && (
                  <div className="absolute inset-0 flex items-center justify-center  text-white px-2 py-1">
                    <div className="flex flex-col items-center justify-center text-center">
                      <div className="text-7xl" style={{fontWeight: 450, textShadow: "4px 4px 4px #000000", WebkitTextStroke: "1px #000000"}}>
                        {Math.round(budget / stayDuration[location].selected)}
                      </div>
                      <div style={{ fontWeight: 900,
                      fontSize: "20px", textShadow: "4px 4px 4px #000000", WebkitTextStroke: "1px #000000", lineHeight: "29px",}}>Days</div>
                    </div>
                  </div>
                )}
              </div>
              <div className="card-body">
                <div className="card-actions justify-end">
                  <input
                    type="range"
                    min={data.base}
                    max={data.peak}
                    value={stayDuration[location]?.selected || 0}
                    className="range"
                    step={data.base / 2}
                    onChange={(event) => handleSliderChange(event, location)}
                  />
                  <div className="w-full flex justify-between text-xs px-2">
                    <span>Base</span>
                    <span>Mid</span>
                    <span>Peak</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
