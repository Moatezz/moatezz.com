import React, { createContext, useState, useEffect, useContext } from 'react';

export const DeviceContext = createContext();
export const useDeviceContext = () => useContext(DeviceContext);
function Context({ children }) {
  const [deviceState, setDeviceState] = useState('mobile');
  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  useEffect(() => {
    const resizeListener = () => {
      if (getWidth() <= 1024) setDeviceState('mobile');
      else setDeviceState('desktop');
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);
  console.log(getWidth());

  return (
    <DeviceContext.Provider value={deviceState}>
      {children}
    </DeviceContext.Provider>
  );
}

export default Context;
