import { useActiveItems, useStoreMode } from "@/store/memory.store";
import { useEffect, useMemo, useState } from "react";
import Confetti from "react-confetti";

const modes = [
  { type: "easy", value: 6 },
  { type: "normal", value: 12 },
  { type: "hard", value: 16 },
];

const names = [
  "Lucas",
  "Emma",
  "Léo",
  "Chloé",
  "Gabriel",
  "Alice",
  "Louis",
  "Léa",
  "Jules",
  "Mia",
  "Liam",
  "Zoé",
  "Hugo",
  "Inès",
  "Arthur",
  "Juliette",
];

const transformeArray = (nombre, multiple, array) => {
  const newArray = array.slice(0, nombre);
  const multipliedArray = [].concat(
    ...newArray.map((item) => Array(multiple).fill(item))
  );
  for (let i = multipliedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [multipliedArray[i], multipliedArray[j]] = [
      multipliedArray[j],
      multipliedArray[i],
    ];
  }
  return multipliedArray;
};

const genereCards = (array, typeImg) => {
  return array.map((item, index) => ({
    id: index,
    name: item,
    img: `https://api.dicebear.com/8.x/${typeImg}/svg?seed=${item}`,
    isTurned: false,
    isFound: false,
  }));
};

export const BoardMemory = () => {
  const { actifMode } = useStoreMode();
  const itemActive = useActiveItems();
  const array = useMemo(
    () => transformeArray(modes[actifMode].value, 2, names),
    [actifMode, names]
  );

  const cardsInitialState = useMemo(
    () => genereCards(array, itemActive[0].type),
    [array, itemActive]
  );
  const [cards, setCards] = useState(cardsInitialState);

  useEffect(() => {
    setCards(cardsInitialState);
  }, [itemActive, array]);

  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    const playerIsWin = () => {
      const isWin = cards.every((card) => card.isFound);
      if (isWin) {
        console.log("Vous avez gagné");
        setGameWon(true);
      } else {
        setGameWon(false);
      }
    };

    playerIsWin();
  }, [cards]);

  const handleFlip = (index) => {
    if (cards[index].isFound) return;
    setCards((currentCards) => {
      const newCards = currentCards.map((card) =>
        card.id === index ? { ...card, isTurned: !card.isTurned } : card
      );
      return checkPairFind(newCards);
    });
  };

  const checkPairFind = (newCards) => {
    const turnedCards = newCards.filter(
      (card) => card.isTurned && !card.isFound
    );

    if (turnedCards.length === 2) {
      if (turnedCards[0].name !== turnedCards[1].name) {
        setTimeout(() => {
          setCards((currentCards) =>
            currentCards.map((card) =>
              card.id === turnedCards[0].id || card.id === turnedCards[1].id
                ? { ...card, isTurned: false }
                : card
            )
          );
        }, 1000);
      } else {
        return newCards.map((card) =>
          card.id === turnedCards[0].id || card.id === turnedCards[1].id
            ? { ...card, isFound: true }
            : card
        );
      }
    }
    return newCards;
  };

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-2 max-w-[1000px] mx-auto">
      {cards.map((card, index) => (
        <div key={index} className="group w-full h-24 flex justify-center">
          <div
            className={`relative h-full w-24 rounded-sm shadow-xl cursor-pointer transition-transform duration-500 ease-in-out ${
              card.isTurned ? "[transform:rotateY(180deg)]" : ""
            }`}
            onClick={() => handleFlip(index)}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute rounded-sm  inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <img className="w-full h-full object-cover" src={card.img} />
            </div>
            <div className="absolute rounded-sm  inset-0 [transform:rotateY(0deg)] [backface-visibility:hidden] bg-primary flex items-center justify-center text-white">
              <span>?</span>
            </div>
          </div>
        </div>
      ))}
      {gameWon && (
        <>
          <Confetti tweenDuration={5000} />
        </>
      )}
    </div>
  );
};
