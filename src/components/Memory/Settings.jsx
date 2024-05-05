import { useStoreMode, useStoreShop } from "@/store/memory.store";
import { Settings } from "lucide-react";
import { buttonVariants } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { ItemShop } from "./ItemShop";

export const SettingsModale = () => {
  const { shopItems, changeItems } = useStoreShop();
  const { actifMode, setActifMode } = useStoreMode();
  const handleClickMode = (nbMode) => {
    setActifMode(nbMode);
  };
  return (
    <Dialog>
      <DialogTrigger
        className={buttonVariants({ variant: "outline", size: "icon" })}
      >
        {" "}
        <Settings className="h-4 w-4" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Paramètres</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <p>Difficulter:</p>
          <div className="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">
            <button
              onClick={() => handleClickMode(0)}
              className={`inline-block rounded-md px-4 py-2 text-sm  ${
                actifMode === 0
                  ? "text-white bg-primary shadow-sm"
                  : "text-gray-500 hover:text-gray-700 focus:relative"
              }`}
            >
              Facile
            </button>
            <button
              onClick={() => handleClickMode(1)}
              className={`inline-block rounded-md px-4 py-2 text-sm  ${
                actifMode === 1
                  ? "text-white bg-primary shadow-sm"
                  : "text-gray-500 hover:text-gray-700 focus:relative"
              }`}
            >
              Normal
            </button>
            <button
              onClick={() => handleClickMode(2)}
              className={`inline-block rounded-md px-4 py-2 text-sm  ${
                actifMode === 2
                  ? "text-white bg-primary shadow-sm"
                  : "text-gray-500 hover:text-gray-700 focus:relative"
              }`}
            >
              Difficile
            </button>
          </div>
        </div>
        <div className="">
          <p>Image:</p>
          <ScrollArea className="w-full">
            <div className="grid grid-cols-7 gap-2">
              {shopItems.map((item, index) => (
                <ItemShop
                  key={index}
                  img={item.img}
                  imgAlt={item.type}
                  isActive={item.isActive}
                  onChangeItems={changeItems}
                />
              ))}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};
