import { useState } from "react";
import { locations } from "../../data/locationData.js";

export default function ResultsPage() {
  const budget = parseInt(localStorage.getItem("budget"));
  const [stayDuration, setStayDuration] = useState({});

  return (
    <>
      <h1>Trips that fit!</h1>
      <h2>Your budget is: {budget}</h2>
      <div className="flex flex-wrap justify-center">
        {locations.map((location) => (
          <div
            key={location.name}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2"
          >
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <h2 className="card-title">{location.name}</h2>
              <div className="relative">
                <figure>
                  <img
                    src={location.url}
                    alt={location.name}
                    className="object-cover w-full"
                  />
                </figure>
                {stayDuration[location.name] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white px-2 py-1">
                    <div className="flex flex-col items-center justify-center text-center">
                      <div className="text-7xl">
                        {Math.round(
                          budget / stayDuration[location.name].selected
                        )}
                      </div>
                      <div>Days</div>
                    </div>
                  </div>
                )}
              </div>
              <div className="card-body">
                <div className="card-actions justify-end">
                  <input
                    type="range"
                    min={location.base}
                    max={location.peak}
                    value={
                      stayDuration[location.name]?.selected || location.mid
                    }
                    className="range"
                    step={location.base / 2}
                    onChange={(event) =>
                      handleSliderChange(event, location.name)
                    }
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
