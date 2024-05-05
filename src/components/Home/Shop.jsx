import { useStoreShop } from "@/store/memory.store";
import { ItemShop } from "../Memory/ItemShop";
import { buttonVariants } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export const Shop = () => {
  const { shopItems, changeItems } = useStoreShop();
  return (
    <>
      <Sheet>
        <SheetTrigger className={buttonVariants({ variant: "shadow" })}>
          SHOP
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Shop</SheetTitle>
          </SheetHeader>
          <ScrollArea className="h-full">
            <div className="grid grid-cols-2 gap-4">
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
        </SheetContent>
      </Sheet>
    </>
  );
};
