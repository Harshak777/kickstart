import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider)
} else {
    const provider = new Web3.providers.HttpProvider(
        'https://kovan.infura.io/v3/c3ab25017a8b4f9a809b8ec402e4f3c7'
    );
    web3 = new Web3(provider);
}

export default web3;
 