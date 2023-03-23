import Navbar from "../Navbar/Navbar";
import Runway from "../../assets/images/RunWay.png";


export default function BudgetPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <img src={Runway} alt="runway-header" className="w-3/4 mt-6" /> 
      <h2>What's your budget?</h2>
      <input type="text" placeholder="£3000"/>
      <h2>And comfort level?</h2>
    </div>
  )
}
