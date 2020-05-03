import React from 'react';
import { Router } from '@reach/router';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';

// Custom Styles
import './layout/styles/overrides.css';
import theme from './layout/styles/root.theme';

// Common
import { GLOBALS } from './utils/globals';

// Data Contexts
import RootContextProvider from './contexts/root';
import LocalStorageContextProvider, { Updater as LocalStorageContextUpdater } from './contexts/local-storage';
import WalletContextProvider, { Updater as WalletContextUpdater } from './contexts/wallet';
import NetworkContextProvider, { Updater as NetworkContextUpdater } from './contexts/network';
import TransactionContextProvider, { Updater as TransactionContextUpdater } from './contexts/transaction';
import UserInputContextProvider from './contexts/user-input';

// Page Templates
import AppLayout from './layout/AppLayout';
import Welcome from './pages/Welcome';
import Create from './pages/Create';


function AppContexts({ children }) {
    return (
        <RootContextProvider>
            <LocalStorageContextProvider>
                <WalletContextProvider>
                    <NetworkContextProvider>
                        <TransactionContextProvider>
                            <UserInputContextProvider>
                                {children}
                            </UserInputContextProvider>
                        </TransactionContextProvider>
                    </NetworkContextProvider>
                </WalletContextProvider>
            </LocalStorageContextProvider>
        </RootContextProvider>
    );
}

function AppUpdaters() {
    return (
        <>
            <LocalStorageContextUpdater />
            <WalletContextUpdater />
            <NetworkContextUpdater />
            <TransactionContextUpdater />
        </>
    );
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppContexts>
                <AppUpdaters />
                <AppLayout>
                    <Router>
                        <Welcome path={`${GLOBALS.APP_ROOT}`} />
                        <Create path={`${GLOBALS.APP_ROOT}/create`} />
                    </Router>
                </AppLayout>
            </AppContexts>
        </ThemeProvider>
    );
}

export default App;
