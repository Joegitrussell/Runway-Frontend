import { useState } from "react";
import { locations } from "../../data/locationData.js";
import Paris from "../../assets/images/paris.jpg";
export default function ResultsPage() {
  const budget = parseInt(localStorage.getItem("budget"));
  const calculateStayDuration = (budget) => {
    const stayDuration = {};
    Object.keys(locations).forEach((location) => {
      stayDuration[location] = {
        base: Math.floor(budget / locations[location].base),
        mid: Math.floor(budget / locations[location].mid),
        peak: Math.floor(budget / locations[location].peak),
        // selected: Math.floor(budget / locations[location].base)
      };
    });
    return stayDuration;
  };
  const [stayDuration, setStayDuration] = useState(calculateStayDuration(budget));
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
      {Object.entries(locations).map(([location, image]) => (
        <div className="container mx-auto">
          <div key={location} className="card card-compact w-96 bg-base-100 shadow-xl">
            <h3 className="card-title">{location}</h3>
            <img src={image.url} alt={location} />
            <ul className="card-actions justify-end">
              <li>Base: {stayDuration[location].base} days</li>
              <li>Mid: {stayDuration[location].mid} days</li>
              <li>Peak: {stayDuration[location].peak} days</li>
            </ul>
            <div className="mt-4">
              <input
                type="range"
                min="0"
                max={budget}
                value={stayDuration[location].selected}
                className="range"
                step={locations[location].base}
                onChange={(event) => handleSliderChange(event, location)}
              />
              <div className="w-full flex justify-between text-xs px-2">
                <span>{stayDuration[location].base}</span>
                <span>{stayDuration[location].mid}</span>
                <span>{stayDuration[location].peak}</span>
              </div>
              <div className="mt-2">Selected: {stayDuration[location].selected} days</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
