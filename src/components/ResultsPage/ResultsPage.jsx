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

  const stayDuration = calculateStayDuration(budget);

  return (
    <>
      <h1>Trips that fit!</h1>
      <h2>Your budget is: {budget}</h2>
      {Object.entries(locations).map(([location, prices]) => (
        <div key={location}>
          <h3>{location}</h3>
          <ul>
            <li>Base: {stayDuration[location].base} days</li>
            <li>Mid: {stayDuration[location].mid} days</li>
            <li>Peak: {stayDuration[location].peak} days</li>
          </ul>
        </div>
      ))}
    </>
  );
}
