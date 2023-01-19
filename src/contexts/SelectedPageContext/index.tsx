import { createContext } from "react";
import { SelectedPage } from "shared/types";

export interface SelectedPageContextType {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

export const SelectedPageContext = createContext<SelectedPageContextType>({
  selectedPage: SelectedPage.Home,
  setSelectedPage(value) {
    this.selectedPage = value;
  },
});
