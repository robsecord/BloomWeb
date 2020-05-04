export const GLOBALS = {};

GLOBALS.CODENAME            = 'Bloom';
GLOBALS.CODENAME_ABBR       = 'BLM';
GLOBALS.CODE_VERSION        = 'v0.0.12';
GLOBALS.BASE_URL            = 'https://bloom-finance.eth.link';
GLOBALS.APP_ROOT            = '/app';

GLOBALS.BRANDING = {
    PRIMARY     : '#1cb22e',
    SECONDARY   : '#ea6900',
    BACKGROUND: {
        DEFAULT : '#f8f8f8',
        PAPER   : '#f2f2f2',
    }
};

GLOBALS.STARTING_BLOCK = '6000000';

GLOBALS.ETH_UNIT      = 1e18;
GLOBALS.ETH_PRECISION = 18;

GLOBALS.CREATE_PRICE  = '1500000000000000';

GLOBALS.DEPOSIT_FEE_MODIFIER = 1e4;  // 10000  (100%)
GLOBALS.MIN_DEPOSIT_FEE      = 1e6;  // 1000000 (0.000000000001 ETH  or  1000000 WEI)

GLOBALS.INFURA_ID       = process.env.GATSBY_ETH_INFURA_ID;
GLOBALS.RPC_URL         = process.env.GATSBY_ETH_JSONRPC_URL;
GLOBALS.CHAIN_ID        = process.env.GATSBY_ETH_CHAIN_ID;
GLOBALS.DFUSE_API_KEY   = process.env.GATSBY_DFUSE_API_KEY;

GLOBALS.ASSET_TOKENS = {
    DAI: {
        ADDRESS: {
            '1': '0x6b175474e89094c44da98b954eedeac495271d0f',
            '3': '0xa31362CEa1B5CafE8C0F0b22eB64d4444d5249c8',
            '42': '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa',
        }
    }
};

GLOBALS.MIN_BLOCK_CONFIRMATIONS = 3;
GLOBALS.ETH_DISPLAY_PRECISION   = 7;
GLOBALS.MOBILE_MENU_WIDTH       = 250;

GLOBALS.BOOLEAN_TRUE_HEX  = '0x0000000000000000000000000000000000000000000000000000000000000001';
GLOBALS.BOOLEAN_FALSE_HEX = '0x0000000000000000000000000000000000000000000000000000000000000000';

GLOBALS.WALLET_TYPE_WALLETCONNECT   = 'walletconnect';
GLOBALS.WALLET_TYPE_FORTMATIC       = 'fortmatic';
GLOBALS.WALLET_TYPE_PORTIS          = 'portis';
GLOBALS.WALLET_TYPE_AUTHEREUM       = 'authereum';
GLOBALS.WALLET_TYPE_METAMASK        = 'metamask';
GLOBALS.WALLET_TYPE_NATIVE          = 'native';
