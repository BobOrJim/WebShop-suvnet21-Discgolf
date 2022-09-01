import { Disc, seedData } from "../components/disc/disc";

//saveDiscsToLocalStorage
export const saveDiscsToLocalStorage = (discs: Disc[]) => {
  localStorage.setItem("discs", JSON.stringify(discs));
};

//loadDiscsFromLocalStorage
export const getDiscsFromLocalStorage = (): Disc[] => {
  const discs = localStorage.getItem("discs");
  if (discs) {
    return JSON.parse(discs);
  }
  return [];
};

//seedIfEmpty
export const seedIfEmpty = () => {
  const discs = getDiscsFromLocalStorage();
  if (discs.length === 0) {
    saveDiscsToLocalStorage(seedData);
  }
};
