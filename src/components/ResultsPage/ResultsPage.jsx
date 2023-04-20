import { locations } from "../../data/locationData.js";
import Paris from "../../assets/images/paris.jpg"

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

  const stayDuration = calculateStayDuration(budget);

  return (
    <>
      <h1>Trips that fit!</h1>
      <h2>Your budget is: {budget}</h2>
      {Object.entries(locations).map(([location, image]) => (
        <div key={location} className="card card-compact w-96 bg-base-100 shadow-xl">
          <h3 className="card-title">{location}</h3>
          <img src={image.url} alt="test" />
          <ul className="card-actions justify-end">
            <li>Base: {stayDuration[location].base} days</li>
            <li>Mid: {stayDuration[location].mid} days</li>
            <li>Peak: {stayDuration[location].peak} days</li>
          </ul>
        </div>
      ))}
    </>
  );
}
