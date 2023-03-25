import { createContext, useContext } from 'react';
import useConnect from './connect';

const state = {
  accounts: [],
  connectAccounts: async () => {},
};

export const StateContext = createContext(state);

export const StateContextProvider = ({ children }) => {
  const [accounts, connectAccounts] = useConnect();

  return (
    <StateContext.Provider
      value={{
        accounts,
        connectAccounts,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
