import React, { createContext, useState, useEffect, useContext } from 'react';

export const DeviceContext = createContext();
export const useDeviceContext = useContext(DeviceContext);
function Context({ children }) {
  const [deviceState, setDeviceState] = useState('desktop');
  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  useEffect(() => {
    const resizeListener = () => {
      if (getWidth() < 800 && getWidth() > 480) setDeviceState('tablet');
      else if (getWidth() < 480) setDeviceState('mobile');
      else setDeviceState('desktop');
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);
  console.log(deviceState);

  return (
    <DeviceContext.Provider value={deviceState}>
      {children}
    </DeviceContext.Provider>
  );
}

export default Context;
