//discRepo wrappar disc
//discContext wrappar discRepo
//övrigt program använder sedan enbart discContext
//Framtida notering: Om ett api används, så skall context wrappa apiet och vara den enda som skickar requests

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Disc, DiscCreate } from "../components/disc/disc";
import { getDiscsFromLocalStorage, saveDiscsToLocalStorage, seedIfEmpty } from "../data/discRepo";
import { v4 as uuidv4 } from "uuid";

interface DiscsProviderProps {
  children: ReactNode;
}

interface IDiscContext {
  getAllDiscs: () => Disc[];
  getDiscById: (id: string) => Disc;
  addDisc: (disc: DiscCreate) => void;
  removeDisc: (id: string) => void;
  saveToRepo: () => void;
  replaceDisc: (disc: Disc) => void;
}

const DiscContext = createContext({} as IDiscContext);

export const useDiscContext = (): IDiscContext => useContext(DiscContext);

function DiscContextProvider({ children }: DiscsProviderProps) {
  const [discs, setDiscs] = useState<Disc[]>(getDiscsFromLocalStorage());

  useEffect(() => {
    seedIfEmpty();
  }, []);

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

  function addDisc(disc: DiscCreate) {
    const newDisc = {
      id: uuidv4(),
      ...disc,
    };
    setDiscs([...discs, newDisc]);
  }

  function replaceDisc(disc: Disc) {
    const newDiscs = discs.map((d) => (d.id === disc.id ? disc : d));
    setDiscs(newDiscs);
  }

  function removeDisc(id: string) {
    setDiscs((currItems) => currItems.filter((item) => item.id !== id));
  }

  function saveToRepo() {
    saveDiscsToLocalStorage(discs);
  }

  return (
    <DiscContext.Provider
      value={{
        getAllDiscs,
        getDiscById,
        addDisc,
        removeDisc,
        saveToRepo,
        replaceDisc,
      }}
    >
      {children}
    </DiscContext.Provider>
  );
}

export default DiscContextProvider;