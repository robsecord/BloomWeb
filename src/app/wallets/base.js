// Frameworks
import _ from 'lodash';

// App Components
import { Helpers } from '../utils/helpers';

class IWalletBase {
    constructor(type, wallet, walletDispatch, updateCache) {
        this.type = type;
        this.wallet = wallet;
        this.walletDispatch = walletDispatch;
        this.updateCache = updateCache;
        this.web3 = null;
        this.provider = null;
    }

    static isEnabled() {
        return true;
    }

    async prepare() {
        // Get Default Account if already Connected
        await this.changeUserAccount();
        this._hookCommonEvents();
    }

    async connect() {
        return await this.changeUserAccount();
    }

    async disconnect() {
        this.updateCache('cachedWallet', '');
        this.walletDispatch({type: 'LOGOUT'});
    }

    async changeUserAccount(accounts) {
        const payload = {
            allReady    : false,
            networkId   : 0,
            type        : '',
            name        : '',
            address     : '',
            balance     : 0,
        };
        this.walletDispatch({type: 'CONNECTED_ACCOUNT', payload});

        if (_.isEmpty(accounts)) {
            accounts = await this.web3.eth.getAccounts();
        }
        if (_.isEmpty(accounts)) {
            console.error('Failed to connect to accounts for wallet!');
            return;
        }

        const { correctNetwork } = Helpers.getCorrectNetwork();
        const address = _.first(accounts) || '';

        // console.log('>>>>>  this.web3.eth', await this.web3.eth);
        // console.log('>>>>>  this.provider', this.provider);
        // console.log('>>>>>  getChainId', await this.web3.eth.getChainId());
        // console.log('>>>>>  accounts', accounts);
        // console.log('>>>>>  address', address);
        // console.log('>>>>>  coinbase', await this.web3.eth.getCoinbase());

        payload.networkId = await this.web3.eth.getChainId(); // this.provider.networkVersion;
        payload.type = this.type;
        payload.address = address;
        payload.name = _.join([..._.slice(address, 0, 6), '...', ..._.slice(address, -4)], '');
        payload.balance = await this.web3.eth.getBalance(address);
        payload.allReady = correctNetwork === payload.networkId;

        this.updateCache('cachedWallet', this.type);
        this.walletDispatch({type: 'CONNECTED_ACCOUNT', payload});
        return payload;
    }

    getChainName(chainId) {
        return Helpers.getNetworkName(chainId);
    }

    _hookCommonEvents() {
        const _changeAccount = async () => {
            await this.changeUserAccount();
        };
        if (_.isFunction(this.provider.on)) {
            this.provider.on('accountsChanged', _changeAccount);
            this.provider.on('networkChanged', _changeAccount);
        }
    }
}

export default IWalletBase;
