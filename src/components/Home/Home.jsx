import Logo from "../../assets/Logo.png";
import { Menu } from "./Menu";

export const Home = () => {
  return (
    <div>
      <div className="w-full flex justify-center">
        <img className="w-80" src={Logo} alt="logo" />
      </div>
      <Menu />
    </div>
  );
};
