import React, { creatContext, useContext, useState } from 'react';

export const DeviceContext = creatContext();

function Context({ children }) {
  const [device, setDevice] = useState('desktop');

  return <DeviceContext.Provider>{children}</DeviceContext.Provider>;
}

export default Context;
