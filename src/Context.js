import React, { creatContext, useState } from 'react';

export const DeviceContext = creatContext();

function Context({ children }) {
  const [deviceState, setDeviceState] = useState('desktop');
  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  useEffect(() => {
    const resizeListener = () => {
      if (getWidth() < 800) setDeviceState('tablet');
      else if (getWidth() < 480) setDeviceState('mobile');
      else setDeviceState('desktop');
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);
  console.log(state);

  return (
    <DeviceContext.Provider value={deviceState}>
      {children}
    </DeviceContext.Provider>
  );
}

export default Context;
