import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const CurrentBasketContext = createContext();

export const useCurrentBasketContext = () => useContext(CurrentBasketContext);

export function CurrentBasketContextProvider({ children }) {
  const [currentBasket, setCurrentBasket] = useState(0);

  const contextValue = useMemo(() => {
    return { currentBasket, setCurrentBasket };
  }, [currentBasket]);

  return (
    <CurrentBasketContext.Provider value={contextValue}>
      {children}
    </CurrentBasketContext.Provider>
  );
}

CurrentBasketContextProvider.propTypes = {
  children: PropTypes.node,
};

CurrentBasketContextProvider.defaultProps = {
  children: undefined,
};
