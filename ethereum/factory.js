import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xe46Da333D7AcC5C068B5D5b0b88DB8EbD6c8A349'
);

export default instance;