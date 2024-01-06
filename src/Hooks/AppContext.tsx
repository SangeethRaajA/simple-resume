import { createContext, ReactNode } from "react";

interface AppContextProps {
  // Define the type of the context value here
  // For example, you can replace 'any' with the actual type you want to use
//   someValue: string;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export default AppContext;
