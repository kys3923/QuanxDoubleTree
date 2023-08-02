import Reservation from "./sections/Reservation";
import JoinForFree from "./sections/JoinForFree";
import Hero from './sections/Hero'
import DiscoverSomewhere from "./sections/DiscorverSomewhere";
import Experience from "./sections/Experience";
import Inspiration from "./sections/Inspiration";
import Amenities from "./sections/Amenities";
import Cookies from "./sections/Cookies";
import GetSocial from "./sections/GetSocial";
import Tutorial from "./sections/Tutorial";

const Landing = (props) => {
  return (
    <div className="h-full">
      <div className="px-8">
        <Reservation />
      </div>
      <div className="sm:text-center my-4">
        <JoinForFree />
      </div>
      <div className="sm:h-[70vh]">
        <Hero />
      </div>
      <div>
        <DiscoverSomewhere />
        <Experience />
        <Inspiration />
        <Amenities />
        <Cookies />
      </div>
      <div>
        <GetSocial />
      </div>
      <div className="pt-48">
        <Tutorial />
      </div>
    </div>
  );
}
export default Landing;