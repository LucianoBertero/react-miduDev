import { useState, useEffect } from "react";
import { getRandomFact } from "./../service/facts";

export function useCatFact() {
  const [fact, setFact] = useState();
  const refreshRandomFact = () => {
    getRandomFact().then(setFact);
  };
  useEffect(() => {
    getRandomFact;
  }, []);

  return { fact, refreshRandomFact };
}
