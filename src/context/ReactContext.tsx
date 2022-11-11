import React, { createContext, useMemo, useState } from 'react';

interface Loc {
  lat: number,
  long: number,
};

interface ContextType {
  loc: Loc,
  setLoc: (loc: Loc) => void,
}

export const LocContext = createContext<ContextType>({
  loc: { lat: 12, long: 12 },
  setLoc: (loc: Loc) => {},
});

export const LocProvider = ({ children } :any) => {
  const [loc, setLoc] = useState<Loc>({ lat: 12, long: 12 });

  const contextValue = useMemo(() => {
    return {
      loc,
      setLoc,
    };
  }, [loc]);

  return (
    <LocContext.Provider value={contextValue}>
      {children}
    </LocContext.Provider>
  );
};
