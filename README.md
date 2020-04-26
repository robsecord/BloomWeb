# Bloom
### Coupons that Earn Interest!

![GitHub package.json dynamic](https://img.shields.io/github/package-json/version/robsecord/BloomWeb)

![GitHub package.json dynamic](https://img.shields.io/github/package-json/keywords/robsecord/BloomWeb)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/robsecord/BloomWeb)
![GitHub repo size](https://img.shields.io/github/repo-size/robsecord/BloomWeb)

![Maintenance](https://img.shields.io/maintenance/yes/2020)
![GitHub last commit](https://img.shields.io/github/last-commit/robsecord/BloomWeb)

[![Netlify Status](https://api.netlify.com/api/v1/badges/cc2fea21-5b34-4285-b7b6-6e626f0d5eff/deploy-status)](https://app.netlify.com/sites/bloom-finance/deploys)

#### **Demo:**
https://bloom-finance.netlify.com/


#### **Account Management Integrations:**

- QR-Connected Wallets
    - Coinbase WalletLink
    - Wallet Connect

- Hosted Wallets
    - Fortmatic
    - Torus
    - Portis
    - Uport
    - Authereum
    - Bitski
    - SquareLink
    - Arkane Network
    
- Browser Wallets
    - MetaMask
    - Native (Brave, Opera, Toshi, Cipher, Status, etc..) -- **Partially Done**

- Hardware Wallets
    - ~~Ledger~~ -- _todo_
    - ~~Trezor~~ -- _todo_

#### **Blockchain Event Streaming & Notifications:**
- ~~dfuse.io~~ -- _todo_

#### **Ethereum Design Components:**
- Rimble UI

#### **Gatsby Plugins:**
- gatsby-plugin-react-helmet
- gatsby-plugin-create-client-paths
- gatsby-source-filesystem
- gatsby-transformer-sharp
- gatsby-plugin-sharp
- gatsby-plugin-manifest
- gatsby-plugin-lodash
- gatsby-plugin-netlify
- gatsby-plugin-offline      

#### **Build Environment:**
- node: 12.16.1
- npm: 6.13.4
- yarn: 1.22.4

#### **Develop/Run:**

To start, create the following files in the root directory of the project:

**_.env.development_**

    GATSBY_ETH_JSONRPC_URL=https://ropsten.infura.io/v3/__YOUR_INFURA_API_KEY_HERE__
    GATSBY_ETH_CHAIN_ID=3
    
    GATSBY_FORTMATIC_APIKEY=__YOUR_FORTMATIC_API_KEY_HERE__
    GATSBY_PORTIS_DAPP_ID=__YOUR_PORTIS_DAPP_ID_HERE__
    GATSBY_UPORT_DAPP_NAME=__YOUR_UPORT_DAPP_NAME_HERE__
    GATSBY_BITSKI_CLIENT_ID=__YOUR_BITSKI_CLIENT_ID_HERE__
    GATSBY_SQUARELINK_DAPP_ID=__YOUR_SQUARELINK_DAPP_ID_HERE__
    GATSBY_ARKANE_CLIENT_ID=__YOUR_ARKANE_CLIENT_ID_HERE__

Next, run the following commands from a terminal:

    yarn install
    yarn start

Or, with NPM:

    npm install
    npm run develop
