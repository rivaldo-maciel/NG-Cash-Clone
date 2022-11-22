import { createContext } from 'react';

type SkinContextType = {
  skin: string;
  setSkin: React.Dispatch<React.SetStateAction<string>>;
  showSkinMenu: boolean;
  setShowSkinMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const skinContext = createContext<SkinContextType>({
  skin: '/graffiti1.jpg',
  setSkin: () => {},
  showSkinMenu: false,
  setShowSkinMenu: () => {},
});
