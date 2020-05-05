// Frameworks
import ENS from 'ethereum-ens';
import window from 'global';
import _ from 'lodash';

// Internals
import { GLOBALS } from '../utils/globals';

// Wallets
import { WalletProviders } from '../wallets/providers';


class Wallet {
    constructor() {
        this._siteTitle = '';
        this._siteLogoUrl = '';
        this._walletDispatch = null;
        this._updateCache = null;
    }

    static instance() {
        if (!Wallet.__instance) {
            Wallet.__instance = new Wallet();
        }
        return Wallet.__instance;
    }

    init({walletDispatch, updateCache, cachedWallet, siteTitle, siteLogoUrl}) {
        this._siteTitle = siteTitle;
        this._siteLogoUrl = siteLogoUrl;
        this._walletDispatch = walletDispatch;
        this._updateCache = updateCache;

        this.reconnectFromCache(cachedWallet);
    }

    static isEnabled(type) {
        return (WalletProviders[type].wallet).isEnabled();
    }

    get siteTitle() {
        return this._siteTitle;
    }

    set siteTitle(title) {
        this._siteTitle = title;
    }

    get siteLogoUrl() {
        return this._siteLogoUrl;
    }

    set siteLogoUrl(url) {
        this._siteLogoUrl = url;
    }

    async prepare(type = GLOBALS.WALLET_TYPE_METAMASK) {
        const walletData = WalletProviders[type];
        const walletClass = walletData.wallet;
        this.wallet = new walletClass(this, this._walletDispatch, this._updateCache);
        await this.wallet.prepare({options: walletData.options, ...Wallet._getEnv()});
        this.ens = new ENS(this.getProvider());
    }

    async connect() {
        if (!this.wallet) { return; }
        return await this.wallet.connect();
    }

    async disconnect() {
        if (!this.wallet) { return; }
        await this.wallet.disconnect();
    }

    async reconnectFromCache(cachedWallet) {
        if (!_.isEmpty(cachedWallet)) {
            await this.prepare(cachedWallet);
            await this.connect();
        }
    }

    static getName(type) {
        return (WalletProviders[type]).name || 'Unknown';
    }

    getWeb3() {
        if (!this.wallet) { return; }
        return this.wallet.web3;
    }

    getProvider() {
        if (!this.wallet) { return; }
        return this.wallet.provider;
    }

    async getEnsName(address) {
        if (!this.ens) { return 'ENS Unavailable'; }
        try {
            return await this.ens.reverse(address).addr();
        }
        catch (err) {
            return 'ENS: Name not found';
        }
    }

    async getEnsAddress(name) {
        if (!this.ens) { return 'ENS Unavailable'; }
        try {
            return await this.ens.resolver(name).addr();
        }
        catch (err) {
            return 'ENS: Address not found';
        }
    }

    checkInjectedProviders() {
        const result = {
            injectedAvailable: !!window.ethereum || !!window.web3
        };
        if (result.injectedAvailable) {
            let fallbackProvider = true;
            _.forEach(WalletProviders, (providerInfo) => {
                result[providerInfo.check] = this.verifyInjectedProvider(providerInfo.check);
                if (result[providerInfo.check] === true) {
                    fallbackProvider = false;
                }
            });
            // Nitfy Wallet fix
            if (result['isMetamask']) {
                if (this.verifyInjectedProvider('isNiftyWallet')) {
                    result['isMetamask'] = false;
                    result['isNiftyWallet'] = true;
                }
            }
            // Coinbase Wallet fix
            if (result['isCipher']) {
                if (this.verifyInjectedProvider('isToshi')) {
                    result['isCipher'] = false;
                    result['isToshi'] = true;
                }
            }
            if (fallbackProvider) {
                result['isWeb3'] = true;
            }
        }

        return result;
    }

    verifyInjectedProvider(check) {
        return window.ethereum
            ? window.ethereum[check] || (window.web3 && window.web3.currentProvider)
                ? window.web3
                    ? window.web3.currentProvider[check]
                    : true
                : false
            : window.web3 && window.web3.currentProvider
                ? window.web3.currentProvider[check]
                : false;
    }

    static _getEnv() {
        const rpcUrl = GLOBALS.RPC_URL;
        const chainId = GLOBALS.CHAIN_ID;
        if (_.isEmpty(rpcUrl)) {
            console.error('Invalid RPC-URL.  Make sure you have set the correct ENV VARs to connect to Web3; ("ETH_JSONRPC_URL").');
        }
        if (_.isEmpty(chainId)) {
            console.error('Invalid Chain-ID.  Make sure you have set the correct ENV VARs to connect to Web3; ("ETH_CHAIN_ID").');
        }
        return {rpcUrl, chainId};
    }
}
Wallet.__instance = null;

export default Wallet;
