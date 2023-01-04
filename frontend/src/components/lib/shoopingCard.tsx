import { createContext } from "react";
import { StateInterface } from "./globalTypes"

export const ctx = createContext<StateInterface | null>(
    {} as StateInterface || null
  );