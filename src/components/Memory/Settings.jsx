import { useStoreShop } from "@/store/memory.store";
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
            <button className="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
              Facile
            </button>
            <button className="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
              Normal
            </button>
            <button className="inline-block rounded-md bg-primary px-4 py-2 text-sm text-white shadow-sm focus:relative">
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
