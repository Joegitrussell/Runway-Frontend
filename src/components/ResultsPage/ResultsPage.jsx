import { useStore } from "@nanostores/react";
import { budgetStore } from "../../store/runwayStore.js";

export default function ResultsPage() {
  return (
    <>
      <h1>Trips that fit!</h1>
      <h2>Your budget is: {budget}</h2>
    </>
  );
}
