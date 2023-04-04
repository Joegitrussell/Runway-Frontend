import { useStore } from "@nanostores/react";
import { budgetStore } from "../../store/runwayStore.js";

export default function ResultsPage() {
  const budget = useStore(budgetStore);
  console.log("BudgetResults:", budgetStore);

  const clickMe = () => {
    console.log("Budget: ", budgetStore.value);
  };

  return (
    <>
      <h1>Trips that fit!</h1>
      <h2>Your budget is: {budgetStore.value}</h2>
      <button onClick={clickMe}>click on me</button>
    </>
  );
}
