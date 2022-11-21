import { createContext } from 'react';

type TransferMenuContext = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const transferMenuContext = createContext<TransferMenuContext>({
  showModal: false,
  setShowModal: () => {}
});
