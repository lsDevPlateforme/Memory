import { BarChart2, RotateCcwIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { Button } from "../ui/button";
import { HelpModal } from "./Help";
import { SettingsModale } from "./Settings";
export const NavBar = () => {
  return (
    <div className="bg-slate-100">
      <div className="flex w-96 mx-auto items-center justify-between mb-8">
        <div className="flex gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link to="/">
              <RotateCcwIcon className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="icon">
            <BarChart2 className="h-4 w-4" />
          </Button>
        </div>
        <div className="w-52 h-20">
          <img className="w-full h-full object-cover" src={Logo} alt="logo" />
        </div>
        <div className="flex gap-4">
          <HelpModal />
          <SettingsModale />
        </div>
      </div>
    </div>
  );
};
