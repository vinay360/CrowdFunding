import { createContext, useContext } from 'react';
import useConnect from './connect';
import useContract from './use-contract';

const state = {
  account: '',
  connectAccounts: async () => {},
  createCampaign: async () => {},
  getCampaigns: async () => {},
  getUserCampaigns: async () => {},
};

export const StateContext = createContext(state);

export const StateContextProvider = ({ children }) => {
  const [account, connectAccounts] = useConnect();
  const [createCampaign, getCampaigns, getUserCampaigns] = useContract();
  return (
    <StateContext.Provider
      value={{
        account,
        connectAccounts,
        createCampaign,
        getCampaigns,
        getUserCampaigns,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
