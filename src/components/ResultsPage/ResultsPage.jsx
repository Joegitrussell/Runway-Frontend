import { useStore } from "@nanostores/react";
import { budgetStore } from "../../runwayStore.js";

export default function ResultsPage() {
  const budget = useStore(budgetStore);
  console.log("Budget:", budget);

  return (
    <>
      <h1>Trips that fit!</h1>
      <h2>Your budget is: {budget}</h2>
    </>
  );
}
