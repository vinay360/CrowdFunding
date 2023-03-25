import React, { useEffect, useState } from 'react';
import { DiaplayCampaigns } from '../components';
import { useStateContext } from '../context';

const Home = () => {
  const [isLoding, setIsLoading] = useState(false);
  const { getCampaigns } = useStateContext();
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    getCampaigns().then((response) => {
      setCampaigns(response);
      setIsLoading(false);
      console.log(response);
    });
  }, [getCampaigns]);
  return (
    <DiaplayCampaigns
      isLoding={isLoding}
      title="All Campaigns"
      campaigns={campaigns}
    />
  );
};

export default Home;
