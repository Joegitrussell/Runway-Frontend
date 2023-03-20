import Navbar from "../NavBar";
import landingPageImage from "../../assets/images/RunWay_ob1.png";

export default function LandingPage() {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
      <Navbar />
      <h1 className="text-4xl font-bold mb-6">RunWay</h1>
      <img src={landingPageImage} alt="animated man and globe" />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Prepare for takeoff!
      </button>
    </div>
  );
}
