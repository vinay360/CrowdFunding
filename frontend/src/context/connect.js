import { useEffect, useState } from 'react';

function useConnect() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [account, setAccount] = useState(null);

  const connectAccounts = async () => {
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        accountsChanged(res);
      } catch (err) {
        console.error(err.message);
        setErrorMessage('There was a problem connecting to MetaMask');
      }
    } else {
      setErrorMessage('Install MetaMask');
    }
  };

  const accountsChanged = (newAccount) => {
    if (newAccount.length) setAccount(newAccount);
    else setAccount(null);
  };

  const chainChanged = () => {
    console.log('chain changed');
    setErrorMessage(null);
    setAccount(null);
  };
  const alreadyConnected = async () => {
    try {
      const res = await window.ethereum.request({
        method: 'eth_accounts',
      });
      accountsChanged(res);
    } catch (err) {
      console.error(err);
      setErrorMessage('There was a problem connecting to MetaMask');
    }
  };
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', accountsChanged);
      window.ethereum.on('chainChanged', chainChanged);
      alreadyConnected();
    }
  }, []);

  return [account, connectAccounts, errorMessage];
}

export default useConnect;
