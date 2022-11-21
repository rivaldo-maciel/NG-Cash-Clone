import { useState } from 'react';
import { transferMenuContext } from './transferMenuContext';

type props = {
  children: React.ReactNode
}

const TransferMenuContext = ({ children }: props ) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <transferMenuContext.Provider value={{ showModal, setShowModal }}>
      {
        children
      }
    </transferMenuContext.Provider>
  )
}

export default TransferMenuContext;