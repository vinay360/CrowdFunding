import { ethers } from 'ethers';
import contractAddress from '../constants/contractData/CrowdFunding-address.json';
import contractAbi from '../constants/contractData/CrowdFunding.json';

function useContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const _contract = new ethers.Contract(
    contractAddress.address,
    contractAbi.abi,
    provider
  );
  const contract = _contract.connect(signer);
  const createCampaign = async (form) => {
    try {
      const tx = await contract.createCampaign(
        form.title,
        form.description,
        ethers.utils.parseUnits(form.target),
        new Date(form.deadline).getTime(),
        form.image
      );
      return tx;
    } catch (err) {
      return err;
    }
  };

  const getCampaigns = async () => {
    const campaigns = await contract.getCampaigns();
    const parsedCampaigns = campaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: ethers.utils.formatEther(campaign.deadline.toString()),
      amountCollected: ethers.utils.formatEther(
        campaign.amountCollected.toString()
      ),
      id: i,
      image: campaign.image,
    }));
    return parsedCampaigns;
  };

  const getUserCampaigns = async (address) => {
    const campaigns = await getCampaigns();
    const userCampaigns = campaigns.filter((campaign) => {
      // console.log(campaign.owner, address);
      return campaign.owner.toLowerCase() === address;
    });
    return userCampaigns;
  };
  return [createCampaign, getCampaigns, getUserCampaigns];
}

export default useContract;
