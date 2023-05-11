import { useState, useEffect } from "react";
import { locations } from "../../data/locationData.js";

export default function ResultsPage() {
  const budget = parseInt(localStorage.getItem("budget"));

  const calculateStayDuration = (budget) => {
    const stayDuration = {};
    Object.keys(locations).forEach((location) => {
      stayDuration[location] = {
        base: Math.floor(budget / locations[location].base),
        mid: Math.floor(budget / locations[location].mid),
        peak: Math.floor(budget / locations[location].peak),
      };
    });
    return stayDuration;
  };

  const [stayDuration, setStayDuration] = useState({});

  useEffect(() => {
    setStayDuration(calculateStayDuration(budget));
  }, [budget]);

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
      <h2>Your budget is: {budget}</h2>
      <div className="flex flex-wrap justify-center">
        {Object.entries(locations).map(([location, data]) => (
          <div key={location} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <h2 className="card-title">{location}</h2>
              <div className="relative">
                    <figure>
                      <img src={data.url} alt={location} className="object-cover w-full" />
                    </figure>
                    {stayDuration[location] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white px-2 py-1">
                        <div className="flex flex-col items-center justify-center text-center">
                          <div className="text-7xl">
                            {stayDuration[location].selected}
                          </div>
                          <div>
                            Days
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
              <div className="card-body">
                {/* <h2 className="card-title">{location}</h2> */}
                {stayDuration[location] && <div>Base: {stayDuration[location].base} days</div>}
                <div className="card-actions justify-end">
                  <input
                    type="range"
                    min="0"
                    max={budget}
                    value={stayDuration[location]?.selected || 0}
                    className="range"
                    step={data.base}
                    onChange={(event) => handleSliderChange(event, location)}
                  />
                  <div className="w-full flex justify-between text-xs px-2">
                    <span>{stayDuration[location]?.base}</span>
                    <span>{stayDuration[location]?.mid}</span>
                    <span>{stayDuration[location]?.peak}</span>
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