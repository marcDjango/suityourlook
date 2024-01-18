import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const CurrentBasketContext = createContext();

export default function CounterProvider({ children }) {
  const [currentBasket, setCurrentBasket] = useState(0);

  const value = useMemo(
    () => ({ currentBasket, setCurrentBasket }),
    [currentBasket]
  );

  return (
    <CurrentBasketContext.Provider value={value}>
      {children}
    </CurrentBasketContext.Provider>
  );
}

CounterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCounter = () => {
  const context = useContext(CurrentBasketContext);
  if (!context) {
    throw new Error("useOptions must be used within a PlayerProvider");
  }
  return context;
};

// export const useCurrentBasketContext = () => useContext(CurrentBasketContext);

// export function CurrentBasketContextProvider({ children }) {
//   const [currentBasket, setCurrentBasket] = useState(0);

//   const contextValue = useMemo(() => {
//     return { currentBasket, setCurrentBasket };
//   }, [currentBasket]);

//   return (
//     <CurrentBasketContext.Provider value={contextValue}>
//       {children}
//     </CurrentBasketContext.Provider>
//   );
// }

// CurrentBasketContextProvider.propTypes = {
//   children: PropTypes.node,
// };

// CurrentBasketContextProvider.defaultProps = {
//   children: undefined,
// };
