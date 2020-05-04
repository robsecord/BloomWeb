// Frameworks
import Authereum from 'authereum';
import Web3 from 'web3';

import IWalletBase from './base';
import { GLOBALS } from '../utils/globals';

class AuthereumWallet extends IWalletBase {
    constructor(wallet, walletDispatch, updateCache) {
        super(GLOBALS.WALLET_TYPE_AUTHEREUM, wallet, walletDispatch, updateCache);
    }

    async prepare({rpcUrl, chainId}) {
        const chainName = this.getChainName(chainId);

        // Initialize Authereum
        this.authereum = new Authereum(chainName);

        // Initialize a Web3 Provider object
        this.provider = this.authereum.getProvider();

        // Initialize a Web3 object
        this.web3 = new Web3(this.provider);
    }

    async connect() {
        const accounts = await this.provider.enable();
        await this.changeUserAccount(accounts);
    }
}

export default AuthereumWallet;
