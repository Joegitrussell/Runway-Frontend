import Navbar from "../Navbar/Navbar";
import landingPageImage from "../../assets/images/RunWay_ob1.png";
import Runway from "../../assets/images/RunWay.png";

export default function LandingPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <img src={Runway} alt="runway-header" className="w-3/4 mt-6" />
      <img
        src={landingPageImage}
        alt="animated man and globe"
        className="w-96 h-96 object-cover rounded-md mb-6"
      />
      <p className="text-lg text-center text-gray-700 mb-6 font-sans-serif font-bold italic subpixel-antialiased">
        Welcome to Runway! Ready to travel smarter, not harder? Tell us your
        travel budget and we'll show you where you can go. Let's explore!
      </p>
      <button className="btn mb-20">Prepare for takeoff!</button>
    </div>
  );
}
