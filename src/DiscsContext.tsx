//discRepo wrappar disc
//discContext wrappar discRepo
//övrigt program använder sedan enbart discContext
//Framtida notering: Om ett api används, så skall context wrappa apiet och vara den enda som skickar requests

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Disc } from "./components/disc/disc";
import { saveDiscsToLocalStorage, getDiscsFromLocalStorage, seedIfEmpty } from "./data/discRepo";

interface DiscsProviderProps {
  children: ReactNode;
}

type DiscsContext = {
  getAllDiscs: () => Disc[];
  getDiscById: (id: string) => Disc;
  addDisc: (disc: Disc) => void;
  removeDisc: (id: string) => void;
  saveToRepo: () => void;
};

const discCartContext = createContext({} as DiscsContext);

export function useDiscContext(): DiscsContext {
  return useContext(discCartContext);
}

export function DiscContextProvider({ children }: DiscsProviderProps) {
  useEffect(() => {
    seedIfEmpty();
  }, []);

  const [discs, setDiscs] = useState<Disc[]>(getDiscsFromLocalStorage());

  console.log("DiscContextProvider", discs);
  function getAllDiscs(): Disc[] {
    return discs;
  }
  function getDiscById(id: string): Disc {
    const disc = discs.find((d) => d.id === id);
    if (disc === undefined) {
      return {} as Disc;
    }
    return disc;
  }
  function addDisc(disc: Disc) {
    setDiscs((currItems) => {
      return [...currItems, disc];
    });
  }
  function removeDisc(id: string) {
    setDiscs((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }
  function saveToRepo() {
    saveDiscsToLocalStorage(discs);
  }

  return (
    <discCartContext.Provider
      value={{
        getAllDiscs,
        getDiscById,
        addDisc,
        removeDisc,
        saveToRepo,
      }}
    >
      {children}
    </discCartContext.Provider>
  );
}
