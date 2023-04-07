import { useState } from "react";
// import Navbar from "../Navbar/Navbar";
import landingPageImage from "../../assets/images/RunWay_ob1.png";
import Runway from "../../assets/images/RunWay.png";

export default function LandingPage() {
  const [userBudget, setUserBudget] = useState("");

  const handleBudgetChange = (event) => {
    setUserBudget(parseInt(event.target.value));
  };

  const handleButtonClick = () => {
    const budgetValue = parseInt(userBudget);
    window.localStorage.setItem("budget", budgetValue);
    window.location.href = "/results";
  };

  return (
    <div className="flex flex-col justify-center items-center md:container d-mx-auto">
      {/* <Navbar /> */}
      <img src={Runway} alt="runway-header" className="w-3/4 mt-6" />

      <img
        src={landingPageImage}
        alt="animated man and globe"
        className="w-96 h-96 object-cover rounded-md mb-6"
      />

      <p className="text-lg text-center text-gray-700 mb-6 font-sans-serif font-bold italic subpixel-antialiased px-8 w-3/4">
        Welcome to Runway! Ready to travel smarter, not harder? Tell us your
        travel budget and we'll show you where you can go. Let's explore!
      </p>
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-3xl col text-black font-style: italic p-2">
          What's your budget?
        </h2>
        <input
          className="bg-white text-black rounded-lg w-64 h-12 p-2"
          type="text"
          placeholder="£"
          onChange={handleBudgetChange}
        />
        <button
          className="btn mb-20 bg-secondary text-black w-64 h-12 font-style: italic"
          onClick={handleButtonClick}
        >
          Prepare for takeoff!
        </button>
      </div>
    </div>
  );
}
