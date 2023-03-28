import { atom } from "nanostores";

export const budgetStore = atom("");

export function addBudget(budget) {
  budgetStore.set(budget);
  console.log("added budget: ", budgetStore.get());
}
