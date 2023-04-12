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
      {Object.entries(locations).map(([location, prices]) => (
        <div key={location} className="card card-compact w-96 bg-base-100 shadow-xl">
          <h3 className="card-title">{location}</h3>
          <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80" alt="test" />
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
