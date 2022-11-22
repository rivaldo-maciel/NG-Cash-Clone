import { useState } from 'react';
import { skinContext } from './skinContext';


type props = {
  children: React.ReactNode;
}

const SkinContext = ({ children }: props) => {
  const [skin, setSkin] = useState('/graffiti1.jpg');
  const [showSkinMenu, setShowSkinMenu] = useState(false);
  return (
    <skinContext.Provider value={{ skin, setSkin, showSkinMenu, setShowSkinMenu }}>
      {
        children
      }
    </skinContext.Provider>
  )
}

export default SkinContext;