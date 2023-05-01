import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/store';

function App() {
    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <CssBaseline />
                    <AppRoutes />
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
