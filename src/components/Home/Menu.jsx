import { useStoreMode } from "@/store/memory.store";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Shop } from "./Shop";

export const modes = [
  { type: "Easy", value: 8 },
  { type: "Normal", value: 12 },
  { type: "Hard", value: 16 },
];

export const Menu = () => {
  const { actifMode, setActifMode } = useStoreMode();
  const handleClickMode = () => {
    setActifMode((currentMode) => {
      if (currentMode !== 2) return currentMode + 1;
      else return 0;
    });
  };
  return (
    <div className="flex flex-col gap-4 w-96 mx-auto">
      <Button variant="shadow" asChild>
        <Link to="/memory">JOUER</Link>
      </Button>
      <Button onClick={handleClickMode} variant="shadow">
        {modes[actifMode].type}
      </Button>
      <Shop />
    </div>
  );
};
