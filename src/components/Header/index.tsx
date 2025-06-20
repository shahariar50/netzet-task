import NavBar from "./NavBar";
import Offer from "./Offer";

const Header = () => {
  return (
    <div>
      <Offer />
      <div className="mt-4 lg:mt-9">
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
