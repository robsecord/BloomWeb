// App Components
import { ContractFactory } from './contract-factory';

// Contract Data
import BloomData from './contracts/Bloom';
import DaiAbi from './contracts/dai';

// Charged Particles Contracts
const Bloom = ContractFactory.create({name: BloomData.contractName, abi: BloomData.abi});

// Asset Token Contracts
const DAI = ContractFactory.create({name: 'DAI', abi: DaiAbi});


// Helpers
const _contractMap = {
    Bloom,
    DAI
};
const getContractByName = (contractName) => {
    return _contractMap[contractName];
};

export {
    getContractByName,
    Bloom,
    DAI,
}
